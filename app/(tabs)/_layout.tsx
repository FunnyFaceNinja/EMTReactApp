import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';

const Colors = {
  light: {
    tint: '#F26969',
    background: '#F2F7D9',
    text: 'black',
    tabBar: '#71D6C8',
  },
  dark: {
    tint: '#F26969',
    background: '#333',
    text: 'white',
    tabBar: '#71D6C8',
  },
};

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? 'light'];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: themeColors.tint,
        tabBarInactiveTintColor: themeColors.text,
        tabBarStyle: {
          backgroundColor: themeColors.tabBar,
          ...Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
            },
            default: {},
          }),
        },
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="MCQ"
        options={{
          title: 'MCQ',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="questionmark" color={color} />,
        }}
      />
      <Tabs.Screen
        name="diagram"
        options={{
          title: 'Diagram',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="questionmark" color={color} />,
        }}
      />
    </Tabs>
  );
}