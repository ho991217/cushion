import { useEffect } from 'react';
import JSMpeg from '@cycjimmy/jsmpeg-player';
import axios from 'axios';

const StreamPlayer = () => {
  useEffect(() => {
    const url = 'ws://localhost:9999';
    const canvas = document.getElementById('video-canvas') as HTMLCanvasElement;
    new JSMpeg.Player(url, { canvas: canvas });
  }, []);

  const rtspurl = 'rtsp://ho991217:jy219512@192.168.0.102:554/stream2';

  const httpRequest = (url: string) => {
    try {
      axios.get(`http://localhost:3002/stream?rtsp=${url}`);
    } catch (error) {
      console.error(error);
    }
  };

  const startRTSPFeed = () => {
    httpRequest(rtspurl);
  };

  const stopRTSPFeed = () => {
    httpRequest('stop');
  };

  useEffect(() => {
    startRTSPFeed();
    return () => {
      stopRTSPFeed();
    };
  }, []);

  return <canvas id='video-canvas' className='object-cover w-full' />;
};

export default StreamPlayer;
