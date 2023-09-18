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
          <Text style={styles.learnMove}>{capitalize(item.version_group_details[0].move_learn_method.name)}</Text>
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
    marginBottom:16,
    backgroundColor: '#45dee6'
  },
  nameMove:{
    fontWeight: 'bold',
    fontSize: 31,
    paddingBottom: 5,
    color: 'white'
  },
  learnMove:{
    fontWeight: 'bold',
    fontSize: 17,
    paddingBottom: 5,
    color: 'white'
  }
})
