import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Button, ScrollView, View } from "react-native";
import PokemonCard from "./components/PokemonCard";

export default function Index() {
  // useState: Crea la lista "results" y
  // "setResults" para meterle datos y actualizar la pantalla.
  const [results, setResults] = useState<any[]>([]);

  // useEffect: Arranca la busqueda automaticamente solo una vez al abrir la app.
  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

    // fetch: Va a internet a traer los datos de los Pokémon.
    const response = await fetch(url, {
      method: "GET",
    });
    console.log(response);

    // await pausa el codigo hasta que .json() traduce los datos a formato usable.
    const data = await response.json();

    // Imprime la lista en terminal para checar que todo llego bien.
    console.log(data.results);

    // setResults: Mete los datos a la lista y recarga la pantalla para mostrarlos.
    setResults(data.results);
  };

  return (
    <ScrollView>
      <View>
        <Button
          title="Static page"
          onPress={() => router.push("/new_screen")}
        />
        <Button
          title="Dynamic page"
          onPress={() => router.push("/pokemon/pikachu")}
        />
        {/* .map: Lee la lista y dibuja una tarjeta por cada Pokémon. */}
        {results.map((item) => {
          return (
            <PokemonCard key={item.name} name={item.name} url={item.url} />
          );
        })}
      </View>
    </ScrollView>
  );
}
