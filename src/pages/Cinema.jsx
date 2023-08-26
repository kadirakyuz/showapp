import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';
import etkinlikler from './etkinlikler.json';

const Cinema = () => {
  const [veri, setVeri] = useState(etkinlikler);

  return (
    <View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sinema</Text>
      </View>
      <View style={styles.sectionContent}>
        <FlatList
          horizontal={true}
          data={veri}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ height: 90, marginTop: 10, marginBottom: 10, flex: 0.5 }}>
              <Text>Adı: {item.Adi}</Text>
              <Text>Fiyatı: {item.EtkinlikBaslamaTarihi}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    borderBottomWidth: 2,
    borderColor: '#0c99eb',
    borderRadius: 25,
    height: 40,
    marginBottom: 10,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 22,
  },
  sectionContent: {
    borderWidth: 2,
    borderColor: '#0c99eb',
    borderRadius: 25,
    height: 200,
    margin: 10,
  },
});

export default Cinema;
