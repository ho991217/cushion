import { PropsWithChildren } from 'react';

export default function BottomContainer({ children }: PropsWithChildren) {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 fixed bottom-10 left-0 px-5'>
      {children}
    </div>
  );
}
