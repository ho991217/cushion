import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isClient() {
  return typeof window !== 'undefined';
}

export function isServer() {
  return !isClient();
}

export function isApp() {
  return isClient() && typeof window.ReactNativeWebView !== 'undefined';
}

export function hardPush(url: string) {
  const postMessage = (message: string) => {
    if (isApp()) {
      window.ReactNativeWebView.postMessage(message);
    }
  };
  
  postMessage(JSON.stringify({ type: 'navigate', data: url }));
}
