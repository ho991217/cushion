'use client';

import { useEffect, useRef, useState } from 'react';
import { io, type Socket } from 'socket.io-client';

export default function LiveView() {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const [isStartedVideo, setIsStartedVideo] = useState(false);
  const [room, setRoom] = useState('test_room');
  const [socket, setSocket] = useState<Socket | null>(null);
  const [peerConnection, setPeerConnection] =
    useState<RTCPeerConnection | null>(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3001');
    setSocket(newSocket);

    const pc = new RTCPeerConnection({
      iceServers: [
        {
          urls: 'stun:stun.l.google.com:19302',
        },
      ],
    });

    pc.onicecandidate = ({ candidate }) => {
      if (candidate) {
        newSocket.emit('candidate', {
          candidate,
          room,
        });
      }

      pc.ontrack = ({ streams }) => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = streams[0];
        }
      };

      newSocket.on('offer', async ({ sdp, sender }) => {
        if (sender === newSocket.id) return;

        await pc.setRemoteDescription(new RTCSessionDescription(sdp));

        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);
        newSocket.emit('answer', { sdp: pc.localDescription, room });
      });

      newSocket.on('answer', async ({ sdp, sender }) => {
        if (sender === newSocket.id) return;

        await pc.setRemoteDescription(new RTCSessionDescription(sdp));
      });

      newSocket.on('candidate', async ({ candidate, sender }) => {
        if (sender === newSocket.id) return;

        await pc.addIceCandidate(new RTCIceCandidate(candidate));
      });

      setPeerConnection(pc);
    };
  }, []);

  const startVideo = async () => {
    if (!localVideoRef.current) return;
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    localVideoRef.current.srcObject = stream;
    stream
      .getTracks()
      .forEach((track) => peerConnection?.addTrack(track, stream));
    setIsStartedVideo(true);
  };

  const joinRoom = () => {
    if (!socket) return;
    socket.emit('join', { room });
  };

  const call = async () => {
    const offer = await peerConnection?.createOffer();
    await peerConnection?.setLocalDescription(offer);
    socket?.emit('offer', { sdp: offer, room });
  };

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex justify-center gap-2'>
        <div className='flex flex-col items-center'>
          <div className='font-semibold'>내 화면</div>
          <video ref={localVideoRef} autoPlay playsInline muted></video>
        </div>
        <div className='flex flex-col items-center'>
          <div className='font-semibold'>상대 화면</div>
          <video ref={remoteVideoRef} autoPlay playsInline></video>
        </div>
      </div>
      <div className='text-center font-semibold'>Room Name: {room}</div>
      <div className='justify-center flex items-center gap-6'>
        {!isStartedVideo && (
          <button
            className='shadow-md px-3 py-2 rounded hover:bg-slate-50 active:shadow-none'
            onClick={() => {
              startVideo();
              joinRoom();
            }}
          >
            비디오 연결
          </button>
        )}
        <button
          className='shadow-md px-3 py-2 rounded hover:bg-slate-50 active:shadow-none'
          onClick={call}
        >
          통화 시작
        </button>
      </div>
    </div>
  );
}
