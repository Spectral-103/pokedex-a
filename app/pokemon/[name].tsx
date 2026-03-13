import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function PokemonDynamicPage() {
  const param = useLocalSearchParams();
  return (
    <View>
      <Text>PokemonDynamicPage</Text>
      <Text>{param.name}</Text>
    </View>
  );
}
