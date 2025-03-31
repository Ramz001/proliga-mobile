import React, { useState, useRef } from 'react';
import { ScrollView, ImageBackground, Dimensions } from 'react-native';
import { Text, YStack, Button, H1, XStack, Card } from 'tamagui';
import { useRouter } from 'expo-router';
import { ArrowRight } from '@tamagui/lucide-icons';

const { width } = Dimensions.get('window');

const slides = [
  {
    title: 'Compete & Win',
    description: 'Join fantasy leagues and compete with friends to win exciting prizes',
    image: require('@/assets/images/promotions/points.png')
  },
  {
    title: 'Build Your Team',
    description: 'Select your dream team from real players and manage them throughout the season',
    image: require('@/assets/images/promotions/team.png')
  },
  {
    title: 'Track Performance',
    description: 'Monitor your team\'s performance with detailed statistics and rankings',
    image: require('@/assets/images/promotions/table.png')
  }
];

export default function Welcome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const router = useRouter();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      console.log('click',currentSlide)
      scrollViewRef.current?.scrollTo({
        x: (currentSlide + 1) * width,
        animated: true
      });
      setCurrentSlide(currentSlide + 1);
    } else {
      router.replace('/(auth)/login');
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    scrollViewRef.current?.scrollTo({
      x: index * width,
      animated: true
    });
  }

  return (
    <ImageBackground 
      source={require('@/assets/images/stadium-bg.jpg')}
      style={{ flex: 1 }}
    >
      <YStack 
        flex={1} 
        backgroundColor="rgba(0,0,0,0.5)"
      >
        {/* Skip Button */}
        <Button
          variant="outlined"
          alignSelf="flex-end"
          margin={24}
          onPress={() => router.push('/login')}
        >
          <Text color="white">Skip</Text>
        </Button>

        {/* Slides */}
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          snapToInterval={width}
          snapToAlignment="start"
          onMomentumScrollEnd={(e) => {
            const slideIndex = Math.round(e.nativeEvent.contentOffset.x / width);
            setCurrentSlide(slideIndex);
          }}
        >
          {slides.map((slide, index) => (
            <Card
              key={index}
              width={width}
              backgroundColor="transparent"
              borderWidth={0}
            >
              <YStack
                flex={1}
                alignItems="center"
                justifyContent="center"
                gap={16}
                padding={24}
              >
                <YStack
                  width={width - 48}
                  height={width - 48}
                  overflow="hidden"
                  backgroundPosition="center"
                  backgroundSize="contain"
                  padding={8}
                  borderRadius={slide.title === "Track Performance" ? 8: 0}
                  backgroundColor={slide.title === "Track Performance" ? "rgba(0,0,0,0.5)" : "transparent"}
                >
                  <ImageBackground
                    source={slide.image}
                    style={{ width: '100%', height: '100%' }}
                  />
                </YStack>
                <H1 color="white" textAlign="center" fontSize={28}>{slide.title}</H1>
                <Text color="#9ca3af" textAlign="center" fontSize={16}>
                  {slide.description}
                </Text>
              </YStack>
            </Card>
          ))}
        </ScrollView>

        {/* Dots */}
        <XStack gap={8} justifyContent="center" marginTop={24}>
          {slides.map((_, index) => (
            <YStack
              key={index}
              width={8}
              height={8}
              borderRadius={4}
              onPress={() => handleDotClick(index)}
              backgroundColor={currentSlide === index ? '#3b82f6' : '#4b5563'}
            />
          ))}
        </XStack>

        {/* Next/Get Started Button */}
        <Button
          backgroundColor="#2563eb"
          color="white"
          height={45}
          margin={24}
          onPress={handleNext}
          icon={ArrowRight}
        >
          <Text color="white" fontWeight="bold">
            {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </Button>
      </YStack>
    </ImageBackground>
  );
} 