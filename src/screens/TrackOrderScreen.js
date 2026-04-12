import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/Theme';

const TIMELINE = [
  { id: '1', title: 'Packages are sent to the sorting warehouse', time: '09:00 AM, 20 July 2022', completed: true, current: true },
  { id: '2', title: 'The package is handed over to the courier', time: '09:00 AM, 20 July 2022', completed: false },
  { id: '3', title: 'Order is being processed', time: '09:00 AM, 20 July 2022', completed: false },
  { id: '4', title: 'Payment has been verified', time: '09:00 AM, 20 July 2022', completed: false },
];

export default function TrackOrderScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.headerIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Track Order</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.statusIconsRow}>
         <View style={styles.iconCol}>
            <View style={[styles.statusIconBox, styles.statusIconBoxActive]}>
              <Text style={{fontSize: 24}}>📦</Text>
            </View>
            <View style={styles.checkSmall}><Text style={styles.checkTxt}>✓</Text></View>
         </View>
         <View style={styles.dashedLine} />
         <View style={styles.iconCol}>
            <View style={[styles.statusIconBox, styles.statusIconBoxActive]}>
              <Text style={{fontSize: 24}}>🚚</Text>
            </View>
            <View style={styles.checkSmall}><Text style={styles.checkTxt}>✓</Text></View>
         </View>
         <View style={styles.dashedLineGrey} />
         <View style={styles.iconCol}>
            <View style={styles.statusIconBox}>
              <Text style={{fontSize: 24}}>🔄</Text>
            </View>
            <View style={styles.checkSmallGrey}><Text style={styles.checkTxt}>✓</Text></View>
         </View>
         <View style={styles.dashedLineGrey} />
         <View style={styles.iconCol}>
            <View style={styles.statusIconBox}>
              <Text style={{fontSize: 24}}>✅</Text>
            </View>
            <View style={styles.checkSmallGrey}><Text style={styles.checkTxt}>✓</Text></View>
         </View>
      </View>

      <Text style={styles.packagesTitle}>Packages In Delivery</Text>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.timelineCard}>
          <View style={styles.timelineCardHeader}>
            <Text style={styles.cardHeaderTitle}>Track Order</Text>
            <Text style={styles.cardHeaderId}>Order id #2509226632</Text>
          </View>

          {TIMELINE.map((item, idx) => (
            <View key={item.id} style={styles.timelineItem}>
              <View style={styles.timelineLeft}>
                <View style={[styles.dot, item.current && styles.dotActive]} />
                {idx !== TIMELINE.length - 1 && <View style={[styles.line, item.completed && styles.lineActive]} />}
              </View>
              <View style={styles.timelineContent}>
                <Text style={[styles.stepTitle, !item.completed && !item.current && {color: COLORS.gray}]}>{item.title}</Text>
                <View style={styles.timeRow}>
                  <Text style={styles.timeIcon}>🕒</Text>
                  <Text style={styles.timeText}>{item.time}</Text>
                </View>
              </View>
            </View>
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
  statusIconsRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 25 },
  iconCol: { alignItems: 'center' },
  statusIconBox: { width: 55, height: 55, borderRadius: 15, backgroundColor: COLORS.white, borderWidth: 1, borderColor: '#EEE', justifyContent: 'center', alignItems: 'center' },
  statusIconBoxActive: { borderColor: COLORS.primary },
  checkSmall: { width: 18, height: 18, borderRadius: 9, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center', marginTop: -10, borderWidth: 2, borderColor: COLORS.white },
  checkSmallGrey: { width: 18, height: 18, borderRadius: 9, backgroundColor: '#BBB', justifyContent: 'center', alignItems: 'center', marginTop: -10, borderWidth: 2, borderColor: COLORS.white },
  checkTxt: { color: COLORS.white, fontSize: 8, fontWeight: 'bold' },
  dashedLine: { width: 40, height: 1, borderTopWidth: 1, borderColor: COLORS.primary, borderStyle: 'dashed', marginHorizontal: 5, marginTop: -25 },
  dashedLineGrey: { width: 40, height: 1, borderTopWidth: 1, borderColor: '#DDD', borderStyle: 'dashed', marginHorizontal: 5, marginTop: -25 },
  packagesTitle: { fontSize: 18, fontWeight: 'bold', color: COLORS.text, textAlign: 'center', marginTop: 10, marginBottom: 20 },
  scrollContent: { padding: 20 },
  timelineCard: { 
    backgroundColor: COLORS.white, borderRadius: 20, padding: 25,
    borderWidth: 1, borderColor: '#F5F5F5',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 10, elevation: 3
  },
  timelineCardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30, borderBottomWidth: 1, borderBottomColor: '#F8F8F8', paddingBottom: 15 },
  cardHeaderTitle: { fontSize: 18, fontWeight: 'bold', color: COLORS.text },
  cardHeaderId: { fontSize: 13, color: COLORS.gray },
  timelineItem: { flexDirection: 'row' },
  timelineLeft: { alignItems: 'center', marginRight: 20 },
  dot: { width: 12, height: 12, borderRadius: 6, backgroundColor: '#EEE' },
  dotActive: { backgroundColor: '#051980' },
  line: { width: 2, flex: 1, backgroundColor: '#EEE', marginVertical: 4 },
  lineActive: { backgroundColor: '#051980' },
  timelineContent: { flex: 1, paddingBottom: 35 },
  stepTitle: { fontSize: 16, fontWeight: 'bold', color: COLORS.text, marginBottom: 10 },
  timeRow: { flexDirection: 'row', alignItems: 'center' },
  timeIcon: { fontSize: 14, marginRight: 8, color: COLORS.gray },
  timeText: { fontSize: 12, color: COLORS.gray },
});
