import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/Theme';

const ADDRESSES = [
  {
    id: '1',
    type: 'Home',
    text: '3891 Ranchview Dr. Richardson, California, United States',
    phone: '(405) 555-0128',
    selected: true,
  },
  {
    id: '2',
    type: 'Office',
    text: 'Gilman Avenue, San Francisco, California, United States',
    phone: '(219) 555-0114',
    selected: false,
  }
];

export default function CheckoutScreen({ navigation }) {
  const [selectedId, setSelectedId] = useState('1');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <TouchableOpacity>
          <Text style={styles.headerIcon}>⋮</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Shipping Address</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AddAddress')}>
            <Text style={styles.addNewText}>+ Add New</Text>
          </TouchableOpacity>
        </View>

        {ADDRESSES.map((addr) => {
          const isSelected = selectedId === addr.id;
          return (
            <TouchableOpacity 
              key={addr.id} 
              style={[styles.addressCard, isSelected && styles.addressCardSelected]}
              onPress={() => setSelectedId(addr.id)}
            >
              <View style={styles.addressLeft}>
                <View style={styles.addressTypeHeader}>
                  <Text style={{fontSize: 20, marginRight: 10}}>{addr.type === 'Home' ? '🏠' : '🏢'}</Text>
                  <Text style={styles.addressTypeText}>{addr.type}</Text>
                  {isSelected && <Text style={styles.checkIcon}>✓</Text>}
                </View>
                <Text style={styles.addressBody}>{addr.text}</Text>
                <Text style={styles.addressPhone}>{addr.phone}</Text>
              </View>
              <View style={styles.mapThumb}>
                 {/* Placeholder for small map thumbnail */}
                 <View style={styles.mapPlaceholder}>
                   <View style={styles.mapPin} />
                 </View>
              </View>
            </TouchableOpacity>
          );
        })}

        <View style={styles.orderSummarySection}>
          <Text style={styles.sectionTitle}>Your Order</Text>
          <View style={styles.summaryBox}>
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
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>$1360</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.placeOrderBtn} 
          onPress={() => navigation.navigate('Payment')}
        >
          <Text style={styles.placeOrderBtnText}>Place Order</Text>
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
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: COLORS.text },
  addNewText: { color: COLORS.primary, fontWeight: '600' },
  addressCard: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    backgroundColor: COLORS.white,
    marginBottom: 20,
  },
  addressCardSelected: {
    borderColor: COLORS.primary,
    backgroundColor: '#FAFFF9',
  },
  addressLeft: { flex: 1, paddingRight: 10 },
  addressTypeHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  addressTypeText: { fontSize: 17, fontWeight: 'bold', color: COLORS.text, flex: 1 },
  checkIcon: { color: COLORS.primary, fontSize: 18, fontWeight: 'bold' },
  addressBody: { fontSize: 14, color: COLORS.gray, lineHeight: 20, marginBottom: 8 },
  addressPhone: { fontSize: 14, color: COLORS.text, fontWeight: '500' },
  mapThumb: { width: 80, height: 80, borderRadius: 15, overflow: 'hidden' },
  mapPlaceholder: { flex: 1, backgroundColor: '#e2f0d9', justifyContent: 'center', alignItems: 'center' },
  mapPin: { width: 12, height: 12, borderRadius: 6, backgroundColor: '#f05d5e', borderWidth: 2, borderColor: 'white' },
  orderSummarySection: { marginTop: 10, marginBottom: 30 },
  summaryBox: { paddingVertical: 10 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  summaryLabel: { fontSize: 16, color: COLORS.gray },
  summaryValue: { fontSize: 16, fontWeight: 'bold', color: COLORS.text },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: '#f0f0f0', paddingTop: 20, marginTop: 10 },
  totalLabel: { fontSize: 18, fontWeight: 'bold', color: COLORS.text },
  totalValue: { fontSize: 24, fontWeight: 'bold', color: COLORS.text },
  placeOrderBtn: {
    backgroundColor: COLORS.primary, height: 60, borderRadius: 30, 
    justifyContent: 'center', alignItems: 'center',
    shadowColor: COLORS.primary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 5
  },
  placeOrderBtnText: { color: COLORS.white, fontSize: 18, fontWeight: 'bold' }
});
