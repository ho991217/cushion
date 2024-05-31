type HeaderProps = {
  title: string;
  description: string;
  className?: string;
};

export default function Header({ title, description, className }: HeaderProps) {
  return (
    <header className={className}>
      <h1 className='text-2xl font-semibold text-white'>{title}</h1>
      <p className='text-sm text-muted-foreground'>{description}</p>
    </header>
  );
}
