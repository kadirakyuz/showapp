import React from 'react';
import {   Text, StyleSheet, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 
 
const TopBarDes = () => {
  return (<>
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.9, y: 3 }}
      colors={[ '#f71f6c','#5f3194', '#2521b6']}
      style={styles.topBarGradient}
    >
      <Text style={styles.topBarText}>ShowApp</Text>
      
       
      
       
    </LinearGradient>
    </>);
};

const styles = StyleSheet.create({
  topBarGradient: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: '100%',
    paddingHorizontal: 16,
   },
  topBarText: {
    flex: 1, 
    textAlign: 'center',  
    fontSize: 20,
    fontFamily:'Pacifico-Regular',
    color: 'white',
    borderWidth:0,
    
  },
});

export default TopBarDes;