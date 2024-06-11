import cv2
import time
from uuid import uuid4
import requests
from package.stream import send_notification

cap = cv2.VideoCapture(0)

def capture_and_send_images(fps:int = 10, duration:int = 10):
    frame_count = fps * duration
    while True:
        images = []
        unique_id = str(uuid4())
        for i in range(frame_count):
            ret, frame = cap.read()
            if not ret:
                break
            _, buffer = cv2.imencode('.jpg', frame)
            images.append((unique_id, i, buffer.tobytes()))
            time.sleep(1 / fps)

        # Call function to send images to external server
        send_images_to_server(images)

        # Clear images from memory
        del images


def send_images_to_server(images):
    url = "http://220.149.232.224:60001/predict"
    files = [('images', (f'{uid}_frame_{i}.jpg', img, 'image/jpeg')) for uid, i, img in images]
    payload = {}
    headers = {}

    try:
        print("api request send")
        response = requests.request("POST", url, headers=headers, data=payload, files=files).json()
        did_fall = response["fall"]
        id = response["id"]
        
        if did_fall:
            send_notification("낙상", "낙상이 감지되었습니다.", "test_user")
            print('fall detected')
        
    except Exception as e:
        print(f"{e}")