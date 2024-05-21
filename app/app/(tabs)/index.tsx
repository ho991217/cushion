import WebViewScreen from '@/components/WebviewScreen';

export default function HomeScreen() {
  return (
    <WebViewScreen
      onMessage={(event) => {
        console.log(event.nativeEvent.data);
      }}
      path='/'
    />
  );
}
