import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';


 

const TopBarDes = () => {
  return (
    <>
      
      <View style={styles.topBarDesign}>
        <LinearGradient
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 0.9, y: 3 }}
          colors={['#FFD521', '#F50000', '#B900B4']}
          style={styles.topBarGradient}
        >
          <Text style={styles.topBarText}>Theatre</Text>
        </LinearGradient>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topBarDesign: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '100%',
  },
  topBarGradient: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '100%',
  },
  topBarText: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
  },
});

export default TopBarDes;
