import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import * as Haptics from 'expo-haptics';

export default function TabLayout() {
  const tabPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors['dark'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='gallery'
        listeners={{ tabPress }}
        options={{
          title: '갤러리',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              size={24}
              name={focused ? 'film' : 'film-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='index'
        listeners={{ tabPress }}
        options={{
          title: '홈',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              size={24}
              name={focused ? 'home' : 'home-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='setting'
        listeners={{ tabPress }}
        options={{
          title: '설정',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              size={24}
              name={focused ? 'cog' : 'cog-outline'}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
