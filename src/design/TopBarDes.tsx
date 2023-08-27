import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Iconn from 'react-native-vector-icons/Foundation';

const TopBarDes = () => {
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.9, y: 3 }}
      colors={['#FFD521', '#F50000', '#B900B4']}
      style={styles.topBarGradient}
    >
      <Text style={styles.topBarText}>Theatre</Text>
      <TouchableOpacity>
        <Iconn name="info" size={30} color="white" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  topBarGradient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    width: '100%',
    paddingHorizontal: 16,
  },
  topBarText: {
    flex: 1, // Bu satır eklendi
    textAlign: 'center', // Bu satır eklendi
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
  },
});

export default TopBarDes;
