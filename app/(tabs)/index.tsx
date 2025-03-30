import { Image, Platform } from 'react-native';
import React from 'react';
import { Text, YStack } from 'tamagui';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          className="h-[178px] w-[290px] absolute bottom-0 left-0"
        />
      }>
      <ThemedView className="gap-1 flex justify-start items-center flex-row ">
        <Text color={'red'} fontSize={36} fontWeight={'bold'}>Welcome!</Text>
        <HelloWave />
      </ThemedView>
      <YStack gap={8} marginBottom={8}>
        <Text fontSize={24} fontWeight="bold">Step 1: Try it</Text>
        <Text>
          Edit <Text fontWeight="600">app/(tabs)/index.tsx</Text> to see changes.
          Press{' '}
          <Text fontWeight="600">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </Text>{' '}
          to open developer tools.
        </Text>
      </YStack>
      <YStack gap={8} marginBottom={8}>
        <Text fontSize={24} fontWeight="bold">Step 2: Explore</Text>
        <Text>
          Tap the Explore tab to learn more about what's included in this starter app.
        </Text>
      </YStack>
      <YStack gap={8} marginBottom={8}>
        <Text fontSize={24} fontWeight="bold">Step 3: Get a fresh start</Text>
        <Text>
          When you're ready, run{' '}
          <Text fontWeight="600">npm run reset-project</Text> to get a fresh{' '}
          <Text fontWeight="600">app</Text> directory. This will move the current{' '}
          <Text fontWeight="600">app</Text> to{' '}
          <Text fontWeight="600">app-example</Text>.
        </Text>
      </YStack>
    </ParallaxScrollView>
  );
}
