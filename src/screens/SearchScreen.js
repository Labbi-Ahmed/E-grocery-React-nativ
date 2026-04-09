import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/Theme';

const RECENT_SEARCHES = ['Cow meat', 'Cooking oil', 'Vegetables'];

export default function SearchScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const renderRecentSearch = ({ item }) => (
    <View style={styles.recentItem}>
      <View style={styles.recentLeft}>
        <Text style={styles.recentIcon}>🕒</Text>
        <Text style={styles.recentText}>{item}</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.removeIcon}>✕</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Search</Text>
        <TouchableOpacity style={styles.headerIcon}>
          <Text style={styles.filterIcon}>≡</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput 
          style={styles.searchInput}
          placeholder="Search here..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor={COLORS.gray}
          autoFocus={true}
        />
      </View>

      {searchQuery.length === 0 ? (
        <View style={styles.recentContainer}>
          <View style={styles.recentHeader}>
            <Text style={styles.recentTitle}>Recent</Text>
            <TouchableOpacity>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={RECENT_SEARCHES}
            keyExtractor={item => item}
            renderItem={renderRecentSearch}
            scrollEnabled={false}
          />
        </View>
      ) : (
        <View style={styles.notFoundContainer}>
          <View style={styles.resultHeader}>
            <Text style={styles.resultText}>Result for "{searchQuery}"</Text>
            <Text style={styles.resultCount}>0 found</Text>
          </View>
          
          <View style={styles.notFoundContent}>
            <View style={styles.illustrationContainer}>
              <Text style={styles.illustration}>📦 🔍</Text>
              <View style={styles.xMark}>
                <Text style={styles.xMarkText}>✕</Text>
              </View>
            </View>
            <Text style={styles.notFoundTitle}>Not Found</Text>
            <Text style={styles.notFoundDesc}>
              Sorry, the keyword you entered cannot be found. Please check again or search with another keyword.
            </Text>
          </View>
        </View>
      )}
      
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
  },
  backArrow: {
    fontSize: 20,
    color: COLORS.text,
  },
  filterIcon: {
    fontSize: 20,
    color: '#000',
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
  recentContainer: {
    paddingHorizontal: 20,
  },
  recentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  recentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  deleteText: {
    fontSize: 14,
    color: '#7B89A3', 
    fontWeight: '500',
  },
  recentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  recentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recentIcon: {
    fontSize: 16,
    opacity: 0.4,
    marginRight: 15,
  },
  recentText: {
    fontSize: 15,
    color: COLORS.text,
  },
  removeIcon: {
    fontSize: 14,
    opacity: 0.4,
  },
  notFoundContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  resultText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  resultCount: {
    fontSize: 14,
    color: '#7B89A3',
    fontWeight: '500',
  },
  notFoundContent: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  illustrationContainer: {
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  illustration: {
    fontSize: 80,
  },
  xMark: {
    position: 'absolute',
    top: -10,
    right: 15,
    backgroundColor: '#D1E6F9',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  xMarkText: {
    color: '#1565C0',
    fontWeight: 'bold',
    fontSize: 16,
  },
  notFoundTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 10,
  },
  notFoundDesc: {
    fontSize: 14,
    color: COLORS.gray,
    textAlign: 'center',
    lineHeight: 22,
  },
});
