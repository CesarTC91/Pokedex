import React from "react";
import {createStackNavigator} from "@react-navigation/stack"
import Pokedex from "../screens/Pokedex";
import Pokemon from "../screens/Pokemon";


const Stack = createStackNavigator();

export default function PokedexNavigation(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="pokedex"
        component={Pokedex}
        options={{title: "Pokedex"}}
      />
      <Stack.Screen 
      name="pokemon"
      component={Pokemon}
      options={{title: "Pokemon"}}
      />
    </Stack.Navigator>
  )
}