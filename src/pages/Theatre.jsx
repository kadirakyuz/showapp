import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput } from 'react-native';
import etkinlikler from '../../etkinlikler.json';

const Theatre = () => {
  const [veri, setVeri] = useState(etkinlikler);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);

    const filteredData = etkinlikler.filter(item =>
      item.Tur === 'TİYATRO' &&
      item.Adi.toLowerCase().includes(query.toLowerCase())
    );

    setVeri(filteredData);
  };

  useEffect(() => {
    handleSearch(searchQuery); // Sayfa yüklendiğinde filtrelemeyi başlat
  }, []); // Boş bir bağımlılık dizisi vererek sayfa yüklendiğinde sadece bir kez çalışmasını sağla

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          placeholder='Arayın..' 
          clearButtonMode='always' 
          autoCapitalize='none' 
          autoCorrect={false} 
          value={searchQuery} 
          onChangeText={handleSearch}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tiyatro</Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
    marginHorizontal: 5,
    marginTop: 5,
    borderRadius: 15,
    marginBottom: -15,
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#0c99eb',
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
});

export default Theatre;
