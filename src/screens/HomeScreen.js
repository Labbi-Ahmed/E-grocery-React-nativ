import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, FlatList, Text, TouchableOpacity, Alert } from 'react-native';
import { COLORS, SIZES } from '../constants/Theme';

// Import Components
import HomeHeader from '../components/HomeHeader';
import SearchBar from '../components/SearchBar';
import HeroBanner from '../components/HeroBanner';
import CategoryChips from '../components/CategoryChips';
import ProductCard from '../components/ProductCard';
import FilterModal from '../components/FilterModal';
import OfficialStoreSection from '../components/OfficialStoreSection';

// Dummy Data mimicking a large product list
const PRODUCTS = [
  { id: '1', title: 'Beef Rib Eye 1KG', price: 14.99, originalPrice: 20.00, discount: 25 },
  { id: '2', title: 'Organic Broccoli', price: 3.99 },
  { id: '3', title: 'Fresh Salmon', price: 24.50, originalPrice: 30.00, discount: 15 },
  { id: '4', title: 'Chicken Sharma', price: 8.99, discount: 50 },
  { id: '5', title: 'Avocado 4 Pack', price: 5.99 },
  { id: '6', title: 'Sweet Apples', price: 2.99 },
  { id: '7', title: 'Carrots 1KG', price: 1.50 },
  { id: '8', title: 'Whole Wheat Bread', price: 3.20 },
  { id: '9', title: 'Organic Eggs', price: 4.50 },
  { id: '10', title: 'Orange Juice 1L', price: 5.00 },
];

export default function HomeScreen({ navigation }) {
  const [filterVisible, setFilterVisible] = useState(false);

  const handleMenuPress = () => {
    // Open drawer navigation or modal
    console.log("Menu pressed");
  };

  const ListHeader = () => (
    <View>
      <SearchBar onFilterPress={() => setFilterVisible(true)} />
      <HeroBanner />
      <CategoryChips />
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>All Products</Text>
      </View>
    </View>
  );

  const ListFooter = () => (
    <OfficialStoreSection />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <HomeHeader onMenuPress={handleMenuPress} />
      
      <View style={styles.container}>
        <FlatList
          data={PRODUCTS}
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
          ListFooterComponent={ListFooter}
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
  container: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 90,
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
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: SIZES.h3,
    fontWeight: 'bold',
    color: COLORS.text,
  },
});
