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
      borderColor: '#c22f89',
      borderWidth: 0.5,
      paddingHorizontal: 5,
      paddingBottom:-5,
      width: 340,
      height: 55,
    },
    section: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      paddingTop: 15,
      borderBottomWidth: 1,
      borderColor: '#F8049C',
      marginBottom: 10,
      borderRadius: 50,
    },
    
    sectionTitle: {
      fontSize: 22,
      fontFamily: 'QwitcherGrypen-Bold',
    },
    itemContainer: {
      flexDirection: 'row',
      backgroundColor: 'white',
      borderRadius: 20,
      margin: 10,
      padding: 10,
      height: 180,
    },
    image: {
      width: 160,
      height: 160,
      marginLeft: -15,
    
    },
    infoContainer: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    eventName: {
      fontSize: 14,
      fontWeight: '800',
      marginBottom: 5,
      color: '#6805f2',
    },
    eventDate: {
      fontSize: 11,
      fontWeight: '500',
      marginBottom: 5,
      color: '#A715C4',
    },
    eventLocation: {
      fontSize: 11,
      fontWeight: '500',
      marginBottom: 5,
      color: '#A715C4',
    },
    eventType: {
      fontSize: 11,
      fontWeight: '500',
      marginBottom: 5,
      color: '#A715C4',
    },
    eventFree: {
      fontSize: 11,
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
    buttonContainer1: {
      height:70,
      width:50,
      backgroundColor:'#feda75',
      marginBottom:15,
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center',
    },
    buttonContainer2: {   
      height:70,
      width:50,
      backgroundColor:'#feda75',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:20,
    },
    buttonText: {
      fontSize: 12,
      fontWeight: '900',
      color: 'white',
    },
    detailLocationButton:{
      height:70,
      width:50,
      backgroundColor:'#fa006c',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:20,
    },
    topBarGradient: {
        height: 45,
        width: '100%',
        paddingHorizontal: 16,
       },
      topBarText: {
        flex: 1, 
        paddingLeft:10,
        fontSize: 23,
        fontFamily:'Pacifico-Regular',
        color: 'white',
        borderWidth:0,
    },
  });

export default StyleDesign;
