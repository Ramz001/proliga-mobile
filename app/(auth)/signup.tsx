import React, { useState } from 'react';
import { ScrollView, ImageBackground } from 'react-native';
import { Text, YStack, Input, Button, H1, Card, Spinner, XStack } from 'tamagui';
import { useRouter } from 'expo-router';
import { Mail, Lock, User, ArrowRight } from '@tamagui/lucide-icons';

export default function SignupScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSignup() {
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
      source={require('@/assets/images/stadium-bg.jpg')}
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
            <H1 color="white">Join ProLiga Fantasy</H1>
            <Text color="#9ca3af">Create your account to start playing</Text>
          </YStack>
          
          {/* Signup Form */}
          <Card 
            bordered 
            elevation={4}
            padding={24} 
            gap={16}
            backgroundColor="rgba(255,255,255,0.95)"
          >
            <YStack gap={16}>
              <Text fontSize={20} color="#121212" fontWeight="bold">Create Account</Text>
              
              {/* Name Input */}
              <YStack>
                <Text color="#4b5563" fontSize={14} marginBottom={4}>Full Name</Text>
                <XStack 
                  borderWidth={1}
                  borderColor="#d1d5db"
                  borderRadius={8}
                  padding={12}
                  alignItems="center"
                >
                  <User size={20} color="#666" />
                  <Input
                    flex={1}
                    marginLeft={8}
                    borderWidth={0}
                    placeholder="Enter your full name"
                    value={name}
                    onChangeText={setName}
                  />
                </XStack>
              </YStack>

              {/* Email Input */}
              <YStack>
                <Text color="#4b5563" fontSize={14} marginBottom={4}>Email</Text>
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
                <Text color="#4b5563" fontSize={14} marginBottom={4}>Password</Text>
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
                    placeholder="Create a password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                  />
                </XStack>
              </YStack>

              {/* Terms */}
              <Text color="#4b5563" fontSize={12} textAlign="center">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </Text>

              {/* Signup Button */}
              <Button
                backgroundColor="#2563eb"
                color="white"
                height={45}
                onPress={handleSignup}
                disabled={loading}
                pressStyle={{ opacity: 0.8 }}
                icon={loading ? undefined : ArrowRight}
              >
                {loading ? (
                  <Spinner color="white" />
                ) : (
                  <Text color="white" fontWeight="bold">Create Account</Text>
                )}
              </Button>
            </YStack>
          </Card>

          {/* Login Link */}
          <Button
            variant="outlined"
            onPress={() => router.push('/login')}
            marginTop={16}
          >
            <Text color="white">
              Already have an account? <Text color="#3b82f6" fontWeight="bold">Sign In</Text>
            </Text>
          </Button>
        </YStack>
      </ScrollView>
    </ImageBackground>
  );
} 