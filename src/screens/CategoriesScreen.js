import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../constants/Theme';

const CATEGORIES = [
  { id: '1', name: 'Baked', icon: '🍞' },
  { id: '2', name: 'Meat', icon: '🥩' },
  { id: '3', name: 'Cooked Foods', icon: '🥗' },
  { id: '4', name: 'Cooking Oils', icon: '🫙' },
  { id: '5', name: 'Dairy Products', icon: '🥛' },
  { id: '6', name: 'Drinks & Beverages', icon: '🥤' },
  { id: '7', name: 'Flour', icon: '🌾' },
  { id: '8', name: 'Fruits', icon: '🍎' },
  { id: '9', name: 'Grains', icon: '🍚' },
  { id: '10', name: 'Herbs', icon: '🌿' },
  { id: '11', name: 'Legumes', icon: '🥜' },
  { id: '12', name: 'Spices', icon: '🌶️' },
  { id: '13', name: 'Medicines', icon: '💊' },
  { id: '14', name: 'Poultry', icon: '🍗' },
  { id: '15', name: 'Seafoods', icon: '🐟' },
];

export default function CategoriesScreen({ navigation }) {
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.categoryCard} 
      onPress={() => navigation.navigate('Products', { category: item.name })}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.iconText}>{item.icon}</Text>
      </View>
      <Text style={styles.categoryName} numberOfLines={2} textAlign="center">
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Categories</Text>
        <TouchableOpacity style={styles.headerIcon}>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={renderCategoryItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
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
  searchIcon: {
    fontSize: 18,
  },
  headerTitle: {
    fontSize: SIZES.h3,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  listContent: {
    paddingHorizontal: 15,
    paddingBottom: 100, // accommodate bottom tab
  },
  columnWrapper: {
    justifyContent: 'flex-start',
  },
  categoryCard: {
    width: '33.33%',
    alignItems: 'center',
    marginBottom: 25,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F8FBF8', // very light green as per design
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  iconText: {
    fontSize: 35,
  },
  categoryName: {
    fontSize: 13,
    color: COLORS.text,
    textAlign: 'center',
    fontWeight: '500',
    paddingHorizontal: 5,
  },
});
