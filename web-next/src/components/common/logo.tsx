export default function Logo({
  className,
  width,
  height,
}: {
  className?: string;

  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width || 54}
      height={height || 21}
      viewBox='0 0 54 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M23.5506 0V20.1098H17.3571V13.3046L0.688167 14.528L0 9.32848L17.3571 8.56385V4.89363H1.03225V0H23.5506Z'
        fill='#4719FF'
      />
      <path
        d='M43.4444 4.93186C43.4444 9.59611 45.7383 14.1074 53.6522 15.6749L50.7466 20.5303C45.681 19.4025 42.3548 16.9748 40.4624 13.6869C38.5126 16.9748 35.2055 19.4025 30.1399 20.5303L27.196 15.6749C35.0717 14.1074 37.4039 9.59611 37.4039 4.93186V0H43.4444V4.93186Z'
        fill='#4719FF'
      />
    </svg>
  );
}
