import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import TopBarDes from './TopBarDes';
import Theatre from '../pages/Theatre';
 

function NullArea() {
  return (
    <View style={styles.areaDesign}>
       <TopBarDes/>
      
      <View style={styles.textAreaDesign}>
       
           
          <Theatre />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  areaDesign: {
   height:1000,
    backgroundColor: 'white',
  },
  textAreaDesign: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default NullArea;