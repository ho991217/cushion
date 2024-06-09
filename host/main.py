import threading

from package.recognize_speech import recognize_speech
from package.send_images_to_ml_server import capture_and_send_images
from package.stream import start_stream

fps = 10
duration = 10

if __name__ == '__main__':
    image_thread = threading.Thread(target=capture_and_send_images, args=(fps, duration))
    image_thread.daemon = True
    image_thread.start()
    
    speech_thread = threading.Thread(target=recognize_speech)
    speech_thread.daemon = True
    speech_thread.start()
    
    image_thread.join()
    speech_thread.join()

    start_stream()
