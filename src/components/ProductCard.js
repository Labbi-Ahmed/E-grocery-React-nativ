import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../constants/Theme';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.42; // Adjusts card width to 42% of the screen width for consistent flow on all device sizes

const ProductCard = ({ product }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetails', { product })}>
      {/* Discount Badge */}
      {product.discount && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{product.discount}% OFF</Text>
        </View>
      )}

      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Text style={styles.imagePlaceholder}>[Image]</Text>
      </View>

      {/* Product Details */}
      <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
      
      <View style={styles.priceRow}>
        <Text style={styles.price}>${product.price}</Text>
        {product.originalPrice && (
          <Text style={styles.originalPrice}>${product.originalPrice}</Text>
        )}
      </View>

      {/* Add To Cart Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addIcon}>+</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    padding: 10,
    marginRight: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginBottom: 5,
  },
  badge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: COLORS.error,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    zIndex: 1,
  },
  badgeText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
  imageContainer: {
    height: 100,
    backgroundColor: COLORS.lightGray,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  imagePlaceholder: {
    color: COLORS.gray,
    fontSize: SIZES.small,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 5,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginRight: 5,
  },
  originalPrice: {
    fontSize: 12,
    color: COLORS.gray,
    textDecorationLine: 'line-through',
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: -2,
  },
});

export default ProductCard;
