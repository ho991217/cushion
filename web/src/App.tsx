import { Button } from '@/components/ui/button';
import { useReactNativeWebview } from './hooks';

function App() {
  const { postMessage } = useReactNativeWebview();
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <Button
        onClick={() => {
          postMessage('Hello from web!');
        }}
      >
        헬로
      </Button>
    </div>
  );
}

export default App;
