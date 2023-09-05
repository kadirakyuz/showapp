 import { StyleSheet } from 'react-native';

 const StyleDesign = StyleSheet.create({
    container: {
      flex: 1,
    },
    searchBar: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 20,
      marginTop: 30,
      marginLeft: 15,
      marginBottom: 15,
    },
    searchBarStyle: {
      backgroundColor: 'white',
      borderRadius: 15,
      borderColor: 'aqua',
      borderWidth: 2,
      width: 330,
      height: 55,
      marginTop:5,
      marginLeft:10,
    },
    section: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      paddingTop: 15,
      borderBottomWidth: 2,
      marginTop:13,
      borderColor: 'white',
      marginBottom: 15,
      borderRadius: 50,
      width:'105%',
      marginLeft:-10,
    
    },   
    itemContainer: {
      flexDirection: 'row',
      backgroundColor: 'white',
      borderRadius: 35,
      marginHorizontal:15,
      marginBottom:15,
      padding: 10,
      height: 180,
      borderWidth:3,
      borderColor:'aqua'  
    },
    image: {
      width: 130,
      height: 160,
      borderRadius:25,
      marginRight:10,
      marginTop:-5,
    },
    infoContainer: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      backgroundColor:'white',
      width:100,
      marginRight:8,
    },
    eventName: {
      fontSize: 18,
      fontWeight: '900',
      marginBottom: 5,
      color: '#6805f2',
    },
    eventDate: {
      fontSize: 14,
      fontWeight: '500',
      marginBottom: 5,
      color: '#A715C4',
    },
    eventLocation: {
      fontSize: 14,
      fontWeight: '500',
      marginBottom: 5,
      color: '#A715C4',
    },
    eventType: {
      fontSize: 14,
      fontWeight: '500',
      marginBottom: 5,
      color: '#A715C4',
    },
    eventFree: {
      fontSize: 14,
      fontWeight: '500',
      marginBottom: 5,
      color: '#A715C4',
    },
    buttonContainer: {
      flexDirection: 'column',
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
    },
    buttonContainerArea: {
      height:70,
      width:60,
      backgroundColor:'#2521b6',
      marginVertical:7,
      marginRight:-3,
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center',
     },
    buttonText: {
      fontSize: 14,
      fontWeight: '900',
      color: 'white',
    },
    detailLocationButton:{
      height:70,
      width:60,
      backgroundColor:'#fa006c',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:20,
      borderWidth:1,
      borderColor:'aqua'
    },
    topBarGradient: {
      height: 44,
      width: '100%',
      paddingHorizontal: 16,
      
    },
    topBarText: {
      flex: 1, 
      paddingLeft:10,
      fontSize: 23,
      fontFamily:'Pacifico-Regular',
      color: 'white',
     },
  });

export default StyleDesign;
