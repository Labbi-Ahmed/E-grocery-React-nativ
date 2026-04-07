import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { COLORS, SIZES } from '../constants/Theme';

const { width } = Dimensions.get('window');
const cardWidth = (width - 60) / 2; // 2 columns with padding

const STORES = [
  { id: '1', name: 'Agroo Store', bgColor: '#E8EDF2', textColor: '#FFFFFF' },
  { id: '2', name: 'Meatse Store', bgColor: '#EAD3D9', textColor: '#FFFFFF' },
  { id: '3', name: 'Drink Store', bgColor: '#D9BBAF', textColor: '#FFFFFF' },
  { id: '4', name: 'Beverage Store', bgColor: '#B3DAEE', textColor: '#FFFFFF' },
];

const OfficialStoreSection = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Official Store</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* Grid */}
      <View style={styles.grid}>
        {STORES.map((store) => (
          <View key={store.id} style={[styles.card, { backgroundColor: store.bgColor }]}>
             <View style={styles.imagePlaceholder}>
               <Text style={{color: '#999', fontSize: 10}}>[Image {store.id}]</Text>
             </View>
             
             {/* Green Label Button overlapping bottom */}
             <TouchableOpacity style={styles.storeButton}>
               <Text style={styles.storeButtonText}>{store.name}</Text>
             </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EBEBF4', // Light purplish grey
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: SIZES.h3,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  seeAllText: {
    fontSize: SIZES.body,
    fontWeight: '500',
    color: COLORS.secondary,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: cardWidth,
    height: cardWidth * 1.1,
    borderRadius: 15,
    marginBottom: 20,
    position: 'relative',
    alignItems: 'center',
  },
  imagePlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storeButton: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  storeButtonText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default OfficialStoreSection;
