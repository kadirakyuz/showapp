import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import etkinlikler from '../../etkinlikler.json';
import { Searchbar, Button, Menu, Divider, Provider } from 'react-native-paper';
import TopBarDes from '../design/TopBarDes';

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
    setVeri(sortedVeri);
    setHasSort(!hasSort);
  };
  const sortByDate = () => {
    let sortedVeri = [...veri];
    if (!hasSort) {
      sortedVeri.sort((a, b) => a.EtkinlikBaslamaTarihi.localeCompare(b.EtkinlikBaslamaTarihi));
    } else {
      sortedVeri.sort((a, b) => b.EtkinlikBaslamaTarihi.localeCompare(a.EtkinlikBaslamaTarihi));
    }
    setVeri(sortedVeri);
    setHasSort(!hasSort);
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
            anchor={<Button style={{borderColor:'#c22f89',borderWidth:1,height:40,}} icon='sort' onPress={openMenu}></Button>}
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
              <Image source={{ uri: item.Resim }} style={styles.image} />
              <View style={styles.infoContainer}>
                <Text style={styles.eventName}>{item.Adi}</Text>
                <Text>{item.EtkinlikBaslamaTarihi}</Text>
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
    flexDirection: 'row', // Yeni satır
    justifyContent: 'space-between', // Yeni satır
    alignItems: 'center', // Yeni satır
    borderColor: 'black',
    height: 40,
    marginHorizontal: 15,
    marginTop: 25,
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingTop: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#8c2ed9',
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
    height: 200,
  },
  image: {
    width: 175,
    height: 175,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  eventName: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
  },
  searchBarStyle: {
    backgroundColor: 'white',
    borderRadius: 25,
    borderColor: '#c22f89',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: 310, // Örnek genişlik değeri
    height:60,
  },
});

export default Theatre;
