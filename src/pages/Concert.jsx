import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity,Linking,StatusBar } from 'react-native';
import etkinlikler from './../json/etkinlikler.json';
import { Searchbar, Button, Menu, Provider } from 'react-native-paper';
import TopBarDes from '../design/TopBarDes';
import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from "react-native-text-gradient";
import SystemNavigationBar from 'react-native-system-navigation-bar';
import MapView from 'react-native-maps';

import axios from 'axios';
StatusBar.setHidden(true);
SystemNavigationBar.stickyImmersive();

const Theatre = () => {
  
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
        item.Tur === 'KONSER' && item.Adi.toLowerCase().includes(query.toLowerCase())
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
    setHasSort(true);
    setVeri(sortedVeri);
  };
  
  const sortByDate = () => {
    let sortedVeri = [...veri];
    if (!hasSort) {
      sortedVeri.sort((a, b) => a.EtkinlikBaslamaTarihi.localeCompare(b.EtkinlikBaslamaTarihi));
    } else {
      sortedVeri.sort((a, b) => b.EtkinlikBaslamaTarihi.localeCompare(a.EtkinlikBaslamaTarihi));
    }
    setHasSort(true);
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
            anchor={<Button  icon='sort' textColor='#b10ce8' size={50} onPress={openMenu}></Button>}
          >
            <Menu.Item onPress={sortByName } title="İsim" />
            <Menu.Item onPress={sortByDate } title="Tarih" />
          </Menu>
        </View>
        <View style={styles.section}>
       
            <Text style={styles.sectionTitle}>TİYATRO</Text>
          
        </View>
        <FlatList
          data={veri}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image resizeMode='contain' source={{ uri: item.Resim }} style={styles.image} />
              <View style={styles.infoContainer}>
                <Text style={ {fontSize: 14, fontWeight: '700', marginBottom: 5,color: '#6805f2'}}>{item.Adi}</Text>
                <Text style={ {fontSize: 10, fontWeight: '400', marginBottom: 5,color: '#A715C4'}}>{item.EtkinlikBaslamaTarihi}</Text>
                <Text style={ {fontSize: 10, fontWeight: '400', marginBottom: 5,color: '#A715C4'}}>{item.EtkinlikMerkezi}</Text>
                <Text style={ {fontSize: 10, fontWeight: '400', marginBottom: 5,color: '#A715C4'}}>Ücretsiz Mi?  {item.UcretsizMi ? 'Evet' : 'Hayır'}</Text>
                <View style={{flexDirection:'row',margin:15}}>

                  <View style={{justifyContent:'center',alignItems:'center',}}/>
                  <TouchableOpacity style={{justifyContent:'center', marginRight:25}} onPress={() => openEventUrl(item.EtkinlikUrl)}>
                  <Text style={{ fontSize: 16, fontWeight: '700', color: '#f202ca' }}>Detay</Text></TouchableOpacity>

                  <View style={{justifyContent:'center',alignItems:'flex',}}/>
                  <TouchableOpacity style={{justifyContent:'center'}} onPress={() => Linking.openURL(item.EtkinlikMerkeziKonum)}>
                  <Text style={{ fontSize: 16, fontWeight: '700', color: '#f202ca' }}>Konum</Text></TouchableOpacity>
                   
                  </View>
                   
       
      
   
              </View>
            </View>
          )}
        />
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
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'black',
    height: 20,
    marginTop:35,
    marginLeft:15,
    marginBottom:20,
     
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingTop: 15,
    borderBottomWidth:1,
    borderColor:'#F8049C',
    marginBottom:10,
    borderRadius:50,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#F8049C',
    fontFamily:'Pacifico-Regular',

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
    marginLeft:-10,
  },
  infoContainer: {
    flex: 1,
    alignItems:'flex-start',
    justifyContent: 'flex-start',
  },
   
  searchBarStyle: {
    backgroundColor:'white',
    borderRadius: 35,
    borderColor: '#c22f89',
    borderWidth: 0.4,
    paddingHorizontal: 10,
    width: 340,
    height: 60,
  },
});

export default Theatre;
