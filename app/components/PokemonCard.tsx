import React from "react";
import { Image, Text, View } from "react-native";

interface PokemonCardProps {
  name: string;
  url: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, url }) => {
  const partes = url.split("/");
  //const filtro = partes.filter(partes => partes !== "" && partes !== "https:" && partes !== "pokeapi.co" && partes !== "api" && partes !== "v2" && partes !== "pokemon");
  const filtro = partes.filter((partes) => partes !== "");
  const id = filtro.pop();
  const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <View>
      <Image source={{ uri: urlImage }} style={{ width: 100, height: 100 }} />
      <Text>{name}</Text>
    </View>
  );
};
export default PokemonCard;
