import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/Theme';

export default function WholesaleScreen({ navigation }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleApply = () => {
    setShowConfirm(false);
    setShowSuccess(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.headerIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Wholesale Customer</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.illustrationContainer}>
           <View style={styles.crownCircle}>
              <Text style={{fontSize: 50}}>👑</Text>
           </View>
           <Text style={styles.mainTitle}>Upgrade to Wholesale</Text>
           <Text style={styles.mainSubtitle}>Unlock exclusive benefits and bulk pricing for your business.</Text>
        </View>

        <View style={styles.benefitsContainer}>
           <Text style={styles.sectionTitle}>Benefits</Text>
           
           <View style={styles.benefitItem}>
              <View style={styles.benefitIconBox}>
                 <Text style={{fontSize: 20}}>📉</Text>
              </View>
              <View style={styles.benefitTextContent}>
                 <Text style={styles.benefitTitle}>Bulk Pricing</Text>
                 <Text style={styles.benefitDesc}>Get significant discounts when buying in large quantities.</Text>
              </View>
           </View>

           <View style={styles.benefitItem}>
              <View style={styles.benefitIconBox}>
                 <Text style={{fontSize: 20}}>🚀</Text>
              </View>
              <View style={styles.benefitTextContent}>
                 <Text style={styles.benefitTitle}>Priority Shipping</Text>
                 <Text style={styles.benefitDesc}>Your orders are processed first for faster delivery.</Text>
              </View>
           </View>

           <View style={styles.benefitItem}>
              <View style={styles.benefitIconBox}>
                 <Text style={{fontSize: 20}}>📞</Text>
              </View>
              <View style={styles.benefitTextContent}>
                 <Text style={styles.benefitTitle}>Dedicated Support</Text>
                 <Text style={styles.benefitDesc}>24/7 personal account manager for all your needs.</Text>
              </View>
           </View>
        </View>

        <View style={styles.infoBox}>
           <Text style={styles.infoText}>* Application requires a valid business license and tax ID for verification.</Text>
        </View>
      </ScrollView>

      <View style={styles.bottomActions}>
         <TouchableOpacity 
           style={styles.applyBtn}
           onPress={() => setShowConfirm(true)}
         >
            <Text style={styles.applyBtnText}>Apply Now</Text>
         </TouchableOpacity>
      </View>

      {/* Confirmation Modal */}
      <Modal visible={showConfirm} transparent animationType="fade">
        <View style={styles.modalOverlay}>
           <View style={styles.confirmBox}>
              <Text style={styles.confirmTitle}>Are you want to become a wholesale customer?</Text>
              <View style={styles.confirmBtnRow}>
                 <TouchableOpacity style={styles.cancelBtn} onPress={() => setShowConfirm(false)}>
                    <Text style={styles.cancelBtnText}>Cancel</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.activeBtn} onPress={handleApply}>
                    <Text style={styles.activeBtnText}>Active</Text>
                 </TouchableOpacity>
              </View>
           </View>
        </View>
      </Modal>

      {/* Success Modal */}
      <Modal visible={showSuccess} transparent animationType="slide">
        <View style={styles.modalOverlay}>
           <View style={styles.successBox}>
              <View style={styles.successIconBox}>
                 <Image 
                   source={require('../../ref-img/My/successfully send request icon.png')} 
                   style={styles.successIconImage}
                   resizeMode="contain"
                 />
              </View>
              <Text style={styles.successTitle}>Request Sent!</Text>
              <Text style={styles.successDesc}>Your wholesale customer request send to the admin. Please wait for approval.</Text>
              <TouchableOpacity style={styles.backHomeBtn} onPress={() => {
                setShowSuccess(false);
                navigation.navigate('ProfileScreen');
              }}>
                 <Text style={styles.backHomeBtnText}>Back</Text>
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
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: COLORS.text },
  headerIcon: { fontSize: 24, color: COLORS.text },
  scrollContent: { padding: 20 },
  illustrationContainer: { alignItems: 'center', marginVertical: 40 },
  crownCircle: { 
    width: 100, height: 100, borderRadius: 50, backgroundColor: '#FFF9E6', 
    justifyContent: 'center', alignItems: 'center', marginBottom: 20,
    borderWidth: 2, borderColor: '#FFD700'
  },
  mainTitle: { fontSize: 26, fontWeight: 'bold', color: COLORS.text, marginBottom: 12 },
  mainSubtitle: { fontSize: 16, color: COLORS.gray, textAlign: 'center', paddingHorizontal: 30, lineHeight: 24 },
  benefitsContainer: { marginTop: 20 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: COLORS.text, marginBottom: 20 },
  benefitItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 25 },
  benefitIconBox: { 
     width: 50, height: 50, borderRadius: 12, backgroundColor: '#F5F5F5', 
     justifyContent: 'center', alignItems: 'center', marginRight: 15 
  },
  benefitTextContent: { flex: 1 },
  benefitTitle: { fontSize: 18, fontWeight: '600', color: COLORS.text, marginBottom: 4 },
  benefitDesc: { fontSize: 14, color: COLORS.gray, lineHeight: 20 },
  infoBox: { marginTop: 20, padding: 15, backgroundColor: '#F9F9F9', borderRadius: 10 },
  infoText: { fontSize: 13, color: COLORS.gray, fontStyle: 'italic' },
  bottomActions: { padding: 20, borderTopWidth: 1, borderTopColor: '#F8F8F8' },
  applyBtn: { 
    backgroundColor: '#051980', height: 60, borderRadius: 30, 
    justifyContent: 'center', alignItems: 'center' 
  },
  applyBtnText: { color: COLORS.white, fontSize: 18, fontWeight: 'bold' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center', padding: 20 },
  confirmBox: { backgroundColor: COLORS.white, borderRadius: 20, padding: 30, width: '100%', alignItems: 'center' },
  confirmTitle: { fontSize: 20, fontWeight: 'bold', color: COLORS.text, textAlign: 'center', marginBottom: 30, lineHeight: 28 },
  confirmBtnRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  cancelBtn: { flex: 1, height: 55, borderRadius: 28, borderWidth: 1, borderColor: '#DDD', justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  cancelBtnText: { fontSize: 16, fontWeight: '600', color: COLORS.text },
  activeBtn: { flex: 1, height: 55, borderRadius: 28, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center', marginLeft: 10 },
  activeBtnText: { fontSize: 16, fontWeight: '600', color: COLORS.white },
  successBox: { backgroundColor: COLORS.white, borderRadius: 25, padding: 40, width: '100%', alignItems: 'center' },
  successIconBox: { width: 150, height: 150, justifyContent: 'center', alignItems: 'center', marginBottom: 25 },
  successIconImage: { width: '100%', height: '100%' },
  successTitle: { fontSize: 24, fontWeight: 'bold', color: COLORS.text, marginBottom: 15 },
  successDesc: { fontSize: 16, color: COLORS.gray, textAlign: 'center', marginBottom: 35, lineHeight: 24 },
  backHomeBtn: { backgroundColor: COLORS.primary, height: 60, width: '100%', borderRadius: 30, justifyContent: 'center', alignItems: 'center' },
  backHomeBtnText: { color: COLORS.white, fontSize: 18, fontWeight: 'bold' }
});
