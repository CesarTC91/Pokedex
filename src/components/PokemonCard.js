import React from "react";
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from "react-native";

export default function PokemonCard(props) {
  const { pokemon } = props;

  const goToPokemon = () => {
    console.log(`Vamos al Pokemon: ${pokemon.name}`)
  }

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={styles.bgStyle}>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Image 
              source={{uri: pokemon.image}}
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
    padding: 55
  },
  bgStyle: {
    backgroundColor: "gray"
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  image:{
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
})