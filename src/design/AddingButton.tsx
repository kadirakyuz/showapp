/*import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AddingTaskArea from './AddingTaskArea';
import { Button } from 'react-native-paper';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AddingTaskArea" component={AddingTaskArea} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AddingButton = () => {
  const navigation = useNavigation(); // Missing navigation object

  return (
    <View>
      <Button
        onPress={() => navigation.navigate('AddingTaskArea')}
        style={styles.buttonDesign}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>+</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonDesign: {
    // Add your button styles here
  },
});

export default AddingButton;*/
