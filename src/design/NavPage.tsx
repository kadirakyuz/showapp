import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconnn from 'react-native-vector-icons/FontAwesome6';
import Cinema from '../pages/Cinema';
import Theatre from '../pages/Theatre';
import Concert from '../pages/Concert';
import Any from '../pages/Any';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Dimensions, StyleSheet, View } from 'react-native';


const Tab = createMaterialBottomTabNavigator();

const NavPage = () => {
  const [selectedTab, setSelectedTab] = useState('Theatre');

  const handleTabPress = (tabName: React.SetStateAction<string>) => {
    setSelectedTab(tabName);
  };

  const getTabColor = (tabName: string) => {
    return selectedTab === tabName ? '#F70D66' : '#9F04F8';
  };

  return (
    <NavigationContainer >
        
        <Tab.Navigator barStyle={styles.barStyles} > 
        <Tab.Screen   
          name="Theatre"
          component={Theatre}
          listeners={{
            tabPress: () => handleTabPress('Theatre'),
          }}
          options={{
            
             
            tabBarLabel: '',
            tabBarIcon: ({ }) => (
              <Iconnn name="masks-theater" size={25} color={getTabColor('Theatre')} />
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
            
            tabBarLabel: '',
            tabBarIcon: () => (
              <Iconn name="movie-open" size={25} color={getTabColor('Cinema')} />
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
            
            tabBarLabel: '',
            tabBarIcon: () => (
              <Iconn name="music-clef-treble" size={25} color={getTabColor('Concert')} />
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
            
            tabBarLabel: '',
            tabBarIcon: () => (
              <Iconn name="ticket" size={25} color={getTabColor('Any')} />
            ),
          }}
        /> 
          
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  barStyles: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    marginBottom: 10,
    overflow: 'hidden',
    left: (Dimensions.get('window').width - 260) / 2,
    position: 'absolute',
    backgroundColor: 'white',
    borderWidth:1,
    height: 45,
    width: 260,
    justifyContent:'center',
    paddingTop:23,
  },
});
export default NavPage;
