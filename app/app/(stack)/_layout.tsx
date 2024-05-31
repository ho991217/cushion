import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name='notification/index' />
      <Stack.Screen
        name='setting/senior-info'
        options={{
          title: '어르신 정보',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='setting/device'
        options={{
          title: '기기 설정',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='setting/keyword'
        options={{
          title: '키워드 설정',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
