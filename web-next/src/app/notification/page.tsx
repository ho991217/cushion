import type { Notification as NotificationType } from '@/components/common/notification-detector';
import { Block } from '@/components/notification';
import { createClient } from '@/lib';

export default async function Notification() {
  const supabase = await createClient();

  const { data } = await supabase
    .from('notifications')
    .select<'*', NotificationType>('*')
    .order('created_at', { ascending: false });

  return (
    <div className='w-full flex flex-col'>
      <div className='w-full items-center justify-end mb-4'>
        <span className='text-primary'>모두 읽기</span>
      </div>
      <div className='w-full flex flex-col gap-4'>
        {data != null
          ? data.map((item) => (
              <Block
                key={item.id}
                id={item.id}
                type={item.type}
                message={item.message}
                isRead={item.isRead}
                time={item.created_at}
              />
            ))
          : '데이터가 없습니다.'}
      </div>
    </div>
  );
}
