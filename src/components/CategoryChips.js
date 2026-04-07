import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants/Theme';

const CATEGORIES = ['All', 'Best Selling', 'Sponsored', 'New Arrivals', 'Vegetables'];

const CategoryChips = () => {
  const [active, setActive] = useState('All');

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {CATEGORIES.map((cat, index) => {
        const isActive = active === cat;
        return (
          <TouchableOpacity
            key={index}
            style={[styles.chip, isActive && styles.activeChip]}
            onPress={() => setActive(cat)}
          >
            <Text style={[styles.text, isActive && styles.activeText]}>
              {cat}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  chip: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  activeChip: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  text: {
    color: COLORS.gray,
    fontSize: SIZES.body,
    fontWeight: '500',
  },
  activeText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
});

export default CategoryChips;
