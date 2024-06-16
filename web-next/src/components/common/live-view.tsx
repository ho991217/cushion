'use client';

export default function LiveView({ camId }: { camId: string }) {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`http://localhost:5500/video_feed/${camId}`}
        alt='Video Stream'
        className='rounded-xl w-[1920] h-[1080] object-cover'
        width={1920}
        height={1080}
      />
    </div>
  );
}
