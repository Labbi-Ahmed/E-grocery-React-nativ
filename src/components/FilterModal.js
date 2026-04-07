import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, SIZES } from '../constants/Theme';

const FilterModal = ({ visible, onClose }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSort, setActiveSort] = useState('Popular');
  const [rating, setRating] = useState(4);

  const categories = ['All', 'Baked', 'Meat', 'Cooked Foods'];
  const sortOptions = ['Popular', 'Best Sell', 'Sponsored', 'New Arrival'];

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Filter</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>✕</Text>
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Categories */}
            <Text style={styles.sectionTitle}>Categories</Text>
            <View style={styles.chipContainer}>
              {categories.map((cat) => (
                <TouchableOpacity
                  key={cat}
                  style={[styles.chip, activeCategory === cat && styles.activeChip]}
                  onPress={() => setActiveCategory(cat)}
                >
                  <Text style={[styles.chipText, activeCategory === cat && styles.activeChipText]}>
                    {cat}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Price Range (Mock) */}
            <Text style={styles.sectionTitle}>Price</Text>
            <View style={styles.priceContainer}>
              <View style={styles.priceSliderMock} />
              <View style={styles.priceLabels}>
                <Text style={styles.priceText}>$200</Text>
                <Text style={styles.priceText}>$2000</Text>
              </View>
            </View>

            {/* Sort By */}
            <Text style={styles.sectionTitle}>Sort By</Text>
            <View style={styles.chipContainer}>
              {sortOptions.map((sort) => (
                <TouchableOpacity
                  key={sort}
                  style={[styles.chip, activeSort === sort && styles.activeChip]}
                  onPress={() => setActiveSort(sort)}
                >
                  <Text style={[styles.chipText, activeSort === sort && styles.activeChipText]}>
                    {sort}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Rating */}
            <Text style={styles.sectionTitle}>Rating</Text>
            <View style={styles.ratingContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity key={star} onPress={() => setRating(star)}>
                  <Text style={[styles.star, rating >= star ? styles.activeStar : styles.inactiveStar]}>
                    ★
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          {/* Action Buttons */}
          <View style={styles.actionContainer}>
            <TouchableOpacity style={styles.resetButton} onPress={() => {}}>
              <Text style={styles.resetButtonText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.applyButton} onPress={onClose}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    maxHeight: '85%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: SIZES.h2,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  closeButton: {
    fontSize: 20,
    color: COLORS.gray,
    padding: 5,
  },
  sectionTitle: {
    fontSize: SIZES.h3,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 15,
    marginBottom: 10,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    marginRight: 10,
    marginBottom: 10,
  },
  activeChip: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  chipText: {
    color: COLORS.gray,
    fontSize: SIZES.body,
  },
  activeChipText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  priceContainer: {
    paddingVertical: 10,
  },
  priceSliderMock: {
    height: 4,
    backgroundColor: COLORS.primary,
    borderRadius: 2,
    marginVertical: 10,
  },
  priceLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceText: {
    color: COLORS.gray,
    fontSize: SIZES.body,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  star: {
    fontSize: 30,
    marginRight: 10,
  },
  activeStar: {
    color: '#FFD700',
  },
  inactiveStar: {
    color: COLORS.lightGray,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingBottom: 10,
  },
  resetButton: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: SIZES.buttonRadius,
    borderWidth: 1,
    borderColor: COLORS.primary,
    alignItems: 'center',
    marginRight: 10,
  },
  resetButtonText: {
    color: COLORS.primary,
    fontSize: SIZES.body,
    fontWeight: 'bold',
  },
  applyButton: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: SIZES.buttonRadius,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    marginLeft: 10,
  },
  applyButtonText: {
    color: COLORS.white,
    fontSize: SIZES.body,
    fontWeight: 'bold',
  },
});

export default FilterModal;
