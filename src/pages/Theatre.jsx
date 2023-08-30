import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Linking, StatusBar } from 'react-native';
import etkinlikler from '../json/etkinlikler.json';
import { Searchbar, Button, Menu, Provider } from 'react-native-paper';
import TopBarDes from '../design/TopBarDes';
import LinearGradient from 'react-native-linear-gradient';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import MaskedView from '@react-native-masked-view/masked-view';
import Iconnn from 'react-native-vector-icons/FontAwesome6';

StatusBar.setHidden(true);
SystemNavigationBar.stickyImmersive();

const Theatre = (props) => {
  const [veri, setVeri] = useState(etkinlikler);
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSort, setHasSort] = useState(false);
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleSearch = (query) => {
    setSearchQuery(query);

    const filteredData = etkinlikler.filter(
      (item) =>
        item.Tur === 'TİYATRO' && item.Adi.toLowerCase().includes(query.toLowerCase())
    );

    setVeri(filteredData);
  };

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery]);

  const sortByName = () => {
    let sortedVeri = [...veri];
    if (!hasSort) {
      sortedVeri.sort((a, b) => a.Adi.localeCompare(b.Adi));
    } else {
      sortedVeri.sort((a, b) => b.Adi.localeCompare(a.Adi));
    }
    setHasSort(!hasSort);
    setVeri(sortedVeri);
  };

  const sortByDate = () => {
    let sortedVeri = [...veri];
    if (!hasSort) {
      sortedVeri.sort((a, b) => a.EtkinlikBaslamaTarihi.localeCompare(b.EtkinlikBaslamaTarihi));
    } else {
      sortedVeri.sort((a, b) => b.EtkinlikBaslamaTarihi.localeCompare(a.EtkinlikBaslamaTarihi));
    }
    setHasSort(!hasSort);
    setVeri(sortedVeri);
  };
  const sortByPrice = () => {
    let sortedVeri = [...veri];
    if (!hasSort) {
      sortedVeri.sort((a, b) => (a.UcretsizMi === b.UcretsizMi ? 0 : a.UcretsizMi ? -1 : 1));
    } else {
      sortedVeri.sort((a, b) => (b.UcretsizMi === a.UcretsizMi ? 0 : b.UcretsizMi ? -1 : 1));
    }
    setHasSort(!hasSort);
    setVeri(sortedVeri);
  };
  
  const openEventUrl = (url) => {
    if (url) {
      const baseUrl = 'https://kultursanat.izmir.bel.tr/Etkinlikler/';
      const addingUrl = url;
      const fullUrl = baseUrl + addingUrl;
      Linking.openURL(fullUrl);
    }
  };

  return (
    <Provider>
      <View style={styles.container}>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          colors={['#ffd366', '#ff6903', '#ec0075','#aa2cc0', '#4564dc']}>
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
              anchor={<Button icon='sort' textColor='white' size={50} onPress={openMenu}></Button>}
            >
              <Menu.Item onPress={sortByName} title="İsim" />
              <Menu.Item onPress={sortByDate} title="Tarih" />
              <Menu.Item onPress={sortByPrice} title="Ücret" />
            </Menu>
          </View>
          <View style={styles.section}>
            <MaskedView maskElement={<Iconnn name="masks-theater" size={45}/>}>
              <LinearGradient
                colors={['#feda75', '#fa7e1e', '#d62976','#962fbf', '#4f5bd5']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                <Iconnn name="masks-theater" size={45} />
              </LinearGradient>
            </MaskedView>
          </View>
          <FlatList
            data={veri}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Image resizeMode='contain' source={{ uri: item.Resim }} style={styles.image} />
                <View style={styles.infoContainer}>
                  <Text style={styles.eventName}>{item.Adi}</Text>
                  <Text style={styles.eventDate}>{item.EtkinlikBaslamaTarihi}</Text>
                  <Text style={styles.eventLocation}>{item.EtkinlikMerkezi}</Text>
                  <Text style={styles.eventType}>{item.Tur.charAt(0).toUpperCase() + item.Tur.slice(1).toLowerCase()}</Text>
                  <Text style={styles.eventFree}>{item.UcretsizMi ? 'Ücretsiz' : 'Ücretli'}</Text>
                  
                    
                  </View>
                  <View style={styles.buttonContainer}>
                    <View style={styles.buttonContainer1}>
                      <TouchableOpacity style={styles.detailLocationButton} onPress={() => openEventUrl(item.EtkinlikUrl)}>
                          <Text style={styles.buttonText}>Detay</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.buttonContainer2}>
                      <TouchableOpacity style={styles.detailLocationButton} onPress={() => Linking.openURL(item.EtkinlikMerkeziKonum)}>
                         <Text style={styles.buttonText}> Konum</Text>
                      </TouchableOpacity>
                    </View>
                    
                    </View>
              
              
              
              
              </View>
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
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
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
    fontWeight: '700',
    color: '#4f5bd5',
  },
  detailLocationButton:{
    height:70,
    width:50,
    backgroundColor:'#feda75',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
  },
 
});

export default Theatre;
