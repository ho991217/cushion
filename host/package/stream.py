from flask import Flask, Response
import cv2

app = Flask(__name__)

cap = cv2.VideoCapture(0)

@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')
    
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
    