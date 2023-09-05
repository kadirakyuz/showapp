import React, { useState } from 'react';
import {View,Text,StyleSheet,FlatList,Image,TouchableOpacity,Linking,StatusBar,ScrollView,} from 'react-native';
import etkinlikler from '../json/etkinlikler.json';
import { Searchbar, Button, Menu, Provider } from 'react-native-paper';
import TopBarDes from '../design/TopBarDes';
import LinearGradient from 'react-native-linear-gradient';
import Iconnn from 'react-native-vector-icons/FontAwesome6';
import MaskedView from '@react-native-masked-view/masked-view';
import { sortByName } from '../layout/SortFunction';
import SystemNavigationBar from 'react-native-system-navigation-bar';


 StatusBar.setHidden(true);
 SystemNavigationBar.stickyImmersive();

const Places = () => {
  const [veri, setVeri] = useState(etkinlikler);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hasSort, setHasSort] = useState(false);
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  const lowercaseQuery = query.toLowerCase();
  const filteredData = etkinlikler.filter(
    (item) =>
      item.Adi.toLowerCase().includes(lowercaseQuery)
  );
  setVeri(filteredData);
  
   
  };

  const eventCenter = (events: any[]) => {
    const groupedEvents: Record<string, any[]> = {};
  
    events.forEach((event) => {
      const center = event.EtkinlikMerkezi;
      if (!groupedEvents[center]) {
        groupedEvents[center] = [];
      }
      groupedEvents[center].push(event);
    });
  
    return groupedEvents;
  };

  const groupedEvents = eventCenter(veri);

  const sortDataByName = () => {
    const sortedData = sortByName(veri, hasSort);
    setHasSort(!hasSort);
    setVeri(sortedData);
  };
 

  const renderEventItem = ({ item }: { item: any }) => (
    <View style={styles.itemContainer}>
      <View style={styles.infoContainer}>
        <View style={{marginBottom:10,height:25,backgroundColor:'transparent',width:'100%',justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.eventName}>{item.Adi}</Text></View>
          
        <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
          <Image resizeMode='contain' source={{ uri: item.Resim }} style={styles.image} />
          <View style={{flex:1}}>
          <View style={{ width: 200, flex:1 }}>
            <Text style={styles.eventType}>{item.Tur}</Text>
            <ScrollView>
              <Text style={styles.eventDescription}>{item.KisaAciklama}</Text>
            </ScrollView>

            <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.locationButton}
              onPress={() => Linking.openURL(item.EtkinlikMerkeziKonum)}>
                <Text style={styles.buttonText}> Konum</Text>
             </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <Provider>
      <View style={styles.container}>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          colors={['#f71f6c', '#5f3194', '#2521b6']}
          style={{ flex: 1 }}>
          <TopBarDes />
          <View style={styles.searchBar}>
            <Searchbar
              placeholder="Arayın.."
              clearButtonMode="always"
              autoCapitalize="none"
              autoCorrect={false}
              value={searchQuery}
              onChangeText={handleSearch}
              style={styles.searchBarStyle}
            />
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <Button icon="sort" textColor="white" onPress={openMenu} children={undefined}></Button>
              }>
                <Menu.Item onPress={sortDataByName} title="İsim" />
             </Menu>
          </View>
          <View style={styles.section}>
            <MaskedView maskElement={<Iconnn name="building-columns" size={45}/>}>
              <LinearGradient
                colors={['#feda75', '#fa7e1e', '#d62976','#962fbf', '#4f5bd5']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                <Iconnn name="building-columns" size={45} />
              </LinearGradient>
            </MaskedView>
          </View>
          <FlatList
            data={Object.keys(groupedEvents)}
            keyExtractor={(center) => center}
            renderItem={({ item: center }) => (
              <>
               <View style={{justifyContent:'center',alignItems:'center',margin:10,marginBottom:20}}><Text style={styles.centerTitle}>{center}</Text></View>
                <FlatList
                  data={groupedEvents[center]}
                  keyExtractor={(event, index) => `${event.Adi}-${index}`}
                  renderItem={renderEventItem}
                />
              </>
            )}
          />
        </LinearGradient>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
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
  centerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    
    
  },
  itemContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 35,
    marginHorizontal:15,
    marginBottom:15,
    padding: 10,
    height: 255,
    borderWidth:3,
    borderColor:'aqua'  
  },
  infoContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  eventName: {
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 5,
    marginLeft:10,
    color: '#d600ff',
     
  },
  eventDescription: {
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 5,
    color: '#ff9a00',
    height:100,
  },
  eventType: {
    fontSize: 14,
    fontWeight: '900',
    marginBottom: 5,
    color: 'red',
  },
  buttonContainer: {
    flexDirection: 'column',
    backgroundColor: 'red',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 20,
    height: 50,
    width: 200,
    borderWidth:1,
    borderColor:'aqua'
    
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '900',
    color: 'white',
  },
  locationButton: {
    height: 50,
    width: 200,
    backgroundColor: '#fa006c',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 5,
    borderWidth:1,
    borderColor:'aqua'
  },
  image: {
    width: 150,
    height: 200,
    borderRadius:25,
    marginRight:10,
    marginTop:-5,
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
});

export default Places;
