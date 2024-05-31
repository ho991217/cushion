import { Block, Header } from '@/components/setting';
import { Input } from '@/components/ui';
import { FaChevronRight } from 'react-icons/fa6';

export default function SeniorInfoPage() {
  return (
    <div className='w-full flex flex-col gap-4'>
      <Header
        className='mb-4'
        title='어르신 정보 설정'
        description='어르신 정보를 설정해주세요.'
      />
      <Input label='어르신 성함' value='안드레아스' />
      <div className='flex flex-row gap-2'>
        <Input label='어르신 연세' value='99' />
        <Input label='어르신 성별' value='남' />
      </div>
      <Input label='어르신 연락처' value='010-1234-5678' />
      <div className='flex flex-col gap-2'>
        <label className='block text-sm font-medium text-muted-foreground'>
          어르신 기저질환
        </label>
        <Block className='justify-between select-none'>
          <div>고혈압, 알츠하이머, 심근경색, 천식</div>
          <FaChevronRight />
        </Block>
      </div>
    </div>
  );
}
