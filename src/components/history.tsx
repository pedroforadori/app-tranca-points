import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, Pressable } from 'react-native';


export default function History({points}: any) {

  function handleReset(){
    points = []
  }
  return (
   <View>
      <FlatList 
        style={styles.item}
        data={points}
        renderItem={({item}) => <Text style={styles.textItem}>{item.points === 0 ? '' : item.points}</Text> }
       />
       <Pressable onPress={handleReset}>
        <Text style={styles.textZerar}>Zerar</Text>
       </Pressable>
   </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 8,
    height: '60%',
    marginTop: 10
  },
  textItem: {
    color: '#fff',
    fontSize: 20,

  },
  textZerar: {
    color: '#fff'
  }
})