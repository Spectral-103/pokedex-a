import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

interface PokemonCardProps {
  name: string;
  url: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, url }) => {
  const partes = url.split("/");
  // el !== "" significa que sea diferente a x
  const filtro = partes.filter((partes) => partes !== "");
  const id = filtro.pop();
  const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <View>
      <Pressable onPress={() => router.push(`/pokemon/${name}`)}>
        <Image source={{ uri: urlImage }} style={{ width: 100, height: 100 }} />
        <Text>{name}</Text>
      </Pressable>
    </View>
  );
};
export default PokemonCard;
