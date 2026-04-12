import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/Theme';

const SECTIONS = [
  {
    title: 'General',
    items: [
      { id: 'account', title: 'Account', icon: '👤' },
      { id: 'address', title: 'Address List', icon: '📍' },
      { id: 'payment', title: 'Payment Method', icon: '💳' },
    ]
  },
  {
    title: 'Setting',
    items: [
      { id: 'notifications', title: 'Notifications', icon: '🔔' },
      { id: 'password', title: 'Change Password', icon: '🔒' },
      { id: 'language', title: 'Language', icon: '🌐' },
    ]
  },
  {
    title: 'Others',
    items: [
      { id: 'returns', title: 'Returns & Refund', icon: '❓' },
      { id: 'privacy', title: 'Privacy & Policy', icon: '🔒' },
    ]
  }
];

export default function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.headerIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {SECTIONS.map((section) => (
          <View key={section.title} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.items.map((item) => (
              <TouchableOpacity 
                key={item.id} 
                style={styles.menuItem}
                onPress={() => {
                   if(item.id === 'notifications') navigation.navigate('Notifications');
                   if(item.id === 'language') navigation.navigate('Language');
                }}
              >
                <View style={styles.menuLeft}>
                  <View style={styles.iconBox}>
                    <Text style={{fontSize: 20}}>{item.icon}</Text>
                  </View>
                  <Text style={styles.menuItemTitle}>{item.title}</Text>
                </View>
                <Text style={styles.arrowRightGrey}>›</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
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
  scrollContent: { padding: 20 },
  section: { marginBottom: 30 },
  sectionTitle: { fontSize: 16, color: COLORS.gray, marginBottom: 15, fontWeight: '500' },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F8F8F8',
  },
  menuLeft: { flexDirection: 'row', alignItems: 'center' },
  iconBox: { width: 40, alignItems: 'center', justifyContent: 'center', marginRight: 15 },
  menuItemTitle: { fontSize: 18, fontWeight: '500', color: COLORS.text },
  arrowRightGrey: { color: '#BBB', fontSize: 24 },
});
