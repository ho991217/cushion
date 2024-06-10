import { Link } from '@/components/common';

const Chevron = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M9 5l7 7-7 7'
    />
  </svg>
);

export default function SettingRootPage() {
  return (
    <main className='flex flex-col w-full h-full items-center justify-between font-medium text-sm'>
      <div className='gap-4 w-full flex flex-col'>
        <Link
          hardLink
          to='/setting/senior-info'
          className='w-full bg-neutral-900 text-white h-14 rounded-xl flex items-center justify-between p-5'
        >
          <span>어르신 정보</span>
          <Chevron />
        </Link>
        <Link
          hardLink
          to='/setting/keyword'
          className='w-full bg-neutral-900 text-white h-14 rounded-xl flex items-center justify-between p-5'
        >
          <span>키워드 설정</span>
          <Chevron />
        </Link>
        <Link
          hardLink
          to='/setting/device'
          className='w-full bg-neutral-900 text-white h-14 rounded-xl flex items-center justify-between p-5'
        >
          <span>시니어캠 기기 설정</span>
          <Chevron />
        </Link>
      </div>
      <div className='gap-4 w-full'>
        <Link
          hardLink
          to='/onboarding/login'
          className='w-full bg-red-700 text-white h-12 rounded-xl flex items-center justify-center'
        >
          <span>로그아웃</span>
        </Link>
        <Link
          hardLink
          to='/'
          className='w-full bg-transparent text-neutral-500 underline underline-offset-4 h-12 rounded-xl flex items-center justify-center font-normal'
        >
          <span>탈퇴하기</span>
        </Link>
      </div>
    </main>
  );
}
