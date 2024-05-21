import { View, ActivityIndicator } from 'react-native';

import { WebView, WebViewProps } from 'react-native-webview';

interface WebViewScreenProps extends Omit<WebViewProps, 'source'> {
  path: string;
}

export default function WebViewScreen({ path, ...props }: WebViewScreenProps) {
  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5173'
      : 'https://senior-cushion.vercel.app';

  return (
    <WebView
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
