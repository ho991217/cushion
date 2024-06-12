import WebViewScreen from '@/components/WebviewScreen';
import { useLocalSearchParams } from 'expo-router';

export default function Cam() {
  const { id } = useLocalSearchParams();

  return <WebViewScreen path={`/gallery/${id}`} />;
}
