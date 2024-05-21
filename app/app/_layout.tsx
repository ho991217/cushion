import { Theme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { Button } from 'react-native';
import Header from '@/components/Header';

const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: '#4719FF',
    background: '#000',
    card: 'rgb(18, 18, 18)',
    text: 'rgb(229, 229, 231)',
    border: 'rgb(39, 39, 41)',
    notification: 'rgb(255, 69, 58)',
  },
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Pretendard: require('../assets/fonts/PretendardVariable.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DarkTheme}>
      <StatusBar style='light' />
      <Stack>
        <Stack.Screen
          name='(tabs)'
          options={{
            headerShown: true,
            header: () => <Header variant='root' />,
          }}
        />
        <Stack.Screen
          name='notification/index'
          options={{
            headerTitle: 'Stack',
            headerRight: () => <Button title='Sign Out' onPress={() => {}} />,
          }}
        />
        <Stack.Screen name='+not-found' />
      </Stack>
    </ThemeProvider>
  );
}
