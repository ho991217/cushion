'use client';

export default function LiveView() {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src='http://localhost:5500/video_feed' alt='Video Stream' />
    </div>
  );
}
