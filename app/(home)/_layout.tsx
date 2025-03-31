import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { YStack } from 'tamagui';
import { Home, ArrowLeftRight, BarChart3 } from '@tamagui/lucide-icons';
import { colors } from '@/constants/colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <YStack>
              <Home size={24} color={color as any} />
            </YStack>
          ),
        }}
      />
      <Tabs.Screen
        name="transfers"
        options={{
          title: 'Transfers',
          tabBarIcon: ({ color }) => (
            <YStack>
              <ArrowLeftRight size={24} color={color as any} />
            </YStack>
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Stats',
          tabBarIcon: ({ color }) => (
            <YStack>
              <BarChart3 size={24} color={color as any} />
            </YStack>
          ),
        }}
      />
    </Tabs>
  );
}
