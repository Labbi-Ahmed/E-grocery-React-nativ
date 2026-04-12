import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/Theme';

const MENU_ITEMS = [
  { id: 'orders', title: 'My Orders', icon: '📦' },
  { id: 'coupons', title: 'Coupon', icon: '🎫', rightText: '03 coupon' },
  { id: 'stores', title: 'Followed Store', icon: '🏪' },
  { id: 'viewed', title: 'Last Viewed', icon: '🛒' },
  { id: 'settings', title: 'Settings', icon: '⚙️' },
  { id: 'logout', title: 'Log Out', icon: '↪️', isLogout: true },
];

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.headerIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Account</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Profile Info */}
        <View style={styles.profileSection}>
          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: 'https://api.a0.dev/assets/image?text=man%20profile%20picture&aspect=1:1' }} 
              style={styles.profileImage} 
            />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>💎 Regular</Text>
            </View>
          </View>
          <Text style={styles.name}>Francene Vandyne</Text>
        </View>

        {/* Wholesale Banner */}
        <TouchableOpacity style={styles.wholesaleBanner}>
           <View style={styles.crownContainer}>
              <Text style={styles.crownIcon}>👑</Text>
           </View>
           <View style={styles.wholesaleTextContainer}>
              <Text style={styles.wholesaleTitle}>Become a Wholesale Customer</Text>
              <Text style={styles.wholesaleSubtitle}>Customer can buy products on wholesale</Text>
           </View>
           <Text style={styles.arrowRight}>›</Text>
        </TouchableOpacity>

        {/* Menu List */}
        <View style={styles.menuList}>
          {MENU_ITEMS.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={styles.menuItem}
              onPress={() => {
                if(item.id === 'settings') navigation.navigate('Settings');
                if(item.id === 'orders') navigation.navigate('Orders');
                if(item.id === 'coupons') navigation.navigate('Voucher');
                if(item.id === 'logout') navigation.navigate('SignIn');
              }}
            >
              <View style={styles.menuLeft}>
                <View style={styles.menuIconBox}>
                  <Text style={{fontSize: 20}}>{item.icon}</Text>
                </View>
                <Text style={[styles.menuTitle, item.isLogout && {color: '#666'}]}>{item.title}</Text>
              </View>
              <View style={styles.menuRight}>
                {item.rightText && <Text style={styles.rightText}>{item.rightText}</Text>}
                <Text style={styles.arrowRightGrey}>›</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
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
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: COLORS.text },
  headerIcon: { fontSize: 24, color: COLORS.text },
  scrollContent: { padding: 20, paddingBottom: 100 },
  profileSection: { alignItems: 'center', marginBottom: 30, marginTop: 10 },
  imageContainer: { position: 'relative', marginBottom: 15 },
  profileImage: { width: 120, height: 120, borderRadius: 60, borderWidth: 4, borderColor: '#FAFAFA' },
  badge: { 
    position: 'absolute', bottom: -10, alignSelf: 'center',
    backgroundColor: '#FFA500', paddingHorizontal: 15, paddingVertical: 6, borderRadius: 20,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3
  },
  badgeText: { color: COLORS.white, fontWeight: 'bold', fontSize: 12 },
  name: { fontSize: 24, fontWeight: 'bold', color: COLORS.text, marginTop: 15 },
  wholesaleBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#051980', // Dark Navy/Blue
    padding: 20,
    borderRadius: 20,
    marginBottom: 30,
  },
  crownContainer: {
    width: 60, height: 60, borderRadius: 15, backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center', alignItems: 'center', marginRight: 15
  },
  crownIcon: { fontSize: 24 },
  wholesaleTextContainer: { flex: 1 },
  wholesaleTitle: { color: COLORS.white, fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  wholesaleSubtitle: { color: 'rgba(255,255,255,0.7)', fontSize: 12 },
  arrowRight: { color: COLORS.white, fontSize: 30, marginLeft: 10 },
  menuList: { borderTopWidth: 1, borderTopColor: '#F8F8F8' },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F8F8F8',
  },
  menuLeft: { flexDirection: 'row', alignItems: 'center' },
  menuIconBox: { width: 40, alignItems: 'center', justifyContent: 'center', marginRight: 10 },
  menuTitle: { fontSize: 18, fontWeight: '500', color: COLORS.text },
  menuRight: { flexDirection: 'row', alignItems: 'center' },
  rightText: { color: COLORS.gray, marginRight: 10, fontSize: 14 },
  arrowRightGrey: { color: '#BBB', fontSize: 24 },
});
