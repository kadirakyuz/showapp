import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
 
import Iconnn from 'react-native-vector-icons/MaterialIcons';

const TopBarDes = () => {
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.9, y: 3 }}
      colors={['#feda75', '#fa7e1e', '#d62976','#962fbf', '#4f5bd5']}
      style={styles.topBarGradient}
    >
      <Text style={styles.topBarText}>ShowApp</Text>
      
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
    fontSize: 20,
    fontFamily:'Pacifico-Regular',
    color: 'white',
    
  },
});

export default TopBarDes;