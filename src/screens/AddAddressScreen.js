import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/Theme';

export default function AddAddressScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Address</Text>
        <View style={{width: 24}} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput placeholder="Type your full name" style={styles.input} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Full Address</Text>
          <TextInput placeholder="Type your full address" style={styles.input} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Country</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>Select your country</Text>
            <Text style={{color: '#999'}}>⌄</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>State</Text>
          <TextInput placeholder="Type your state" style={styles.input} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput placeholder="XXXX XXXX XXXX" style={styles.input} keyboardType="phone-pad" />
          <TouchableOpacity style={{marginTop: 10}}>
            <Text style={styles.addAnotherText}>+ Add Another Number</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Zip Code</Text>
          <TextInput placeholder="Type your Zip code" style={styles.input} keyboardType="numeric" />
        </View>

        <TouchableOpacity 
          style={styles.saveBtn} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.saveBtnText}>Save</Text>
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
  inputGroup: { marginBottom: 20 },
  label: { fontSize: 16, fontWeight: 'bold', color: COLORS.text, marginBottom: 10 },
  input: {
    height: 55,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 30,
    paddingHorizontal: 20,
    fontSize: 14,
    backgroundColor: '#fdfdfd',
    color: COLORS.text,
  },
  dropdown: {
    height: 55,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fdfdfd',
  },
  dropdownText: { color: '#999', fontSize: 14 },
  addAnotherText: { color: COLORS.primary, fontWeight: '600', fontSize: 14 },
  saveBtn: {
    backgroundColor: COLORS.primary, height: 60, borderRadius: 30, 
    justifyContent: 'center', alignItems: 'center',
    marginTop: 20, marginBottom: 40,
    shadowColor: COLORS.primary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 5
  },
  saveBtnText: { color: COLORS.white, fontSize: 18, fontWeight: 'bold' }
});
