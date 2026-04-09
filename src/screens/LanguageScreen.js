import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, SectionList } from 'react-native';
import { COLORS, SIZES } from '../constants/Theme';

const LANGUAGE_SECTIONS = [
  {
    title: 'Suggested',
    data: [
      { id: '1', code: 'EN', name: 'English (UK)', flag: '🇬🇧' },
      { id: '2', code: 'PT', name: 'Portuguese', flag: '🇵🇹' },
    ],
  },
  {
    title: 'Language',
    data: [
      { id: '3', code: 'NG', name: 'Nigerian', flag: '🇳🇬' },
      { id: '4', code: 'FR', name: 'French', flag: '🇫🇷' },
      { id: '5', code: 'ZH', name: 'Chinese', flag: '🇨🇳' },
      { id: '6', code: 'JA', name: 'Japanese', flag: '🇯🇵' },
      { id: '7', code: 'ID', name: 'Indonesian', flag: '🇮🇩' },
    ],
  },
];

export default function LanguageScreen({ navigation }) {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const renderItem = ({ item }) => {
    const isSelected = selectedLanguage === item.code;
    return (
      <TouchableOpacity 
        style={styles.row} 
        onPress={() => setSelectedLanguage(item.code)}
      >
        <View style={styles.leftContent}>
          <Text style={styles.flag}>{item.flag}</Text>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <View style={styles.radioContainer}>
          {isSelected ? (
            <View style={styles.radioSelected}>
              <View style={styles.radioInner} />
            </View>
          ) : (
            <View style={styles.radioUnselected} />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionTitle}>{title}</Text>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
          <Text style={styles.closeIcon}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Language</Text>
        <View style={{ width: 24 }} /> {/* Balance the header */}
      </View>

      <SectionList
        sections={LANGUAGE_SECTIONS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        SectionSeparatorComponent={() => <View style={styles.sectionSeparator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  closeButton: {
    padding: 5,
  },
  closeIcon: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
  },
  headerTitle: {
    fontSize: SIZES.h3,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 20,
    marginBottom: 15,
  },
  sectionSeparator: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginTop: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    fontSize: 22,
    marginRight: 15,
  },
  name: {
    fontSize: 15,
    color: COLORS.text,
  },
  radioContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioUnselected: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#D1D1D1',
  },
  radioSelected: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.primary,
  },
});
