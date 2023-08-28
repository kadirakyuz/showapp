import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
 
import Iconnn from 'react-native-vector-icons/MaterialIcons';

const TopBarDes = () => {
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.9, y: 3 }}
      colors={['#FFD521', '#F50000', '#B900B4']}
      style={styles.topBarGradient}
    >
      <Text style={styles.topBarText}>Show Time!  <Iconnn name="slideshow" size={30} /> </Text>
      
    </LinearGradient>
  );
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
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
  },
});

export default TopBarDes;