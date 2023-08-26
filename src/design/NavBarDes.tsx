{/*import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import ProfileScreen from './ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TodoList from './TodoList';


const Tab = createBottomTabNavigator();

 
const NavBarDes = ( ) => {
  return (<>
  <NavigationContainer >
    <Tab.Navigator >
       <Tab.Screen name="Home" component={TodoList} options={{ headerShown: false }} />
       <Tab.Screen name="Home2" component={ProfileScreen } options={{ headerShown: false }} />
   
   </Tab.Navigator>
</NavigationContainer>
     

    
   
 </> )
}
const styles=StyleSheet.create({

    navBarDesign:{
        backgroundColor:'aqua',
        flex:1,
        
        
         
    },
    navBarDesign1:{
        backgroundColor:'red',
        flex:1,
         
         
    },navBarDesign2:{
        backgroundColor:'orange',
        flex:1,
        
         
    },


})
 
 
export default NavBarDes

{/*
<View style={{flex:1,flexDirection:'row'}}>
<TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.navBarDesign}>
<Text>AreaDes</Text>
</TouchableOpacity >

 
<TouchableOpacity style={styles.navBarDesign1}>
<Text>AreaDes</Text>
</TouchableOpacity>


<TouchableOpacity style={styles.navBarDesign2}>
<Text>AreaDes</Text>
</TouchableOpacity>
</View> 
*/}