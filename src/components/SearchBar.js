import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../constants/Theme';

const SearchBar = ({ onFilterPress, value, onChangeText, editable = true }) => {
  const navigation = useNavigation();

  const isNavigationMode = !onChangeText;

  const handlePress = () => {
    if (isNavigationMode) {
      navigation.navigate('Search');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.inputContainer} 
        activeOpacity={isNavigationMode ? 0.8 : 1}
        onPress={handlePress}
        disabled={!isNavigationMode}
      >
        <Text style={styles.searchIcon}>🔍</Text>
        <View style={{ flex: 1 }} pointerEvents={isNavigationMode ? 'none' : 'auto'}>
          <TextInput
            style={styles.input}
            placeholder="Search here..."
            placeholderTextColor={COLORS.gray}
            value={value}
            onChangeText={onChangeText}
            editable={!isNavigationMode && editable}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton} onPress={onFilterPress}>
        <Text style={styles.filterIcon}>≡</Text>
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
