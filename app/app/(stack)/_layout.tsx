import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name='notification/index'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='cam/[id]'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='setting/senior-info'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='setting/device'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='setting/keyword'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='gallery/[id]'
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
