type UseReactNativeWebview = {
  isApp: boolean;
  postMessage: (message: string) => void;
};

export default function useReactNativeWebview(): UseReactNativeWebview {
  const isApp = typeof window.ReactNativeWebView !== 'undefined';

  const postMessage = (message: string) => {
    if (isApp) {
      window.ReactNativeWebView.postMessage(message);
    }
  };

  return {
    isApp,
    postMessage,
  };
}
