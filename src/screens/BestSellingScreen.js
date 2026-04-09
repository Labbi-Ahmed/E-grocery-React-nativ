import React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/Theme';

import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';

const BEST_SELLING_PRODUCTS = [
  { id: '1', title: 'Beef Kima', price: 59.00, originalPrice: 100.00, discount: 50 },
  { id: '2', title: 'Meat Big', price: 59.00, originalPrice: 100.00, discount: 50 },
  { id: '3', title: 'Beef Leg', price: 59.00, originalPrice: 100.00, discount: 50 },
  { id: '4', title: 'Beef salt', price: 59.00, originalPrice: 100.00, discount: 50 },
  { id: '5', title: 'Beef Liver', price: 59.00, originalPrice: 100.00, discount: 50 },
  { id: '6', title: 'Beef Steak', price: 59.00, originalPrice: 100.00, discount: 50 },
];

export default function BestSellingScreen({ navigation }) {
  const ListHeader = () => (
    <View style={styles.headerContainer}>
      <SearchBar onFilterPress={() => {}} />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Best Selling</Text>
        <TouchableOpacity style={styles.headerIcon} onPress={() => {}}>
          <Text style={styles.filterIcon}>≡</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.container}>
        <FlatList
          data={BEST_SELLING_PRODUCTS}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.cardWrapper}>
              <ProductCard product={item} />
            </View>
          )}
          numColumns={2}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={ListHeader}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: COLORS.white 
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: COLORS.white,
  },
  headerIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    borderRadius: 20,
  },
  backArrow: {
    fontSize: 20,
    color: COLORS.text,
  },
  filterIcon: {
    fontSize: 20,
    color: COLORS.text,
  },
  headerTitle: {
    fontSize: SIZES.h3,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingBottom: 10,
  },
  listContent: {
    paddingBottom: 30,
  },
  cardWrapper: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
});
