import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

export default function HomeScreen() {
  return (
    <WebView
      onMessage={(event) => {
        console.log(event.nativeEvent.data);
      }}
      source={{ uri: 'http://localhost:5173' }}
      style={{ marginTop: Constants.statusBarHeight }}
    />
  );
}
