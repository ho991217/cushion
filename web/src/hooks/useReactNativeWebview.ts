type VibrationType = 'light' | 'medium' | 'heavy' | 'soft' | 'rigid';

type UseReactNativeWebview = {
  isApp: boolean;
  vibrate: (type: VibrationType) => void;
  postMessage: (message: string) => void;
};

export default function useReactNativeWebview(): UseReactNativeWebview {
  const isApp = typeof window.ReactNativeWebView !== 'undefined';

  const postMessage = (message: string) => {
    if (isApp) {
      window.ReactNativeWebView.postMessage(message);
    }
  };

  const vibrate = (type: VibrationType) => {
    postMessage(JSON.stringify({ type: 'haptic', data: type }));
  };

  return {
    isApp,
    postMessage,
    vibrate,
  };
}
