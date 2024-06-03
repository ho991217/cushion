import { View, ActivityIndicator } from 'react-native';

import { WebView, WebViewProps } from 'react-native-webview';
import * as Haptics from 'expo-haptics';
import { webUrl } from '@/constants/urls';
import { useRouter } from 'expo-router';

interface WebViewScreenProps extends Omit<WebViewProps, 'source'> {
  path: string;
  scrollEnabled?: boolean;
}

export default function WebViewScreen({
  path,
  scrollEnabled = false,
  ...props
}: WebViewScreenProps) {
  const router = useRouter();

  const webViewMessageHandler = (event: any) => {
    const { type, data } = JSON.parse(event.nativeEvent.data);

    switch (type) {
      case 'haptic':
        Haptics.impactAsync(data as Haptics.ImpactFeedbackStyle);
        break;
      case 'navigate':
        router.push(data);
        break;
    }
  };

  return (
    <WebView
      onMessage={webViewMessageHandler}
      source={{ uri: `${webUrl}${path}` }}
      startInLoadingState
      renderLoading={() => (
        <View style={{ flex: 1, alignItems: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
      )}
      scrollEnabled={scrollEnabled}
      allowsBackForwardNavigationGestures
      allowsInlineMediaPlayback
      style={{ backgroundColor: 'transparent' }}
      {...props}
    />
  );
}
