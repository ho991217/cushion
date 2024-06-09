# import cv2
# import time
# import requests

# def capture_and_send_images():
#     cap = cv2.VideoCapture(0)
#     fps = 10
#     duration = 10
#     frame_count = fps * duration

#     while True:
#         images = []
#         for _ in range(frame_count):
#             ret, frame = cap.read()
#             if not ret:
#                 break
#             _, buffer = cv2.imencode('.jpg', frame)
#             images.append(buffer.tobytes())
#             time.sleep(1 / fps)

#         # Call function to send images to external server
#         send_images_to_server(images)

#         # Clear images from memory
#         del images

# def send_images_to_server(images):
#     url = "http://your-server-url/upload"
#     files = [('images', ('frame.jpg', img, 'image/jpeg')) for img in images]
#     response = requests.post(url, files=files)
#     print(response.status_code)

# if __name__ == "__main__":
#     capture_and_send_images()
from flask import Flask, Response
import cv2
import time
import threading
import requests
from uuid import uuid4

app = Flask(__name__)

# Global variables for shared access
cap = cv2.VideoCapture(0)
fps = 10
duration = 5
frame_count = fps * duration

def generate_frames():
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        ret, buffer = cv2.imencode('.jpg', frame)
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

def capture_and_send_images():
    cap = cv2.VideoCapture(0)
    fps = 10
    duration = 10
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
    url = "http://localhost:3001/upload"
    files = [('images', (f'{uid}_frame_{i}.jpg', img, 'image/jpeg')) for uid, i, img in images]
    response = requests.post(url, files=files)
    print(response.status_code)

if __name__ == '__main__':
    # Start the image capturing and sending in a separate thread
    thread = threading.Thread(target=capture_and_send_images)
    thread.daemon = True
    thread.start()

    # Start the Flask server for streaming
    app.run(host='0.0.0.0', port=5500)
