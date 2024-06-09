import speech_recognition as sr

def recognize_speech():
    recognizer = sr.Recognizer()
    mic = sr.Microphone()

    while True:
        with mic as source:
            print("Listening for '도와줘'...")
            audio = recognizer.listen(source)

        try:
            text = recognizer.recognize_google(audio, language="ko-KR")
            print(f"Recognized: {text}")

            if "도와줘" in text:
                print("감지됨")
        except sr.UnknownValueError:
            print("Sorry, I did not understand that.")
        except sr.RequestError as e:
            print(f"Could not request results; {e}")
            