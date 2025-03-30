import React, { useState } from "react";
import { ScrollView, ImageBackground } from "react-native";
import {
  Text,
  YStack,
  Input,
  Button,
  H1,
  Card,
  Spinner,
  XStack,
} from "tamagui";
import { useRouter } from "expo-router";
import { Mail, Lock, User, ArrowRight } from "lucide-react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin() {
    try {
      setLoading(true);
      // TODO: Implement Supabase auth
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ImageBackground
      source={require("@/assets/images/stadium-bg.jpg")}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <YStack
          padding={24}
          gap={24}
          flex={1}
          justifyContent="center"
          backgroundColor="rgba(0,0,0,0.7)"
        >
          {/* Header */}
          <YStack gap={8} alignItems="center">
            <H1 color="white">Proliga Fantasy</H1>
            <Text color="#9ca3af">
              Your Fantasy Football Journey Begins Here
            </Text>
          </YStack>

          {/* Login Form */}
          <Card
            bordered
            elevation={4}
            padding={24}
            gap={16}
            backgroundColor="rgba(255,255,255,0.95)"
          >
            <YStack gap={16}>
              <Text fontSize={20} fontWeight="bold" color="#121212">
                Welcome Back
              </Text>

              {/* Email Input */}
              <YStack>
                <Text color="#4b5563" fontSize={14} marginBottom={4}>
                  Email
                </Text>
                <XStack
                  borderWidth={1}
                  borderColor="#d1d5db"
                  borderRadius={8}
                  padding={12}
                  alignItems="center"
                >
                  <Mail size={20} color="#666" />
                  <Input
                    flex={1}
                    marginLeft={8}
                    borderWidth={0}
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                  />
                </XStack>
              </YStack>

              {/* Password Input */}
              <YStack>
                <Text color="#4b5563" fontSize={14} marginBottom={4}>
                  Password
                </Text>
                <XStack
                  borderWidth={1}
                  borderColor="#d1d5db"
                  borderRadius={8}
                  padding={12}
                  alignItems="center"
                >
                  <Lock size={20} color="#666" />
                  <Input
                    flex={1}
                    marginLeft={8}
                    borderWidth={0}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                  />
                </XStack>
              </YStack>

              {/* Forgot Password */}
              <Button variant="outlined" alignSelf="flex-end">
                <Text color="#2563eb">Forgot Password?</Text>
              </Button>

              {/* Login Button */}
              <Button
                backgroundColor="#2563eb"
                color="white"
                height={45}
                onPress={handleLogin}
                disabled={loading}
                pressStyle={{ opacity: 0.8 }}
                icon={ArrowRight}
              >
                {loading ? (
                  <Spinner color="white" />
                ) : (
                  <Text color="white" fontWeight="bold">
                    Sign In
                  </Text>
                )}
              </Button>
            </YStack>
          </Card>

          {/* Sign Up Link */}
          <Button
            variant="outlined"
            onPress={() => router.push("/signup")}
            marginTop={16}
          >
            <Text color="white">
              Don't have an account?{" "}
              <Text color="#3b82f6" fontWeight="bold">
                Sign Up
              </Text>
            </Text>
          </Button>
        </YStack>
      </ScrollView>
    </ImageBackground>
  );
}
