import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/Theme';

const ORDER_ITEMS = [
  { id: '1', title: 'Chicken Sharma', price: 140.00, weight: '1 kg', type: 'Solid', image: 'https://api.a0.dev/assets/image?text=chicken%20sharma%20wrap&aspect=1:1', qty: 1 },
  { id: '2', title: 'Beef Rib Eye 1KG', price: 140.00, weight: '1 kg', type: 'Solid', image: 'https://api.a0.dev/assets/image?text=beef%20rib%20eye%20steak&aspect=1:1', qty: 1 },
];

export default function OrderDetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order Details</Text>
        <View style={{width: 24}} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.statusCard}>
          <View style={styles.statusCircle}>
             <Text style={{fontSize: 20}}>📦</Text>
          </View>
          <View>
            <Text style={styles.statusTitle}>Order #12345678</Text>
            <Text style={styles.statusSubtitle}>Placed on 12 April 2024</Text>
          </View>
          <View style={styles.statusBadge}>
            <Text style={styles.statusBadgeText}>Processing</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Items</Text>
          {ORDER_ITEMS.map((item) => (
            <View key={item.id} style={styles.itemRow}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemMeta}>{item.weight} | Qty: {item.qty}</Text>
              </View>
              <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shipping Address</Text>
          <View style={styles.addressBox}>
            <Text style={styles.addressName}>Home</Text>
            <Text style={styles.addressText}>3891 Ranchview Dr. Richardson, California, United States</Text>
            <Text style={styles.addressPhone}>(405) 555-0128</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <View style={styles.paymentBox}>
            <Text style={styles.paymentText}>Paypal (*******@email.com)</Text>
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
            <Text style={styles.summaryLabel}>Discount</Text>
            <Text style={[styles.summaryValue, {color: COLORS.error}]}>-$150</Text>
          </View>
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>$1360</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.backHomeBtn}
          onPress={() => navigation.navigate('Home', { screen: 'HomeTab' })}
        >
          <Text style={styles.backHomeBtnText}>Continue Shopping</Text>
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
  scrollContent: { padding: 20 },
  statusCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFFF9',
    borderRadius: 20,
    padding: 20,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#EFFFEC',
  },
  statusCircle: { width: 50, height: 50, borderRadius: 25, backgroundColor: COLORS.white, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  statusTitle: { fontSize: 16, fontWeight: 'bold', color: COLORS.text },
  statusSubtitle: { fontSize: 13, color: COLORS.gray, marginTop: 2 },
  statusBadge: { backgroundColor: '#FFEDDB', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10, marginLeft: 'auto' },
  statusBadgeText: { fontSize: 10, color: '#D35400', fontWeight: 'bold' },
  section: { marginBottom: 25 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: COLORS.text, marginBottom: 15 },
  itemRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  itemImage: { width: 60, height: 60, borderRadius: 10, backgroundColor: '#f5f5f5' },
  itemInfo: { flex: 1, marginLeft: 15 },
  itemTitle: { fontSize: 15, fontWeight: 'bold', color: COLORS.text },
  itemMeta: { fontSize: 13, color: COLORS.gray, marginTop: 2 },
  itemPrice: { fontSize: 16, fontWeight: 'bold', color: COLORS.primary },
  addressBox: { backgroundColor: '#F8F9FA', borderRadius: 15, padding: 15 },
  addressName: { fontSize: 15, fontWeight: 'bold', color: COLORS.text, marginBottom: 5 },
  addressText: { fontSize: 14, color: COLORS.gray, lineHeight: 20, marginBottom: 5 },
  addressPhone: { fontSize: 14, color: COLORS.text, fontWeight: '500' },
  paymentBox: { backgroundColor: '#F8F9FA', borderRadius: 15, padding: 15 },
  paymentText: { fontSize: 14, color: COLORS.text },
  summarySection: { backgroundColor: '#fafafa', padding: 20, borderRadius: 20, marginBottom: 30 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  summaryLabel: { fontSize: 15, color: COLORS.gray },
  summaryValue: { fontSize: 15, fontWeight: 'bold', color: COLORS.text },
  totalRow: { borderTopWidth: 1, borderTopColor: '#f0f0f0', paddingTop: 15, marginTop: 10 },
  totalLabel: { fontSize: 17, fontWeight: 'bold', color: COLORS.text },
  totalValue: { fontSize: 20, fontWeight: 'bold', color: COLORS.primary },
  backHomeBtn: { 
    backgroundColor: COLORS.primary, height: 60, borderRadius: 30, 
    justifyContent: 'center', alignItems: 'center', marginBottom: 40 
  },
  backHomeBtnText: { color: COLORS.white, fontSize: 17, fontWeight: 'bold' }
});
