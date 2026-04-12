import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/Theme';

const PURCHASED_ITEMS = [
  { id: '1', title: 'Chicken Sharma', shop: 'ABC Farmer', price: 504.00, weight: '1 kg', type: 'Wholesale', image: 'https://api.a0.dev/assets/image?text=chicken%20sharma%20wrap&aspect=1:1', qty: '05' },
  { id: '2', title: 'Platter Bread', shop: 'ABC Farmer', price: 504.00, weight: '1 kg', type: 'Solid', image: 'https://api.a0.dev/assets/image?text=platter%20bread&aspect=1:1', qty: '05' },
];

export default function OrderDetailsScreen({ navigation, route }) {
  // We can use route.params to determine if it's "Completed" or "In Progress"
  const isCompleted = true; // For now default to TRUE as per user request

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.headerIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order Detail</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Status Card */}
        <View style={styles.statusCard}>
           <View style={styles.truckIconBox}>
              <Text style={{fontSize: 20, color: COLORS.white}}>🚚</Text>
           </View>
           <View style={styles.statusTextContainer}>
              <Text style={styles.statusMainText}>Completed</Text>
              <Text style={styles.statusSubText}>Orders will be received 24 Nov 2024</Text>
           </View>
           <Text style={styles.arrowGrey}>›</Text>
        </View>

        {/* Order Info */}
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Order number</Text>
          <Text style={styles.infoValue}>#09226632</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Order date</Text>
          <Text style={styles.infoValue}>22 Nov 2024, 05:00 PM</Text>
        </View>

        {/* Purchased Items */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Purchased Item</Text>
        </View>

        {PURCHASED_ITEMS.map((item) => (
          <View key={item.id} style={styles.itemCard}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemContent}>
               <Text style={styles.itemTitle}>{item.title}</Text>
               <View style={styles.shopRow}>
                  <Text style={{fontSize: 12}}>🏪</Text>
                  <Text style={styles.shopName}>{item.shop}</Text>
                  <Text style={styles.itemMeta}>{item.weight}  |  {item.type}</Text>
               </View>
               <View style={styles.priceRow}>
                  <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                  <Text style={styles.qtyText}>{item.qty} Items</Text>
               </View>
            </View>
          </View>
        ))}

        {/* Shipping Information */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Shipping Information</Text>
        </View>
        <View style={styles.shipRow}>
           <Text style={styles.detailLabel}>Shipment</Text>
           <View style={styles.detailValueRow}>
              <Text style={styles.shipBrand}>DHL</Text>
              <Text style={styles.detailValue}>Sameday</Text>
           </View>
        </View>
        <View style={styles.shipRow}>
           <Text style={styles.detailLabel}>Receipt 📄</Text>
           <Text style={styles.detailValue}>000458679674</Text>
        </View>
        <View style={styles.shipRow}>
           <Text style={styles.detailLabel}>Delivery Address</Text>
           <Text style={styles.detailValue}>Home</Text>
        </View>

        {/* Payment Information */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Payment Information</Text>
        </View>
        <View style={styles.shipRow}>
           <Text style={styles.detailLabel}>Payment</Text>
           <View style={styles.detailValueRow}>
              <Text style={styles.visaTxt}>VISA</Text>
              <Text style={styles.detailValue}>3455</Text>
           </View>
        </View>
        <View style={styles.shipRow}>
           <Text style={styles.detailLabel}>Subtotal</Text>
           <Text style={styles.detailValue}>$159.00</Text>
        </View>
        <View style={styles.shipRow}>
           <Text style={styles.detailLabel}>Delivery Fee</Text>
           <Text style={styles.detailValue}>Free</Text>
        </View>
        <View style={styles.shipRowLast}>
           <Text style={styles.detailLabel}>Shipping Insurance</Text>
           <Text style={styles.detailValue}>$5.00</Text>
        </View>

        {/* Total */}
        <View style={[styles.shipRow, {borderTopWidth: 1, borderTopColor: '#F8F8F8', paddingTop: 20, marginTop: 10}]}>
           <Text style={styles.totalLabel}>Total</Text>
           <Text style={styles.totalValue}>$164.00</Text>
        </View>
      </ScrollView>

      {/* Review Button */}
      <View style={styles.footer}>
         <TouchableOpacity style={styles.reviewBtn}>
            <Text style={styles.reviewBtnText}>Add Review</Text>
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
    paddingVertical: 15,
  },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: COLORS.text },
  headerIcon: { fontSize: 24, color: COLORS.text },
  scrollContent: { padding: 20, paddingBottom: 120 },
  statusCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFFFEC',
    borderRadius: 15,
    padding: 20,
    marginBottom: 25,
  },
  truckIconBox: { width: 45, height: 45, borderRadius: 25, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  statusTextContainer: { flex: 1 },
  statusMainText: { fontSize: 18, fontWeight: 'bold', color: COLORS.primary, marginBottom: 4 },
  statusSubText: { fontSize: 13, color: COLORS.text, opacity: 0.7 },
  arrowGrey: { fontSize: 24, color: '#999' },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15, borderBottomWidth: 1, borderBottomColor: '#F8F8F8', paddingBottom: 15 },
  infoLabel: { fontSize: 16, color: COLORS.text, fontWeight: '500' },
  infoValue: { fontSize: 15, color: COLORS.gray },
  sectionHeader: { marginTop: 10, marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: COLORS.text },
  itemCard: { flexDirection: 'row', alignItems: 'center', marginBottom: 25, borderBottomWidth: 1, borderBottomColor: '#F8F8F8', paddingBottom: 20 },
  itemImage: { width: 90, height: 90, borderRadius: 15, backgroundColor: '#f9f9f9' },
  itemContent: { flex: 1, marginLeft: 15 },
  itemTitle: { fontSize: 18, fontWeight: 'bold', color: COLORS.text, marginBottom: 8 },
  shopRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  shopName: { fontSize: 13, color: COLORS.gray, marginHorizontal: 8 },
  itemMeta: { fontSize: 13, color: COLORS.gray, borderLeftWidth: 1, borderLeftColor: '#DDD', paddingLeft: 8 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  price: { fontSize: 19, fontWeight: 'bold', color: COLORS.text },
  qtyText: { fontSize: 13, color: COLORS.gray },
  shipRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 },
  shipRowLast: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  detailLabel: { fontSize: 15, color: COLORS.gray },
  detailValue: { fontSize: 15, fontWeight: 'bold', color: COLORS.text },
  detailValueRow: { flexDirection: 'row', alignItems: 'center' },
  shipBrand: { fontSize: 15, fontWeight: 'bold', color: '#DE0000', marginRight: 10 }, // DHL Red
  visaTxt: { fontSize: 15, fontWeight: 'bold', color: '#1A1F71', marginRight: 10 }, // Visa Blue
  totalLabel: { fontSize: 18, color: COLORS.gray },
  totalValue: { fontSize: 22, fontWeight: 'bold', color: COLORS.text },
  footer: { position: 'absolute', bottom: 0, width: '100%', backgroundColor: COLORS.white, padding: 20, borderTopWidth: 1, borderTopColor: '#F8F8F8' },
  reviewBtn: { backgroundColor: COLORS.primary, height: 65, borderRadius: 32.5, justifyContent: 'center', alignItems: 'center' },
  reviewBtnText: { color: COLORS.white, fontSize: 18, fontWeight: 'bold' }
});
