import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { cn } from '@/lib/utils';

const Pretendard = localFont({
  src: '../../public/font/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '쿠션',
  description: '시니어 낙상 감지 시스템 - 쿠션',
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko-KR'>
      <body
        className={cn(
          Pretendard.className,
          'w-screen h-screen flex flex-col items-center justify-start bg-black text-white p-5 overflow-y-scroll overflow-x-hidden'
        )}
      >
        {children}
      </body>
    </html>
  );
}
