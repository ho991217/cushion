export default function Header({
  title,
  more,
}: {
  title: string;
  more?: string;
}) {
  return (
    <header className='w-full flex items-end justify-between'>
      <h1 className='font-bold text-xl'>{title}</h1>
      <p className='text-sm text-primary'>{more}</p>
    </header>
  );
}
