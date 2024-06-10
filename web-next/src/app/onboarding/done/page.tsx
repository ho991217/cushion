import { BottomContainer, Link, Logo } from '@/components/common';
import { Button } from '@/components/ui';

export default function OnboardingDonePage() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <header className='text-4xl font-bold flex flex-col items-center justify-center gap-[14px] mb-[40px]'>
        <Logo width={78.27} height={30} />
        <span className='text-base font-medium'>
          쿠션과 함께 안전한 일상을 시작해보세요!
        </span>
      </header>
      <BottomContainer>
        <Link to='/' hardLink className='w-full'>
          <Button size='full' className='w-full bg-primary text-white'>
            시작하기
          </Button>
        </Link>
      </BottomContainer>
    </div>
  );
}
