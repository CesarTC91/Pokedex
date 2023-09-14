import React from "react";
import {View, StyleSheet, Text} from 'react-native'
import {map, capitalize} from 'lodash'
import {Card} from 'react-native-paper'

export default function Moves(props){
  const {moves} = props;

  return(
    <View style={styles.contentMoves}>
      <Text style={styles.titleMoves}>Movimientos</Text>
      {map(moves, (item, index) =>{
        return(
          <Card key={index} style={styles.card}>
          <Card.Content>
          <Text style={styles.nameMove}>{capitalize(item.move.name)}</Text>
          </Card.Content>
        </Card>
        )  
      })}
    </View>
  )

}

const styles = StyleSheet.create({
  contentMoves:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16
  },
  titleMoves:{
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 5,
  },
  card:{
    width: '48%',
    marginBottom:16
  },
  nameMove:{
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 5,
  }
})
