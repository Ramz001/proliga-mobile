import { Image, Platform } from "react-native";
import React from "react";
import { Text, YStack, Button, H1, XStack, ScrollView } from "tamagui";
import * as Device from "expo-device";

export default function HomeScreen() {
  return (
    <ScrollView>
      <YStack padding="$4" gap="$4">
        <XStack>
          <Text color="$text" fontSize="$xl" fontWeight="bold">
            {Device.manufacturer}: {Device.modelName}
          </Text>
        </XStack>
        
        <YStack gap="$2" marginBottom="$2">
          <H1 color="$text" fontSize="$2xl">
            Step 1: Try it
          </H1>
          <Text color="$text" fontSize="$md">
            Edit <Text fontWeight="600">app/(tabs)/index.tsx</Text> to see
            changes. Press{" "}
            <Text fontWeight="600">
              {Platform.select({
                ios: "cmd + d",
                android: "cmd + m",
                web: "F12",
              })}
            </Text>{" "}
            to open developer tools.
          </Text>
        </YStack>

        <YStack gap="$2" marginBottom="$2">
          <H1 color="$text" fontSize="$2xl">
            Step 2: Explore
          </H1>
          <Text color="$text" fontSize="$md">
            Tap the Explore tab to learn more about what's included in this
            starter app.
          </Text>
        </YStack>

        <YStack gap="$2" marginBottom="$2">
          <H1 color="$text" fontSize="$2xl">
            Step 3: Get a fresh start
          </H1>
          <Text color="$text" fontSize="$md">
            When you're ready, run{" "}
            <Text fontWeight="600">npm run reset-project</Text> to get a fresh{" "}
            <Text fontWeight="600">app</Text> directory. This will move the
            current <Text fontWeight="600">app</Text> to{" "}
            <Text fontWeight="600">app-example</Text>.
          </Text>
        </YStack>

        <Button
          backgroundColor="$tint"
          color="$white"
          height={45}
          marginTop="$4"
          onPress={() => {}}
        >
          Get Started
        </Button>
      </YStack>
    </ScrollView>
  );
}
