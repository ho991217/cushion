'use client';

// pages/index.tsx
import React from 'react';

const VideoStream = () => {
  return (
    <div>
      <h1>Live Video Stream</h1>
      <img src='http://localhost:5500/video_feed' alt='Video Stream' />
    </div>
  );
};

export default VideoStream;
