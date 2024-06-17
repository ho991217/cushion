import threading

from package.recognize_speech import recognize_speech, get_keywords

if __name__ == '__main__':
    keywords = get_keywords()
    speech_thread = threading.Thread(target=recognize_speech, args=(keywords,))
    speech_thread.daemon = True
    speech_thread.start()
    
    speech_thread.join()