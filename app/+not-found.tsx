import { Link, Stack } from 'expo-router';
import React from 'react';
import { H1, Text, YStack } from 'tamagui';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <YStack 
        flex={1} 
        alignItems="center" 
        justifyContent="center" 
        padding={20}
      >
        <H1 color="$text">This screen doesn't exist.</H1>
        <Link href="/" asChild>
          <Text 
            color="$info" 
            marginTop={15} 
            paddingVertical={15}
            fontSize="$md"
          >
            Go to home screen!
          </Text>
        </Link>
      </YStack>
    </>
  );
}
