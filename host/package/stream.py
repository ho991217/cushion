from flask import Flask, Response
import cv2
from flask_sse import sse
from flask_cors import CORS

from supabase import create_client, Client

url: str = 'https://vutmzwowadamoutfdmkv.supabase.co'
key: str = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1dG16d293YWRhbW91dGZkbWt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc5NzQ5MTAsImV4cCI6MjAzMzU1MDkxMH0.vGr7EtVesxc8EiLmhFg4Z7UI2K8LirwHz-100NltKC8'
supabase: Client = create_client(url, key)

app = Flask(__name__)
app.config["REDIS_URL"] = "redis://localhost:6379/0"
app.register_blueprint(sse, url_prefix='/sse')
CORS(app, resources={r"*": {"origins": "*"}})  # CORS 설정

tapo_id = "ho991217"
tapo_pw = "Jy219512"
tapo_ip = "192.168.0.75"
rtsp_url = f'rtsp://{tapo_id}:{tapo_pw}@{tapo_ip}:554/stream2'

def send_notification(type: str, message: str):
    supabase.from_('notifications').insert([{'type': type, 'message': message}]).execute()

embeded_webcam = cv2.VideoCapture(0) # id: 0
tapo_cam = cv2.VideoCapture(rtsp_url) # id: 1

@app.route('/video_feed/<int:cam_id>')
def video_feed(cam_id):
    return Response(generate_frames(cam_id),
                    mimetype='multipart/x-mixed-replace; boundary=frame')
    
@app.route('/notification')
def notification():
    send_notification("구조요청", "구조요청이 감지되었습니다.", "test_user")
    return "Notification sent."
    
def generate_frames(id: int):
    if id == 1:
        cap = embeded_webcam
    elif id == 2:
        cap = tapo_cam
    else:
        cap = embeded_webcam
        
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        ret, buffer = cv2.imencode('.jpg', frame)
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

        
def start_stream():
    app.run(host='0.0.0.0', port=5500)