import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconnn from 'react-native-vector-icons/FontAwesome6';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cinema from '../pages/Cinema';
import Theatre from '../pages/Theatre';
import InfoArea from './InfoArea';
import Concert from '../pages/Concert';
import Any from '../pages/Any';
import MaskedView from '@react-native-community/masked-view'


const Tab = createBottomTabNavigator();

const MainPage = () => {
  const [selectedTab, setSelectedTab] = useState('Theatre');

  const handleTabPress = (tabName: React.SetStateAction<string>) => {
    setSelectedTab(tabName);
  };

  const getTabColor = (tabName: string) => {
    return selectedTab === tabName ? '#e0a510' : '#c22f89';
  };

  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen 
          name="Theatre"
          component={Theatre}
          listeners={{
            tabPress: () => handleTabPress('Theatre'),
          }}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ size }) => (
              <Iconnn name="masks-theater" size={30} color={getTabColor('Theatre')} />
            ),
          }}
        />
        <Tab.Screen
          name="Cinema"
          component={Cinema}
          listeners={{
            tabPress: () => handleTabPress('Cinema'),
          }}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: () => (
              <Iconn name="movie-open" size={30} color={getTabColor('Cinema')} />
            ),
          }}
        />
        
         <Tab.Screen
          name="Concert"
          component={Concert}
          listeners={{
            tabPress: () => handleTabPress('Concert'),
          }}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: () => (
              <Iconn name="music-clef-treble" size={30} color={getTabColor('Concert')} />
            ),
          }}
        /> 
        <Tab.Screen
          name="Any"
          component={Any}
          listeners={{
            tabPress: () => handleTabPress('Any'),
          }}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: () => (
              <Iconn name="ticket" size={30} color={getTabColor('Any')} />
            ),
          }}
        /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainPage;
