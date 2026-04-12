import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/Theme';

const CART_DATA = [
  {
    shop: 'ABC Farmer',
    items: [
      { id: '1', title: 'Chicken Sharma', price: 140.00, weight: '1 kg', type: 'Solid', image: 'https://api.a0.dev/assets/image?text=chicken%20sharma%20wrap&aspect=1:1', qty: 1 },
    ]
  },
  {
    shop: 'Meaters',
    items: [
      { id: '2', title: 'Beef Rib Eye 1KG', price: 140.00, weight: '1 kg', type: 'Solid', image: 'https://api.a0.dev/assets/image?text=beef%20rib%20eye%20steak&aspect=1:1', qty: 1 },
      { id: '3', title: 'Lamb Meat', price: 140.00, weight: '1 kg', type: 'Solid', image: 'https://api.a0.dev/assets/image?text=lamb%20chops&aspect=1:1', qty: 1 },
    ]
  },
  {
    shop: 'Fruitsal',
    items: [
      { id: '4', title: 'Strawberry', price: 140.00, weight: '1 kg', type: 'Solid', image: 'https://api.a0.dev/assets/image?text=fresh%20strawberries&aspect=1:1', qty: 1 },
    ]
  }
];

export default function CartScreen({ navigation }) {
  const [cart, setCart] = useState(CART_DATA);

  const updateQty = (shopIndex, itemIndex, delta) => {
    const newCart = [...cart];
    const item = newCart[shopIndex].items[itemIndex];
    item.qty = Math.max(1, item.qty + delta);
    setCart(newCart);
  };

  const removeItem = (shopIndex, itemIndex) => {
    const newCart = [...cart];
    newCart[shopIndex].items.splice(itemIndex, 1);
    if (newCart[shopIndex].items.length === 0) {
      newCart.splice(shopIndex, 1);
    }
    setCart(newCart);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Cart</Text>
        <TouchableOpacity>
          <Text style={styles.headerIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {cart.map((shop, shopIdx) => (
          <View key={shop.shop} style={styles.shopSection}>
            <View style={styles.shopHeader}>
              <View style={styles.shopCheckCircle}><Text style={{color: 'white', fontSize: 10}}>✓</Text></View>
              <Text style={styles.shopName}>{shop.shop}</Text>
            </View>

            {shop.items.map((item, itemIdx) => (
              <View key={item.id} style={styles.cartItem}>
                <Image source={{ uri: item.image }} style={styles.itemImage} resizeMode="cover" />
                <View style={styles.itemInfo}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemAttributes}>{item.weight} | {item.type}</Text>
                  <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
                </View>
                <View style={styles.itemActions}>
                  <TouchableOpacity onPress={() => removeItem(shopIdx, itemIdx)} style={styles.deleteBtn}>
                    <Text style={{fontSize: 20, color: '#999'}}>🗑</Text>
                  </TouchableOpacity>
                  <View style={styles.qtyContainer}>
                    <TouchableOpacity onPress={() => updateQty(shopIdx, itemIdx, -1)} style={styles.qtyBtn}>
                      <Text style={styles.qtyBtnText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.qtyText}>{String(item.qty).padStart(2, '0')}</Text>
                    <TouchableOpacity onPress={() => updateQty(shopIdx, itemIdx, 1)} style={styles.qtyBtn}>
                      <Text style={styles.qtyBtnText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))}

        <View style={styles.couponSection}>
          <Text style={styles.sectionTitleSmall}>Coupon Code</Text>
          <View style={styles.couponInputRow}>
            <TextInput placeholder="Enter code here" style={styles.couponInput} />
            <TouchableOpacity style={styles.applyBtn}>
              <Text style={styles.applyBtnText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.summarySection}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Sub Total</Text>
            <Text style={styles.summaryValue}>$1500</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Shipping</Text>
            <Text style={styles.summaryValue}>$10</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Discount (10%)</Text>
            <Text style={[styles.summaryValue, {color: COLORS.error}]}>-$150</Text>
          </View>
          <View style={[styles.summaryRow, {borderTopWidth: 1, borderTopColor: '#f0f0f0', paddingTop: 15, marginTop: 10}]}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>$1360</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.checkoutBtn} 
          onPress={() => navigation.navigate('Checkout')}
        >
          <Text style={styles.checkoutBtnText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.white },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: COLORS.text },
  headerIcon: { fontSize: 24, color: COLORS.text },
  scrollContent: { padding: 20, paddingBottom: 100 },
  shopSection: { marginBottom: 25 },
  shopHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  shopCheckCircle: { 
    width: 22, height: 22, borderRadius: 11, backgroundColor: COLORS.primary, 
    justifyContent: 'center', alignItems: 'center', marginRight: 10 
  },
  shopName: { fontSize: 16, fontWeight: 'bold', color: COLORS.text },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f8f8f8',
  },
  itemImage: { width: 90, height: 90, borderRadius: 15, backgroundColor: '#f5f5f5' },
  itemInfo: { flex: 1, marginLeft: 15, justifyContent: 'center' },
  itemTitle: { fontSize: 16, fontWeight: 'bold', color: COLORS.text, marginBottom: 4 },
  itemAttributes: { fontSize: 12, color: COLORS.gray, marginBottom: 8 },
  itemPrice: { fontSize: 18, fontWeight: 'bold', color: COLORS.primary },
  itemActions: { alignItems: 'flex-end' },
  deleteBtn: { marginBottom: 15 },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    padding: 3,
  },
  qtyBtn: { 
    width: 30, height: 30, borderRadius: 15, backgroundColor: COLORS.white, 
    justifyContent: 'center', alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 1
  },
  qtyBtnText: { fontSize: 16, fontWeight: 'bold' },
  qtyText: { width: 35, textAlign: 'center', fontSize: 14, fontWeight: 'bold' },
  couponSection: { marginBottom: 30 },
  sectionTitleSmall: { fontSize: 16, fontWeight: 'bold', color: COLORS.text, marginBottom: 12 },
  couponInputRow: { flexDirection: 'row', alignItems: 'center' },
  couponInput: {
    flex: 1, height: 55, borderWidth: 1, borderColor: '#eee', 
    borderRadius: 30, paddingHorizontal: 20, fontSize: 14, backgroundColor: '#fdfdfd'
  },
  applyBtn: { 
    marginLeft: 15, backgroundColor: COLORS.primary, height: 55, 
    borderRadius: 30, paddingHorizontal: 30, justifyContent: 'center', alignItems: 'center' 
  },
  applyBtnText: { color: COLORS.white, fontWeight: 'bold', fontSize: 16 },
  summarySection: { marginBottom: 30, backgroundColor: '#fafafa', padding: 20, borderRadius: 20 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  summaryLabel: { fontSize: 16, color: COLORS.gray },
  summaryValue: { fontSize: 16, fontWeight: 'bold', color: COLORS.text },
  totalLabel: { fontSize: 18, fontWeight: 'bold', color: COLORS.text },
  totalValue: { fontSize: 22, fontWeight: 'bold', color: COLORS.text },
  checkoutBtn: { 
    backgroundColor: COLORS.primary, height: 60, borderRadius: 30, 
    justifyContent: 'center', alignItems: 'center',
    shadowColor: COLORS.primary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 5
  },
  checkoutBtnText: { color: COLORS.white, fontSize: 18, fontWeight: 'bold' }
});
