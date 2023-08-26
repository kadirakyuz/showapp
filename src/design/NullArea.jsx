import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import TopBarDes from './TopBarDes';
import Theatre from '../pages/Theatre';
 

function NullArea() {
  return (
    <View style={styles.areaDesign}>
      <View style={{ flex: 0.11 }}>
        <TopBarDes />
      </View>
      
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