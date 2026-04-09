import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/Theme';
import ProductCard from '../components/ProductCard';
import { useAppContext } from '../context/AppContext';

export default function ProductDetailsScreen({ navigation }) {
  // Global App Context for cross-screen updates
  const { currency } = useAppContext();

  // Accordion simple state simulator
  const [descExpanded, setDescExpanded] = useState(false);
  const [shippingExpanded, setShippingExpanded] = useState(true);
  const [infoExpanded, setInfoExpanded] = useState(true);
  const [reviewExpanded, setReviewExpanded] = useState(true);

  // Bottom Add To Cart simple logic
  const [qty, setQty] = useState(1);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header overlaying scrollview intentionally */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Details</Text>
        <TouchableOpacity style={styles.headerIcon}>
          <Text style={styles.heartIcon}>♡</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Large Product Image Placeholder Area */}
        <View style={styles.imagePlaceholder}>
          <Text style={styles.placeholderText}>[🥩 Beef Rib Eye Image 1KG]</Text>
          <View style={styles.paginationRow}>
            <View style={styles.activeDot} />
            <View style={styles.inactiveDot} />
            <View style={styles.inactiveDot} />
          </View>
        </View>

        <View style={styles.contentBody}>
          {/* Title & Price */}
          <Text style={styles.title}>Beef Rib Eye 1KG</Text>
          <Text style={styles.categoryInfo}>Category: <Text style={{color: COLORS.primary}}>Meat</Text></Text>
          
          <View style={styles.priceRow}>
            <Text style={styles.price}>$59.00</Text>
            <Text style={styles.originalPrice}>$100.00</Text>
            <View style={{flex: 1}} />
            <TouchableOpacity style={styles.currencyPill} onPress={() => navigation.navigate('Currency')}>
              <Text style={styles.currencyText}>($) {currency} ⌄</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.shortDesc}>
            Discover the exquisite flavor of our fresh beef rib eye at Abis Farms Market. Sourced from the finest cattle, our rib eye boasts marbling that melts in your mouth, delivering unparalleled juiciness and tenderness with every bite.
          </Text>

          {/* Store Info Card */}
          <View style={styles.storeCard}>
            <View style={styles.storeLogoBox}>
              <Text>🍳</Text>
            </View>
            <View style={styles.storeDetails}>
              <Text style={styles.storeName}>N'wans Kitchen</Text>
              <View style={styles.ratingRow}>
                <Text style={styles.stars}>★★★★☆</Text>
                <Text style={styles.ratingNum}>4.0</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.visitButton}>
              <Text style={styles.visitText}>Visit Store</Text>
            </TouchableOpacity>
          </View>

          {/* Accordion Blocks */}
          <TouchableOpacity style={styles.accordionHeader} onPress={() => setDescExpanded(!descExpanded)}>
            <Text style={styles.accordionTitle}>Description</Text>
            <Text style={styles.accordionArrow}>{descExpanded ? '⌃' : '⌄'}</Text>
          </TouchableOpacity>
          {descExpanded && (
            <Text style={styles.accordionBody}>
              Long description of the fresh beef rib eye...
            </Text>
          )}

          <TouchableOpacity style={styles.accordionHeader} onPress={() => setShippingExpanded(!shippingExpanded)}>
            <Text style={styles.accordionTitle}>Shipping</Text>
            <Text style={styles.accordionArrow}>{shippingExpanded ? '⌃' : '⌄'}</Text>
          </TouchableOpacity>
          {shippingExpanded && (
            <View style={styles.accordionBody}>
              <Text style={styles.shippingRow}>Shipping Continents: <Text style={{fontWeight: 'bold'}}>Africa</Text></Text>
              <Text style={styles.shippingRow}>Shipping Countries: <Text style={{fontWeight: 'bold'}}>Nigeria</Text></Text>
              <Text style={styles.shippingRow}>Shipping State/Province: <Text style={{fontWeight: 'bold'}}>Lagos (Nigeria)</Text></Text>
            </View>
          )}

          <TouchableOpacity style={styles.accordionHeader} onPress={() => setInfoExpanded(!infoExpanded)}>
            <Text style={styles.accordionTitle}>Additional information</Text>
            <Text style={styles.accordionArrow}>{infoExpanded ? '⌃' : '⌄'}</Text>
          </TouchableOpacity>
          {infoExpanded && (
            <View style={styles.accordionBody}>
              <Text style={styles.shippingRow}>Weight: 0.35 kg</Text>
              <Text style={styles.shippingRow}>Dimensions: 0.31 x 0.20</Text>
              <Text style={styles.shippingRow}>Unit Count: 0.31 x</Text>
              <Text style={styles.shippingRow}>Country of Origin: Nigeria</Text>
              <Text style={styles.shippingRow}>Condition: Packed</Text>
            </View>
          )}

          {/* Spacer */}
          <View style={{height: 100}} />
        </View>
      </ScrollView>

      {/* Floating Bottom Nav */}
      <View style={styles.bottomBar}>
        <View style={styles.qtyBox}>
          <TouchableOpacity onPress={() => qty > 1 && setQty(qty - 1)} style={styles.qtyBtn}>
            <Text style={styles.qtyIcon}>—</Text>
          </TouchableOpacity>
          <Text style={styles.qtyValue}>{String(qty).padStart(2, '0')}</Text>
          <TouchableOpacity onPress={() => setQty(qty + 1)} style={styles.qtyBtn}>
            <Text style={styles.qtyIcon}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addToCartBtn}>
          <Text style={styles.addToCartText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
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
    paddingVertical: 10,
    backgroundColor: '#F8E9DE', // Matches the peach background exactly for realistic look
  },
  headerIcon: { width: 40, height: 40, justifyContent: 'center', alignItems: 'center' },
  backArrow: { fontSize: 24, color: COLORS.text },
  heartIcon: { fontSize: 24, color: COLORS.text },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: COLORS.text },
  scrollContent: { paddingBottom: 120 },
  imagePlaceholder: {
    height: 250,
    backgroundColor: '#F8E9DE',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  placeholderText: { color: COLORS.primary, fontSize: 16, opacity: 0.5, fontWeight: 'bold' },
  paginationRow: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
  },
  activeDot: { width: 15, height: 4, borderRadius: 2, backgroundColor: COLORS.text, marginHorizontal: 3 },
  inactiveDot: { width: 6, height: 4, borderRadius: 2, backgroundColor: '#D1E0CA', marginHorizontal: 3 },
  contentBody: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: { fontSize: 22, fontWeight: 'bold', color: COLORS.text, marginBottom: 5 },
  categoryInfo: { fontSize: 14, color: COLORS.gray, marginBottom: 15 },
  priceRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  price: { fontSize: 20, fontWeight: 'bold', color: COLORS.primary, marginRight: 10 },
  originalPrice: { fontSize: 16, color: COLORS.gray, textDecorationLine: 'line-through' },
  currencyPill: { borderWidth: 1, borderColor: '#DDD', borderRadius: 15, paddingHorizontal: 12, paddingVertical: 4 },
  currencyText: { fontSize: 12, color: COLORS.gray },
  shortDesc: { fontSize: 14, color: '#555', lineHeight: 22, paddingBottom: 20, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' },
  storeCard: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' },
  storeLogoBox: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#FFEDDB', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  storeDetails: { flex: 1 },
  storeName: { fontSize: 16, fontWeight: 'bold', color: COLORS.text, marginBottom: 2 },
  ratingRow: { flexDirection: 'row', alignItems: 'center' },
  stars: { color: '#F39C12', fontSize: 12, marginRight: 5 },
  ratingNum: { color: COLORS.gray, fontSize: 12 },
  visitButton: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6, backgroundColor: '#F4F5F7' },
  visitText: { fontSize: 12, fontWeight: '600', color: COLORS.text },
  accordionHeader: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, borderTopWidth: 1, borderTopColor: '#F0F0F0' },
  accordionTitle: { fontSize: 16, fontWeight: 'bold', color: COLORS.text },
  accordionArrow: { fontSize: 20, color: COLORS.gray },
  accordionBody: { paddingBottom: 15 },
  shippingRow: { fontSize: 14, color: '#555', marginBottom: 8, lineHeight: 22 },
  bottomBar: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  qtyBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F4F5F7', borderRadius: 25, paddingHorizontal: 5, paddingVertical: 5 },
  qtyBtn: { width: 35, height: 35, borderRadius: 17.5, backgroundColor: COLORS.white, justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 2 },
  qtyIcon: { fontSize: 18, color: COLORS.text, fontWeight: '600' },
  qtyValue: { width: 40, textAlign: 'center', fontSize: 16, fontWeight: 'bold', color: COLORS.text },
  addToCartBtn: { flex: 1, marginLeft: 20, backgroundColor: COLORS.primary, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' },
  addToCartText: { color: COLORS.white, fontSize: 16, fontWeight: 'bold' }
});
