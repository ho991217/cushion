'use client';

import { useReactNativeWebview } from '@/hooks';
import { supabase } from '@/lib';

export default function ReadButton({
  id,
  link,
}: {
  id: number;
  link?: string;
}) {
  const { navigate } = useReactNativeWebview();
  const onClick = async () => {
    await supabase.from('notifications').update({ isRead: true }).eq('id', id);
    if (link) {
      navigate(link);
    }
  };
  return (
    <button className='text-sm text-primary' onClick={onClick}>
      확인하기
    </button>
  );
}
