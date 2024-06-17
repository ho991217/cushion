import threading

from package.stream import start_stream

if __name__ == '__main__':
    flask_thread = threading.Thread(target=start_stream)
    flask_thread.daemon = True
    flask_thread.start()
    
    flask_thread.join()