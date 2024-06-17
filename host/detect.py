import threading

from package.send_images_to_ml_server import capture_and_send_images

fps = 10
duration = 5
cam_id = 1

if __name__ == '__main__':
    image_thread = threading.Thread(target=capture_and_send_images, args=(cam_id, fps, duration))
    image_thread.daemon = True
    image_thread.start()
    
    image_thread.join()