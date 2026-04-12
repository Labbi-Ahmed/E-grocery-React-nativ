import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../constants/Theme';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.44;

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
        <Image 
          source={{ uri: `https://api.a0.dev/assets/image?text=${encodeURIComponent(product.title)}&aspect=1:1` }} 
          style={styles.image}
          resizeMode="cover"
        />
        <TouchableOpacity style={styles.cartButton}>
           <Text style={styles.cartIcon}>🛒</Text>
        </TouchableOpacity>
      </View>

      {/* Product Details */}
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
        <View style={styles.bottomRow}>
          <View style={styles.priceContainer}>
             <Text style={styles.price}>${product.price ? product.price.toFixed(2) : '0.00'}</Text>
             {product.originalPrice && (
               <Text style={styles.originalPrice}>${product.originalPrice.toFixed(2)}</Text>
             )}
          </View>
          <View style={styles.ratingBox}>
            <Text style={styles.starText}>★</Text>
            <Text style={styles.ratingText}>{product.rating || '4.0'}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    marginBottom: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  badge: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    zIndex: 1,
  },
  badgeText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
  imageContainer: {
    height: 140,
    backgroundColor: '#FAF9F6',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  cartButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cartIcon: {
    fontSize: 16,
  },
  details: {
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 8,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  priceContainer: {
    flex: 1,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  originalPrice: {
    fontSize: 12,
    color: COLORS.gray,
    textDecorationLine: 'line-through',
    marginTop: 2,
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starText: {
    color: '#FFB800',
    fontSize: 14,
    marginRight: 4,
  },
  ratingText: {
    fontSize: 12,
    color: COLORS.gray,
    fontWeight: '600',
  },
});

export default ProductCard;
