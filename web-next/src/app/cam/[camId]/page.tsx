'use client';

import { PropsWithChildren } from 'react';
import { Button } from '@/components/ui';
import { Link, LiveView } from '@components/common';
import {
  IoMicSharp,
  IoVideocamOff,
  IoVolumeHigh,
  IoFileTrayStacked,
} from 'react-icons/io5';
import { FaPhoneFlip } from 'react-icons/fa6';
import { cn } from '@/lib';

export default function LiveViewPage({
  params: { camId },
}: {
  params: { camId: string };
}) {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <LiveView camId={camId} />
      <Block>
        <span className='text-xs ml-2'>거실 카메라</span>
        <div className='w-full flex items-center gap-2'>
          <button className='w-full flex items-center justify-center h-[50px] bg-neutral-800 rounded-xl'>
            <IoMicSharp />
          </button>
          <button className='w-full flex items-center justify-center h-[50px] bg-neutral-800 rounded-xl'>
            <IoVideocamOff />
          </button>
          <button className='w-full flex items-center justify-center h-[50px] bg-neutral-800 rounded-xl'>
            <IoVolumeHigh />
          </button>
        </div>
        <Button size='full' variant='destructive'>
          <FaPhoneFlip className='mr-2' />
          응급 전화
        </Button>
      </Block>
      <Block>
        <Link
          to='gallery'
          hardLink
          className='flex items-center gap-2 text-white'
        >
          <IoFileTrayStacked />
          재생 및 다운로드
        </Link>
      </Block>
    </div>
  );
}

const Block = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <div
    className={cn(
      'bg-neutral-900 rounded-xl p-4 flex flex-col gap-2',
      className
    )}
  >
    {children}
  </div>
);
