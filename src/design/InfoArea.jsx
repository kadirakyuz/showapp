import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import TopBarDes from './TopBarDes';
import { useNavigation } from '@react-navigation/native';

function InfoArea() {
   
  

  return (
    <><View style={ styles.areaDesign }>

     <TopBarDes/>
      
       <View style={styles.textAreaDesign}><Text>İNFO</Text></View>
       </View>
    </>
  );
}

const styles = StyleSheet.create({
  areaDesign: {
    flex:1,
    backgroundColor:'white'
  },
  topBarDesign: {
    flex:0.1,
    backgroundColor:'white'
  },
  textAreaDesign:{
    flex:1,
    backgroundColor:'white'

  }
   
});

export default InfoArea;
{ /*<FlatList
data={data}
renderItem={({ item }) => (
  <View style={{ height: 90, marginTop: 10, marginBottom: 10, flex: 0.5 }}>
    <Text>Başlık: {item.title}</Text>
    <Text>Not: {item.note}</Text>
  </View>
)}
/>*/}