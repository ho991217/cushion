import { isApp } from '@/lib/utils';

type VibrationType = 'light' | 'medium' | 'heavy' | 'soft' | 'rigid';

type Message = {
  type: 'haptic' | 'navigate';
  data: VibrationType | string;
};

type UseReactNativeWebview = {
  vibrate: (type: VibrationType) => void;
  navigate: (url: string) => void;
  postMessage: (message: string) => void;
};

export default function useReactNativeWebview(): UseReactNativeWebview {
  const postMessage = (message: string) => {
    if (isApp()) {
      window.ReactNativeWebView.postMessage(message);
    }
  };

  const vibrate = (type: VibrationType) => {
    const message: Message = { type: 'haptic', data: type };
    postMessage(JSON.stringify(message));
  };

  const navigate = (url: string) => {
    const message: Message = { type: 'navigate', data: url };
    postMessage(JSON.stringify(message));
  };

  return {
    postMessage,
    vibrate,
    navigate,
  };
}
