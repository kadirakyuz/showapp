import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import NavPage from './src/design/NavPage';
import { createStackNavigator } from '@react-navigation/stack';
import InfoArea from './src/design/InfoArea';


const Stack = createStackNavigator();


const App = () => {
  return  (<>
   
    
    <NavPage></NavPage>

    
    </> )
}

export default App