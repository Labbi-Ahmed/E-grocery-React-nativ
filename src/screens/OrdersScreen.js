import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/Theme';

const ORDERS = [
  {
    id: '#156790',
    status: 'In Progress',
    total: 100.00,
    itemsCount: 4,
    items: [
      { id: '1', title: 'Chicken Sharma', shop: 'ABC Farmer', price: 504.00, weight: '1 kg', type: 'Solid', image: 'https://api.a0.dev/assets/image?text=chicken%20sharma%20wrap&aspect=1:1', qty: '05' },
      { id: '2', title: 'Platter Bread', shop: 'ABC Farmer', price: 504.00, weight: '1 kg', type: 'Solid', image: 'https://api.a0.dev/assets/image?text=platter%20bread&aspect=1:1', qty: '05' },
    ]
  },
  {
    id: '#156791',
    status: 'Completed',
    total: 100.00,
    itemsCount: 4,
    items: [
      { id: '3', title: 'Chicken Sharma', shop: 'ABC Farmer', price: 504.00, weight: '1 kg', type: 'Solid', image: 'https://api.a0.dev/assets/image?text=chicken%20sharma%20wrap&aspect=1:1', qty: '05' },
      { id: '4', title: 'Platter Bread', shop: 'ABC Farmer', price: 504.00, weight: '1 kg', type: 'Solid', image: 'https://api.a0.dev/assets/image?text=platter%20bread&aspect=1:1', qty: '05' },
    ]
  },
  {
    id: '#156792',
    status: 'Canceled',
    total: 100.00,
    itemsCount: 1,
    items: [
      { id: '5', title: 'Lilty Fruits', shop: 'ABC Farmer', price: 504.00, weight: '1 kg', type: 'Solid', image: 'https://api.a0.dev/assets/image?text=pears%20fruit&aspect=1:1', qty: '05' },
    ]
  }
];

export default function OrdersScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('In Progress');

  const filteredOrders = ORDERS.filter(order => order.status === activeTab);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.headerIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Orders</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.tabBar}>
        {['In Progress', 'Completed', 'Canceled'].map((tab) => (
          <TouchableOpacity 
            key={tab} 
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {filteredOrders.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No orders found in {activeTab}</Text>
          </View>
        ) : (
          filteredOrders.map((order) => (
            <TouchableOpacity 
              key={order.id} 
              style={styles.orderCard}
              onPress={() => navigation.navigate('OrderDetails', { orderId: order.id, status: order.status })}
            >
              <View style={styles.orderCardHeader}>
                <Text style={styles.orderId}>Order : {order.id}</Text>
                <View style={[
                  styles.statusBadge, 
                  order.status === 'Completed' && { backgroundColor: '#EFFFEC' },
                  order.status === 'Canceled' && { backgroundColor: '#FFEDED' }
                ]}>
                  <Text style={[
                    styles.statusBadgeText,
                    order.status === 'Completed' && { color: COLORS.primary },
                    order.status === 'Canceled' && { color: '#FF3B30' }
                  ]}>{order.status}</Text>
                </View>
              </View>

              {order.items.map((item) => (
                <View key={item.id} style={styles.itemRow}>
                  <Image source={{ uri: item.image }} style={styles.itemImage} />
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <View style={styles.itemSubRow}>
                       <Text style={{fontSize: 14}}>🏪</Text>
                       <Text style={styles.shopName}>{item.shop}</Text>
                       <Text style={styles.metaText}>{item.weight} | {item.type}</Text>
                    </View>
                    <View style={styles.priceRow}>
                      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                      <Text style={styles.itemCount}>{item.qty} Items</Text>
                    </View>
                  </View>
                </View>
              ))}

              {order.itemsCount > 2 && (
                <TouchableOpacity style={styles.moreItemsRow}>
                  <Text style={styles.moreItemsText}>{order.itemsCount - order.items.length} more item</Text>
                  <Text style={styles.arrowIcon}>›</Text>
                </TouchableOpacity>
              )}

              <View style={styles.orderFooter}>
                <View>
                  <Text style={styles.footerLabel}>Order Total</Text>
                  <Text style={styles.footerValue}>${order.total.toFixed(2)}</Text>
                </View>
                {order.status === 'In Progress' ? (
                  <TouchableOpacity 
                    style={styles.trackBtn}
                    onPress={() => navigation.navigate('TrackOrder')}
                  >
                    <Text style={styles.trackBtnText}>Track Order</Text>
                  </TouchableOpacity>
                ) : order.status === 'Completed' ? (
                  <TouchableOpacity 
                    style={styles.trackBtn}
                  >
                    <Text style={styles.trackBtnText}>Add Review</Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            </TouchableOpacity>
          ))
        )}
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
  tabBar: { flexDirection: 'row', paddingHorizontal: 20, marginBottom: 20 },
  tab: { 
    paddingHorizontal: 20, paddingVertical: 10, borderRadius: 25, 
    borderWidth: 1, borderColor: '#EEE', marginRight: 10 
  },
  activeTab: { backgroundColor: 'transparent', borderColor: COLORS.primary },
  tabText: { color: COLORS.text, fontWeight: '500' },
  activeTabText: { color: COLORS.primary, fontWeight: 'bold' },
  scrollContent: { padding: 20, paddingBottom: 100 },
  orderCard: {
    backgroundColor: COLORS.white, borderRadius: 20, padding: 20, marginBottom: 25,
    borderWidth: 1, borderColor: '#F0F0F0',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 5, elevation: 2
  },
  orderCardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  orderId: { fontSize: 17, fontWeight: 'bold', color: COLORS.text },
  statusBadge: { backgroundColor: '#FFF4E6', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 10 },
  statusBadgeText: { color: '#FFA500', fontWeight: 'bold', fontSize: 11 },
  itemRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, borderBottomWidth: 1, borderBottomColor: '#F8F8F8', paddingBottom: 15 },
  itemImage: { width: 85, height: 85, borderRadius: 15, backgroundColor: '#f9f9f9' },
  itemInfo: { flex: 1, marginLeft: 15 },
  itemTitle: { fontSize: 16, fontWeight: 'bold', color: COLORS.text, marginBottom: 6 },
  itemSubRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  shopName: { fontSize: 13, color: COLORS.gray, marginHorizontal: 6 },
  metaText: { fontSize: 13, color: COLORS.gray, borderLeftWidth: 1, borderLeftColor: '#DDD', paddingLeft: 6 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  price: { fontSize: 18, fontWeight: 'bold', color: COLORS.text },
  itemCount: { fontSize: 13, color: COLORS.gray },
  moreItemsRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, borderTopWidth: 1, borderTopColor: '#F8F8F8' },
  moreItemsText: { fontSize: 14, color: COLORS.text, fontWeight: '500' },
  arrowIcon: { fontSize: 24, color: '#BBB' },
  orderFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15, borderTopWidth: 1, borderTopColor: '#F8F8F8', paddingTop: 15 },
  footerLabel: { fontSize: 13, color: COLORS.gray, marginBottom: 4 },
  footerValue: { fontSize: 18, fontWeight: 'bold', color: COLORS.text },
  trackBtn: { backgroundColor: COLORS.primary, paddingHorizontal: 25, paddingVertical: 12, borderRadius: 25 },
  trackBtnText: { color: COLORS.white, fontWeight: 'bold', fontSize: 14 },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 100 },
  emptyText: { fontSize: 16, color: COLORS.gray, fontWeight: '500' },
});
