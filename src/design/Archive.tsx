import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import TopBarDes from './TopBarDes';
 
 
const Archive = () => {
  return (
    <><View style={ styles.areaDesign }>

    <View style={ styles.topBarDesign }>
      <TopBarDes />
      
    </View>
      
       <View style={styles.textAreaDesign}><Text>ARCHİVE</Text></View>
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

export default Archive;
