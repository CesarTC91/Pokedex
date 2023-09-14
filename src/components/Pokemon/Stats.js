import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import { map, capitalize } from 'lodash'

export default function Stats(props) {
  const { stats } = props;
  const barStyles = (num) => {
    const color = num > 49 ? "#00ac17" : "#ff3e3e"
    return{
      backgroundColor: color,
      width: `${num}%`
    }
  }

  return (
    <View style={styles.contentStats}>
      <Text style={styles.title}>Estadisticas Basicas</Text>
      {map(stats, (item, index) =>{
        return(
          <View key={index} style={styles.block}>
            <View style={styles.blockTitle}>
              <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
            </View>
            <View style={styles.blockInfo}>
              <Text style={styles.number}>{item.base_stat}</Text>
              <View style={styles.bgBar}>
                <View style={[styles.bar, barStyles(item.base_stat)]} />
              </View>
            </View>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  contentStats: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 5,
  },
  block: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  blockTitle:{
    width: '30%',
  },
  statName:{
    fontSize: 15,
    color: '#6b6b6b'
  },
  blockInfo:{
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  number:{
    width: '12%',
    fontSize: 15,
  },
  bgBar:{
    backgroundColor: '#dedede',
    width: '88%',
    height: 5,
    borderRadius: 20,
    overflow: 'hidden',
  },
  bar:{
    height: 5,
    borderRadius: 20,
  }
})