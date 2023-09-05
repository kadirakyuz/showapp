import React, { useState, useEffect } from 'react';
import {View,Text,FlatList,Image,TouchableOpacity,Linking,StatusBar,ScrollView} from 'react-native';
import etkinlikler from '../json/etkinlikler.json';
import { Searchbar, Button, Menu, Provider } from 'react-native-paper';
import TopBarDes from '../design/TopBarDes';
import LinearGradient from 'react-native-linear-gradient';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import MaskedView from '@react-native-masked-view/masked-view';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';
import { sortByName, sortByDate, sortByPrice } from '../layout/SortFunction';
import StyleDesign from '../layout/StyleDesign';

StatusBar.setHidden(true);
SystemNavigationBar.stickyImmersive();

const Concert = () => {
  const [veri, setVeri] = useState(etkinlikler);
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSort, setHasSort] = useState(false);
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    const lowercaseText = text.toLowerCase();
    const filteredData = etkinlikler.filter(
      (item) =>
        item.Tur === 'KONSER' && item.Adi.toLowerCase().includes(lowercaseText)
    );

    setVeri(filteredData);
  };

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery]);

  const sortDataByName = () => {
    const sortedData = sortByName(veri, hasSort);
    setHasSort(!hasSort);
    setVeri(sortedData);
  };

  const sortDataByDate = () => {
    const sortedData = sortByDate(veri, hasSort);
    setHasSort(!hasSort);
    setVeri(sortedData);
  };

  const sortDataByPrice = () => {
    const sortedData = sortByPrice(veri, hasSort);
    setHasSort(!hasSort);
    setVeri(sortedData);
  };

  const openEventUrl = (url: string) => {
    if (url) {
      const baseUrl = 'https://kultursanat.izmir.bel.tr/Etkinlikler/';
      const addingUrl = url;
      const fullUrl = baseUrl + addingUrl;
      Linking.openURL(fullUrl);
    }
  };

  return (
    <Provider>
      <View style={StyleDesign.container}>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          colors={['#f71f6c', '#5f3194', '#2521b6']}
          style={{ flex: 1 }}>
          <TopBarDes />
          <View style={StyleDesign.searchBar}>
            <Searchbar
              placeholder="Arayın.."
              clearButtonMode="always"
              autoCapitalize="none"
              autoCorrect={false}
              value={searchQuery}
              onChangeText={handleSearch}
              style={StyleDesign.searchBarStyle}
            />
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <Button
                  icon='sort'
                  textColor='white'
                  children={undefined}
                  onPress={openMenu}></Button>
              }>
              <Menu.Item onPress={sortDataByName} title="İsim" />
              <Menu.Item onPress={sortDataByDate} title="Tarih" />
              <Menu.Item onPress={sortDataByPrice} title="Ücret" />
            </Menu>
          </View>
          <View style={StyleDesign.section}>
            <MaskedView maskElement={<Iconn name="music-clef-treble" size={45} />}>
              <LinearGradient
                colors={['#feda75', '#fa7e1e', '#d62976', '#962fbf', '#4f5bd5']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                <Iconn name="music-clef-treble" size={45} />
              </LinearGradient>
            </MaskedView>
          </View>
          <FlatList
            data={veri}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={StyleDesign.itemContainer}>
                <Image resizeMode='contain' source={{ uri: item.Resim }} style={StyleDesign.image} />
                <View style={StyleDesign.infoContainer}>
                  <ScrollView >
                    <Text style={StyleDesign.eventName}>{item.Adi}</Text>
                    <Text style={StyleDesign.eventDate}>{item.EtkinlikBaslamaTarihi}</Text>
                    <Text style={StyleDesign.eventLocation}>{item.EtkinlikMerkezi}</Text>
                    <Text style={StyleDesign.eventType}>{item.Tur.charAt(0).toUpperCase() + item.Tur.slice(1).toLowerCase()}</Text>
                    <Text style={StyleDesign.eventFree}>{item.UcretsizMi ? 'Ücretsiz' : 'Ücretli'}</Text>
                  </ScrollView>
                </View>
                <View style={StyleDesign.buttonContainer}>
                  <View style={StyleDesign.buttonContainerArea}>
                    <TouchableOpacity style={StyleDesign.detailLocationButton} onPress={() => openEventUrl(item.EtkinlikUrl)}>
                      <Text style={StyleDesign.buttonText}>Detay</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={StyleDesign.buttonContainerArea}>
                    <TouchableOpacity style={StyleDesign.detailLocationButton} onPress={() => Linking.openURL(item.EtkinlikMerkeziKonum)}>
                      <Text style={StyleDesign.buttonText}> Konum</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )} />
        </LinearGradient>
      </View>
    </Provider>
  );
};

export default Concert;
