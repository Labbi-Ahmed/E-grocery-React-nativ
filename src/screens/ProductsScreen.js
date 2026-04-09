import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/Theme';

// Import Components
import SearchBar from '../components/SearchBar';
import CategoryChips from '../components/CategoryChips';
import ProductCard from '../components/ProductCard';
import FilterModal from '../components/FilterModal';
import EmptyState from '../components/EmptyState';

// Dummy Products Data
const PRODUCTS = [
  { id: '1', title: 'Beef Kima', price: 59.00, originalPrice: 100.00, discount: 50 },
  { id: '2', title: 'Meat Big', price: 59.00, originalPrice: 100.00, discount: 50 },
  { id: '3', title: 'Beef Leg', price: 59.00, originalPrice: 100.00, discount: 50 },
  { id: '4', title: 'Beef salt', price: 59.00, originalPrice: 100.00, discount: 50 },
  { id: '5', title: 'Beef Liver', price: 59.00, originalPrice: 100.00, discount: 50 },
  { id: '6', title: 'Beef Steak', price: 59.00, originalPrice: 100.00, discount: 50 },
];

export default function ProductsScreen({ route, navigation }) {
  const [filterVisible, setFilterVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const categoryName = route.params?.category || 'Products';

  const filteredProducts = PRODUCTS.filter(product => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{categoryName}</Text>
        <TouchableOpacity style={styles.headerIcon} onPress={() => setFilterVisible(true)}>
          <Text style={styles.filterIcon}>≡</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.container}>
        <FlatList
          data={filteredProducts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.cardWrapper}>
              <ProductCard product={item} />
            </View>
          )}
          numColumns={2}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={styles.headerContainer}>
              <SearchBar 
                value={searchQuery}
                onChangeText={setSearchQuery}
                onFilterPress={() => setFilterVisible(true)} 
              />
              <View style={styles.chipsContainer}>
                <CategoryChips />
              </View>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                  {searchQuery ? `Result for "${searchQuery}"` : 'All Products'}
                </Text>
                {searchQuery !== '' && (
                  <Text style={{color: COLORS.gray}}>{filteredProducts.length} found</Text>
                )}
              </View>
            </View>
          }
          ListEmptyComponent={<EmptyState />}
        />
      </View>

      <FilterModal 
        visible={filterVisible} 
        onClose={() => setFilterVisible(false)} 
      />
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
  chipsContainer: {
    marginTop: -10, // Adjust spacing from SearchBar
  },
  listContent: {
    paddingBottom: 30, // Stack screen doesn't need huge padding, no tab bar covering it
  },
  cardWrapper: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: SIZES.h3,
    fontWeight: 'bold',
    color: COLORS.text,
  },
});
