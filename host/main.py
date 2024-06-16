import threading

from package.recognize_speech import recognize_speech, get_keywords
from package.send_images_to_ml_server import capture_and_send_images
from package.stream import start_stream

fps = 10
duration = 5
cam_id = 0

if __name__ == '__main__':
    flask_thread = threading.Thread(target=start_stream)
    flask_thread.daemon = True
    flask_thread.start()
    image_thread = threading.Thread(target=capture_and_send_images, args=(cam_id, fps, duration))
    image_thread.daemon = True
    image_thread.start()
    
    keywords = get_keywords()
    speech_thread = threading.Thread(target=recognize_speech, args=(keywords,))
    speech_thread.daemon = True
    speech_thread.start()
    
    image_thread.join()
    speech_thread.join()
    flask_thread.join()

