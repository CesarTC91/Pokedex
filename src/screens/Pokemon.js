import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { getPokemonsDetailsApi, getMovesByPokemonApi } from '../api/pokeApi'
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type'
import Stats from '../components/Pokemon/Stats'


export default function Pokemon(props) {
  const { goPokemon, route: { params } } = props;

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonsDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        goPokemon.goBack();
      }
    })()
  }, [params])

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header name={pokemon.name} 
      order={pokemon.order} 
      image={pokemon.sprites.other["official-artwork"].front_default} 
      type={pokemon.types[0].type.name} />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  )
}