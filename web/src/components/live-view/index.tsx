import { useEffect, useRef, useState } from 'react';
import socket from '@/lib/socket';

export default function LiveView() {
  const [received, setReceived] = useState<string>('');
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        videoRef.current!.srcObject = stream;
      });
  }, []);

  useEffect(() => {
    socket.connect();
    socket.on('connect', () => {
      console.log('Connected');
    });

    socket.on('receive_message', (data) => {
      console.log(data);
      setReceived(data);
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      {/* <video ref={videoRef} autoPlay playsInline></video> */}
      {received}
    </div>
  );
}
