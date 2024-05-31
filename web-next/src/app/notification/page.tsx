import { Block } from '@/components/notification';

export default function Notification() {
  return (
    <div className='w-full flex flex-col'>
      <div className='w-full items-center justify-end mb-4'>
        <span className='text-primary'>모두 읽기</span>
      </div>
      <div className='w-full flex flex-col gap-4'>
        <Block
          type='fall'
          message='거실에서 낙상이 감지되었어요! 즉시 확인하고 조치해주세요.'
        />
        <Block type='info' message='어르신의 호출이 있습니다.' />
        <Block type='ad' message='(광고) 멍멍이 사료는 풀무원!' isRead />
        <Block type='fall' message='주방에서 낙상이 감지되었어요! 즉시 확인하고 조치해주세요.' isRead />
      </div>
    </div>
  );
}
