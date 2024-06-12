from flask import Flask, Response
import cv2
from flask_sse import sse
from flask_cors import CORS

app = Flask(__name__)
app.config["REDIS_URL"] = "redis://localhost:6379/0"
app.register_blueprint(sse, url_prefix='/sse')
CORS(app, resources={r"*": {"origins": "*"}})  # CORS 설정

def send_notification(title: str, message: str, user: str):
    with app.app_context():
        data = {'title': title, 'message': message, 'user': user}
        sse.publish(data, type='notification')

cap = cv2.VideoCapture(0)

@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')
    
@app.route('/notification')
def notification():
    send_notification("구조요청", "구조요청이 감지되었습니다.", "test_user")
    return "Notification sent."
    
def generate_frames():
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