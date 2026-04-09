import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/Theme';

const CURRENCIES = [
  { id: '1', code: 'USD', title: 'United States dollar ($) - USD', flag: '🇺🇸' },
  { id: '2', code: 'EUR', title: 'Euro (€) - EUR', flag: '🇪🇺' },
  { id: '3', code: 'GBP', title: 'Pound sterling (£) - GBP', flag: '🇬🇧' },
  { id: '4', code: 'NGN', title: 'Nigerian naira (N) - NGN', flag: '🇳🇬' },
  { id: '5', code: 'GHS', title: 'Ghana cedi (¢) - GHS', flag: '🇬🇭' },
  { id: '6', code: 'ZAR', title: 'South African rand (R) - ZAR', flag: '🇿🇦' },
  { id: '7', code: 'CAD', title: 'Canadian dollar ($) - CAD', flag: '🇨🇦' },
];

export default function CurrencyScreen({ navigation }) {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [searchQuery, setSearchQuery] = useState('');

  const renderItem = ({ item }) => {
    const isSelected = selectedCurrency === item.code;
    return (
      <TouchableOpacity 
        style={[styles.card, isSelected && styles.cardSelected]} 
        onPress={() => setSelectedCurrency(item.code)}
      >
        <View style={styles.leftContent}>
          <View style={styles.flagContainer}>
            <Text style={styles.flag}>{item.flag}</Text>
          </View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.radioContainer}>
          {isSelected ? (
            <View style={styles.radioSelected}>
              <View style={styles.radioInner} />
            </View>
          ) : (
            <View style={styles.radioUnselected} />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
          <Text style={styles.closeIcon}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Currency</Text>
        <View style={{ width: 24 }} /> {/* Balance the header */}
      </View>

      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput 
          style={styles.searchInput}
          placeholder="Search here..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor={COLORS.gray}
        />
      </View>

      <FlatList
        data={CURRENCIES}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
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
    paddingVertical: 15,
  },
  closeButton: {
    padding: 5,
  },
  closeIcon: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
  },
  headerTitle: {
    fontSize: SIZES.h3,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 10,
    opacity: 0.6,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: COLORS.text,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    marginBottom: 12,
  },
  cardSelected: {
    borderColor: COLORS.primary,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  flag: {
    fontSize: 20,
  },
  title: {
    fontSize: 15,
    color: COLORS.text,
  },
  radioContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioUnselected: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#D1D1D1',
  },
  radioSelected: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.primary,
  },
});
