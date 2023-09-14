import React from "react";
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { capitalize } from "lodash";
import { useNavigation } from "@react-navigation/native";
import getColorByPokemonType from "../utils/getColorByPokemonType";

export default function PokemonCard(props) {
  const { pokemon } = props;
  const goPokemon = useNavigation();
  
  const pokemonColor = getColorByPokemonType(pokemon.type)
  const bgStyles = {backgroundColor: pokemonColor, ...styles.bgStyles}

  const goToPokemon = () => {
    goPokemon.navigate("Pokemon", {id: pokemon.id})
  }

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Text style={styles.type}>{capitalize(pokemon.type)}</Text>
            <Image
              source={{ uri: pokemon.image }}
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 140,
    width: 60
  },
  spacing: {
    flex: 1,
    padding: 5
  },
  bgStyles:{
    flex: 1,
    borderRadius: 15,
    padding: 10
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "white",
    fontSize: 11
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  type:{
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
})