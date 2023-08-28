import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainPage from './src/design/MainPage';
import { createStackNavigator } from '@react-navigation/stack';
import InfoArea from './src/design/InfoArea';


const Stack = createStackNavigator();


const App = () => {
  return  (<>
   
    
    <MainPage></MainPage>

    
    </> )
}

export default App