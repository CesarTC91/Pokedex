import React from 'react';
import {View, Text} from 'react-native';

export default function Pokemon(props){
  const {route} = props;
  console.log(route);
  return(
    <View>
      <Text>Esta es la pagina de un Pokemon</Text>
    </View>
  )
}