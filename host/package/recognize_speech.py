import speech_recognition as sr
import requests
from package.stream import send_notification

def get_keywords():
    # url = "http://43.201.222.62:8080/api/words"
    # response = requests.get(url)
    # if response.status_code == 200:
    #     return response.json()
    # else:
    #     return "Failed to get keywords."
    return ['도와줘', '구해줘', '살려줘', '구조요청해줘']

def recognize_speech(keywords: list):
    recognizer = sr.Recognizer()
    mic = sr.Microphone()

    while True:
        with mic as source:
            audio = recognizer.listen(source)

        try:
            text = recognizer.recognize_google(audio, language="ko-KR")
            print(f"Recognized: {text}")
            text = text.replace(' ', '')
            
            for keyword in keywords:
                if keyword in text:
                    print(f"Keyword detected: {keyword}")
                    send_notification("구조요청", "구조요청이 감지되었습니다.", "test_user")
                    break
                
        except sr.UnknownValueError:
            print("Sorry, I did not understand that.")
        except sr.RequestError as e:
            print(f"Could not request results; {e}")
            