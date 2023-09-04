import React from 'react';
import {Text, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StyleDesign from '../layout/StyleDesign';
  

 
const TopBarDes = () => {
  return (<>
  <View style={{height:45}}>
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.9, y: 3 }}
      colors={[ '#f71f6c','#5f3194', '#2521b6']}
      style={StyleDesign.topBarGradient}
    >
      <Text style={StyleDesign.topBarText}>ShowApp</Text>
    </LinearGradient></View>
    </>);
};

 

export default TopBarDes;