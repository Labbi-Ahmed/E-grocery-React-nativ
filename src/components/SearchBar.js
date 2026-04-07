import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { COLORS, SIZES } from '../constants/Theme';

const SearchBar = ({ onFilterPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.input}
          placeholder="Search here..."
          placeholderTextColor={COLORS.gray}
        />
      </View>
      <TouchableOpacity style={styles.filterButton} onPress={onFilterPress}>
        <Text style={styles.filterIcon}>⚙️</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginVertical: 15,
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    borderRadius: SIZES.radius,
    height: 50,
    paddingHorizontal: 15,
    marginRight: 15,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 10,
    color: COLORS.gray,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: SIZES.body,
    color: COLORS.text,
  },
  filterButton: {
    width: 50,
    height: 50,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  filterIcon: {
    fontSize: 20,
    color: COLORS.white,
  },
});

export default SearchBar;
