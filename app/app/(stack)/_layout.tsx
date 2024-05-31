import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name='notification/index' />
      <Stack.Screen name='setting/device' />
      <Stack.Screen name='setting/keyword' />
      <Stack.Screen name='setting/senior-info' />
    </Stack>
  );
}
