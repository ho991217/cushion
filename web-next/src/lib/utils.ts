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
