import { Image } from "react-native";
import React from "react";
import { Text, YStack, XStack, ScrollView, Button } from "tamagui";
import { useSelector } from "react-redux";

const Player = () => {
  const player = {
    id: 1,
    name: "Player 1",
    image: "/icons/player.svg",
  }
  return (
    <YStack alignItems="center" gap="$1">
      <XStack
        backgroundColor="$background"
        borderRadius="$4"
        padding="$2"
      >
        <Image
          source={{ uri: player?.image || "/icons/player.svg" }}
          style={{ width: 40, height: 40 }}
        />
       
      </XStack>
      <Text color="$text" fontSize="$xs" textAlign="center">
        {player?.name?.split(" ")[0]}
      </Text>
    </YStack>
  );
};

const TeamInfo = () => {
  const team = {
    id: 1,
    name: "Team 1",
    points: 100,
    total_points: 1000,
  }
  const tour = {
    points: 100,
  }
  const t = (e: string) => e

  return (
    <YStack
      backgroundColor="$background"
      borderRadius="$4"
      padding="$4"
      gap="$2"
    >
      <XStack justifyContent="space-between">
        <Text color="$text" fontSize="$md">{t("Team ID")}</Text>
        <Text color="$primary" fontSize="$md">{team?.id}</Text>
      </XStack>
      <XStack justifyContent="space-between">
        <Text color="$text" fontSize="$md">{t("Name")}</Text>
        <Text color="$primary" fontSize="$md">{team?.name}</Text>
      </XStack>
      <XStack justifyContent="space-between">
        <Text color="$text" fontSize="$md">{t("Tour Points")}</Text>
        <Text color="$primary" fontSize="$md">{tour?.points || 0}</Text>
      </XStack>
      <XStack justifyContent="space-between">
        <Text color="$text" fontSize="$md">{t("Total Points")}</Text>
        <Text color="$primary" fontSize="$md">{team?.total_points || 0}</Text>
      </XStack>
    </YStack>
  );
};

export default function TeamProfile() {
  const t = (e: string) => e



  const handleCaptainChange = async () => {
   
  };
  const teamPlayers: any[] = []
  return (
    <ScrollView>
      <YStack padding="$4" gap="$4">
        <TeamInfo />
        
        <YStack
          backgroundColor="$background"
          borderRadius="$4"
          padding="$4"
          height={400}
          position="relative"
        >
          <Image
            source={{ uri: "/icons/stadium.svg" }}
            style={{ width: "100%", height: "100%", position: "absolute" }}
          />
          
          <YStack
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            padding="$4"
            justifyContent="space-between"
          >
            {/* Goalkeeper */}
            <XStack justifyContent="center">
              {teamPlayers
                .filter((p) => p.position === "GOA")
                .map((player) => (
                  <Player
                    key={player.id}
                  />
                ))}
            </XStack>

            {/* Defenders */}
            <XStack justifyContent="space-around">
              {teamPlayers
                .filter((p) => p.position === "DEF")
                .map((player) => (
                  <Player
                    key={player.id}
                  
                  />
                ))}
            </XStack>

            {/* Midfielders */}
            <XStack justifyContent="space-around">
              {teamPlayers
                .filter((p) => p.position === "MID")
                .map((player) => (
                  <Player
                    key={player.id}
                  />
                ))}
            </XStack>

            {/* Strikers */}
            <XStack justifyContent="space-around">
              {teamPlayers
                .filter((p) => p.position === "STR")
                .map((player) => (
                  <Player
                    key={player.id}
                  />
                ))}
            </XStack>
          </YStack>
        </YStack>

        {/* {currentTour?.status === TOUR_STATUS.notStartedTransfer && (
          <Button
            backgroundColor="$primary"
            color="$white"
            height={45}
            onPress={() => {}}
          >
            {t("Save Changes")}
          </Button>
        )} */}
      </YStack>
    </ScrollView>
  );
} 