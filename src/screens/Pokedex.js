import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokeApi";
import PokemonList from "../components/PokemonList";



export default function Pokedex() {
  const [pokemons, setPokemons] = useState([])
  console.log('Pokemons ----->', pokemons);
  // Load pokemons from API
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })()
  }, [])

  const loadPokemons = async () => {
    try {
      const res = await getPokemonsApi();
      const pokemonArray = []
      for await (const pokemon of res.results){
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url)
       
        pokemonArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default
        })
      }

      setPokemons([...pokemons, ...pokemonArray])
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} />
    </SafeAreaView>
  )
}