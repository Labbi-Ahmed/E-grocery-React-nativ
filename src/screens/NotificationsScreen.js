import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/Theme';

export default function NotificationsScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.headerIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Push Notification</Text>
            <Text style={styles.description}>
              Get all type notification of product promotion, status, delivery, discount etc.
            </Text>
          </View>
          <Switch
            trackColor={{ false: "#767577", true: COLORS.primary }}
            thumbColor={COLORS.white}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
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
  content: { padding: 20 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  textContainer: { flex: 1, paddingRight: 20 },
  title: { fontSize: 18, fontWeight: 'bold', color: COLORS.text, marginBottom: 8 },
  description: { fontSize: 13, color: COLORS.gray, lineHeight: 18 },
});
