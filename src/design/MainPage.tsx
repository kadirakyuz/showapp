import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import TodoList from './NullArea';
import ProfileScreen from './Archive';
import AddingTaskArea from './InfoArea';
import NullArea from './NullArea';
import InfoArea from './InfoArea';
import Archive from './Archive';
 import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

 const Stack = createStackNavigator();
 const Tab = createBottomTabNavigator();
const MainPage = () => {
  const [selectedTab, setSelectedTab] = useState('NullArea');

  const handleTabPress = (tabName: React.SetStateAction<string>) => {
    setSelectedTab(tabName);
  };

  const getTabColor = (tabName: string) => {
    return selectedTab === tabName ? 'black' : '#0c99eb';
  };

  return (<>
    
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="NullArea"
          component={NullArea}
          listeners={{
            tabPress: () => handleTabPress('NullArea'),
          }}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ size }) => (
              <Icon name="grid" size={30} color={getTabColor('NullArea')} />
            ),
          }}
        />
        <Tab.Screen
          name="Archive"
          component={Archive}
          listeners={{
            tabPress: () => handleTabPress('Archive'),
          }}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: () => (
              <Icon name="archive" size={30} color={getTabColor('Archive')} />
            ),
          }}
        />
        <Tab.Screen
          name="InfoArea"
          component={InfoArea}
          listeners={{
            tabPress: () => handleTabPress('InfoArea'),
          }}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: () => (
              <Icon name="info" size={30} color={getTabColor('InfoArea')} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    </>);
};

export default MainPage;
