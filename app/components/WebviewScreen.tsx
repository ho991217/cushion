import { View, ActivityIndicator } from 'react-native';

import { WebView, WebViewProps } from 'react-native-webview';
import * as Haptics from 'expo-haptics';

interface WebViewScreenProps extends Omit<WebViewProps, 'source'> {
  path: string;
}

const WebViewMessageHandler = (event: any) => {
  const { type, data } = JSON.parse(event.nativeEvent.data);

  switch (type) {
    case 'haptic':
      Haptics.impactAsync(data as Haptics.ImpactFeedbackStyle);
      break;
  }
};

export default function WebViewScreen({ path, ...props }: WebViewScreenProps) {
  const baseUrl = 'http://localhost:5173';
  // const baseUrl = 'https://senior-cushion.vercel.app';

  return (
    <WebView
      onMessage={WebViewMessageHandler}
      source={{ uri: `${baseUrl}${path}` }}
      startInLoadingState
      scrollEnabled={false}
      renderLoading={() => (
        <View style={{ flex: 1, alignItems: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
      )}
      allowsBackForwardNavigationGestures
      {...props}
    />
  );
}
