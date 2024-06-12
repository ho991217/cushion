import cv2
import time
from uuid import uuid4
import requests
from package.stream import send_notification
import os

cap = cv2.VideoCapture(0)

def capture_and_send_images(fps:int = 10, duration:int = 10):
    frame_count = fps * duration
    while True:
        images = []
        frames = []
        unique_id = str(uuid4())
        for i in range(frame_count):
            ret, frame = cap.read()
            if not ret:
                break
            _, buffer = cv2.imencode('.jpg', frame)
            images.append((i, buffer.tobytes()))
            frames.append(frame)
            time.sleep(1 / fps)

        # Call function to send images to external server
        did_fall = send_images_to_server(unique_id, images)
        
        if did_fall:
            send_notification("낙상", "낙상이 감지되었습니다.", "test_user")
            print('fall detected')
            
            video_path = save_frames_as_video(frames, unique_id, fps)
            upload_video_to_server(video_path)

        # Clear images from memory
        del images
        del frames


def send_images_to_server(id, images):
    url = "http://220.149.232.224:60001/predict"
    files = [('files', (f'{id}_frame_{frame_no}.jpg', img, 'image/jpeg')) for frame_no, img in images] 
    payload = {}
    headers = {}

    try:
        print("api request send")
        response = requests.request("POST", url, headers=headers, data=payload, files=files).json()
        did_fall = response["fall"]
        # id = response["id"]
            
        return did_fall
        
    except Exception as e:
        print(f"{e}")
        
def save_frames_as_video(frames: list, unique_id, fps):
    height, width, _ = frames[0].shape
    video_path = f"{unique_id}.mp4"
    fourcc = cv2.VideoWriter_fourcc('m', 'p', '4', 'v')
    out = cv2.VideoWriter(video_path, fourcc, fps, (width, height))

    for frame in frames:
        out.write(frame)

    out.release()
    return video_path

def upload_video_to_server(video_path):
    url = "http://43.201.222.62:8080/api/videos/upload"
    files = {'file': (video_path, open(video_path, 'rb'), 'video/mp4')}
    payload = {
        "deviceId": "1",
    }
    headers = {}

    try:
        response = requests.request("POST", url, headers=headers, data=payload, files=files)
        if response.status_code == 200:
            print('Video uploaded successfully')
        else:
            print('Failed to upload video')
    except Exception as e:
        print(f"Error uploading video: {e}")
    finally:
        os.remove(video_path)