'use client';

import { Button, Input } from '@/components/ui';
import { login } from './actions';
import { BottomContainer, Logo } from '@/components/common';
import { hardPush } from '@/lib';

export default function OnboardingLoginPage() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    try {
      await login(formData);
      hardPush('/onboarding/done');
    } catch {
      alert('로그인에 실패했습니다.');
    }
  };
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <header className='text-4xl font-bold flex flex-col items-center justify-center gap-[14px] mb-[40px]'>
        <Logo width={78.27} height={30} />
        <h4 className='text-lg'>세상을 안전하게, 쿠션</h4>
      </header>
      <form className='w-full flex flex-col gap-4 mb-20' onSubmit={onSubmit}>
        <Input
          type='email'
          name='email'
          placeholder='이메일'
          className='w-full px-5 h-[50px]'
        />
        <Input
          type='password'
          name='password'
          placeholder='비밀번호'
          className='w-full px-5 h-[50px]'
        />
        <BottomContainer>
          <Button
            type='submit'
            className='w-full bg-primary text-white'
            size='full'
          >
            로그인
          </Button>
        </BottomContainer>
      </form>
    </div>
  );
}
