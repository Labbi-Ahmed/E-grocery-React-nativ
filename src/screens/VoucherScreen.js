import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/Theme';

const VOUCHERS = [
  { id: '1', title: 'Discount 10%', subtitle: 'Opening Offer', code: 'New Coupon', expiry: '12 hours', color: '#00C853', icon: '🎫' },
  { id: '2', title: 'Up to $12', subtitle: 'Free Shipping', code: 'Free Shipping', expiry: '02 days', color: '#FF9100', icon: '🚚' },
  { id: '3', title: 'Up to 20%', subtitle: 'Shop Offer', code: 'Coupon Shop', expiry: '07 Dec', color: COLORS.primary, icon: '🍎', border: true },
  { id: '4', title: 'Up to 50%', subtitle: 'Shop Offer', code: 'Coupon Shop', expiry: '07 Dec', color: '#F5F5F5', icon: '🥗' },
];

export default function VoucherScreen({ navigation }) {
  const [selectedVoucher, setSelectedVoucher] = React.useState('3'); // Default to '3' as per mockup border

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.headerIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Coupon</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {VOUCHERS.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={[
              styles.voucherCard, 
              selectedVoucher === item.id && styles.voucherCardBorder
            ]}
            onPress={() => setSelectedVoucher(item.id)}
          >
             <View style={[styles.iconBox, { backgroundColor: item.color }]}>
                <Text style={{fontSize: 24, color: COLORS.white}}>{item.icon}</Text>
             </View>
             <View style={styles.dashedLine} />
             <View style={styles.voucherInfo}>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.footerRow}>
                  <Text style={styles.codeText}>Code: <Text style={{fontWeight: 'bold'}}>{item.code}</Text></Text>
                  <Text style={styles.expiryText}>End in {item.expiry}</Text>
                </View>
             </View>
             {selectedVoucher === item.id && (
               <View style={styles.selectBadge}>
                  <Text style={{color: COLORS.white, fontSize: 10}}>✓</Text>
               </View>
             )}
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          style={styles.useBtn} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.useBtnText}>Use Coupon</Text>
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
  scrollContent: { padding: 20 },
  voucherCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    overflow: 'hidden',
    height: 120,
    position: 'relative'
  },
  voucherCardBorder: { borderColor: COLORS.primary, borderWidth: 1.5 },
  selectBadge: {
    position: 'absolute', top: 10, right: 10,
    width: 20, height: 20, borderRadius: 10,
    backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center'
  },
  iconBox: { width: 100, height: '100%', justifyContent: 'center', alignItems: 'center' },
  dashedLine: { width: 1, height: '70%', borderLeftWidth: 1, borderLeftColor: '#DDD', borderStyle: 'dashed', marginHorizontal: 5 },
  voucherInfo: { flex: 1, padding: 15, justifyContent: 'center' },
  subtitle: { fontSize: 13, color: COLORS.gray, marginBottom: 4 },
  title: { fontSize: 22, fontWeight: 'bold', color: COLORS.text, marginBottom: 8 },
  footerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  codeText: { fontSize: 12, color: COLORS.gray },
  expiryText: { fontSize: 11, color: COLORS.gray },
  bottomContainer: { padding: 20, borderTopWidth: 1, borderTopColor: '#F8F8F8' },
  useBtn: { 
    backgroundColor: COLORS.primary, height: 60, borderRadius: 30, 
    justifyContent: 'center', alignItems: 'center',
    shadowColor: COLORS.primary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 5
  },
  useBtnText: { color: COLORS.white, fontSize: 18, fontWeight: 'bold' }
});
