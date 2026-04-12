import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/Theme';

const METHODS = [
  { id: 'paypal', name: 'Paypal', icon: 'https://api.a0.dev/assets/image?text=paypal%20logo&aspect=1:1' },
  { id: 'apple', name: 'Apple Pay', icon: 'https://api.a0.dev/assets/image?text=apple%20pay%20logo&aspect=1:1' },
  { id: 'google', name: 'Google Pay', icon: 'https://api.a0.dev/assets/image?text=google%20pay%20logo&aspect=1:1' },
  { id: 'card', name: 'Mastercard, Visa', icon: 'https://api.a0.dev/assets/image?text=credit%20card%20visa%20mastercard%20icons&aspect=1:1' },
  { id: 'bank', name: 'Bank', icon: 'https://api.a0.dev/assets/image?text=bank%20building%20icon&aspect=1:1' },
];

export default function PaymentScreen({ navigation }) {
  const [selectedMethod, setSelectedMethod] = useState('paypal');
  const [showConfirmation, setShowConfirmation] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Method</Text>
        <TouchableOpacity>
          <Text style={styles.headerIcon}>⋮</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {METHODS.map((method) => {
          const isSelected = selectedMethod === method.id;
          return (
            <TouchableOpacity 
              key={method.id} 
              style={[styles.methodCard, isSelected && styles.methodCardSelected]}
              onPress={() => setSelectedMethod(method.id)}
            >
              <View style={styles.iconContainer}>
                <Image source={{ uri: method.icon }} style={styles.methodIcon} />
              </View>
              <Text style={styles.methodName}>{method.name}</Text>
              <View style={[styles.radio, isSelected && styles.radioSelected]}>
                {isSelected && <View style={styles.radioInner} />}
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          style={styles.continueBtn} 
          onPress={() => setShowConfirmation(true)}
        >
          <Text style={styles.continueBtnText}>Continue Payment</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={showConfirmation}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
             <View style={styles.sealContainer}>
                <View style={[styles.sealCircle, { width: 100, height: 100, opacity: 0.1 }]} />
                <View style={[styles.sealCircle, { width: 80, height: 80, opacity: 0.2 }]} />
                <View style={styles.sealMain}>
                   <Text style={{color: 'white', fontSize: 30}}>✓</Text>
                </View>
             </View>
             
             <Text style={styles.confirmTitle}>Order Confirmed</Text>
             <Text style={styles.confirmDesc}>
               Thank you for your order. You will receive email confirmation shortly.
             </Text>

             <TouchableOpacity 
               style={styles.viewOrderBtn}
               onPress={() => {
                 setShowConfirmation(false);
                 navigation.navigate('OrderDetails');
               }}
             >
               <Text style={styles.viewOrderText}>View Order</Text>
             </TouchableOpacity>

             <TouchableOpacity 
               style={styles.continueShoppingBtn}
               onPress={() => {
                 setShowConfirmation(false);
                 navigation.navigate('Home', { screen: 'HomeTab' });
               }}
             >
               <Text style={styles.continueShoppingText}>Continue Shopping</Text>
             </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  methodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    backgroundColor: COLORS.white,
    marginBottom: 15,
  },
  methodCardSelected: { borderColor: COLORS.primary, backgroundColor: '#FAFFF9' },
  iconContainer: { width: 50, height: 50, borderRadius: 15, backgroundColor: '#F8F9FA', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  methodIcon: { width: 30, height: 30 },
  methodName: { flex: 1, fontSize: 16, fontWeight: 'bold', color: COLORS.text },
  radio: { width: 22, height: 22, borderRadius: 11, borderWidth: 2, borderColor: '#eee', justifyContent: 'center', alignItems: 'center' },
  radioSelected: { borderColor: COLORS.primary },
  radioInner: { width: 12, height: 12, borderRadius: 6, backgroundColor: COLORS.primary },
  bottomContainer: { padding: 20, borderTopWidth: 1, borderTopColor: '#f8f8f8' },
  continueBtn: { 
    backgroundColor: COLORS.primary, height: 60, borderRadius: 30, 
    justifyContent: 'center', alignItems: 'center',
    shadowColor: COLORS.primary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 5
  },
  continueBtnText: { color: COLORS.white, fontSize: 18, fontWeight: 'bold' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center', padding: 20 },
  modalContent: { backgroundColor: COLORS.white, width: '100%', borderRadius: 30, padding: 30, alignItems: 'center' },
  sealContainer: { width: 120, height: 120, justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  sealMain: { width: 70, height: 70, borderRadius: 35, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center', position: 'absolute' },
  sealCircle: { borderRadius: 50, backgroundColor: COLORS.primary, position: 'absolute' },
  confirmTitle: { fontSize: 24, fontWeight: 'bold', color: COLORS.text, marginBottom: 15, textAlign: 'center' },
  confirmDesc: { fontSize: 16, color: COLORS.gray, textAlign: 'center', lineHeight: 24, marginBottom: 30 },
  viewOrderBtn: { width: '100%', backgroundColor: '#EFFFEC', height: 55, borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  viewOrderText: { color: COLORS.primary, fontWeight: 'bold', fontSize: 16 },
  continueShoppingBtn: { width: '100%', backgroundColor: COLORS.primary, height: 55, borderRadius: 30, justifyContent: 'center', alignItems: 'center' },
  continueShoppingText: { color: COLORS.white, fontWeight: 'bold', fontSize: 16 },
});
