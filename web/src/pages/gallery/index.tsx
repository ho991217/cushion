import { Button } from '@/components/ui/button';
import { useReactNativeWebview } from '@/hooks';

export default function GalleryPage() {
  const { vibrate } = useReactNativeWebview();
  return <Button onClick={() => vibrate('rigid')}>테스트용 버튼</Button>;
}
