import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../constants/Theme';
import { useAppContext } from '../context/AppContext';

const FLAGS = { EN: '🇬🇧', PT: '🇵🇹', NG: '🇳🇬', FR: '🇫🇷', ZH: '🇨🇳', JA: '🇯🇵', ID: '🇮🇩' };

const HomeHeader = ({ onMenuPress }) => {
  const navigation = useNavigation();
  const { currency, language } = useAppContext();

  return (
    <View style={styles.container}>
      {/* Left: Menu Icon (Green Lines) */}
      <TouchableOpacity style={styles.iconContainer} onPress={onMenuPress}>
        <View style={styles.menuLineGreen} />
        <View style={[styles.menuLineGreen, { width: 14 }]} />
        <View style={styles.menuLineGreen} />
      </TouchableOpacity>

      {/* Center: Currency Selector */}
      <TouchableOpacity style={styles.centerContainer} onPress={() => navigation.navigate('Currency')}>
        <View style={styles.currencyRow}>
          <Text style={styles.currencyLabel}>Current Currency</Text>
          <Text style={styles.greenChevron}> ⌄</Text>
        </View>
        <Text style={styles.currencyValue}>($) - {currency}</Text>
      </TouchableOpacity>
      
      {/* Right: Language Pill & 3-Dots */}
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.langPill} onPress={() => navigation.navigate('Language')}>
          <Text style={styles.flagIcon}>{FLAGS[language] || '🌐'}</Text>
          <Text style={styles.greenChevronSmall}> ⌄</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.dotsButton}>
          <Text style={styles.dotsIcon}>⋮</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: COLORS.white,
    paddingBottom: 15,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  menuLineGreen: {
    width: 22,
    height: 2.5,
    backgroundColor: COLORS.primary, // Green lines
    marginVertical: 3,
    borderRadius: 1.5,
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, // Let it take available space
  },
  currencyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyLabel: {
    fontSize: 14,
    color: COLORS.text,
  },
  greenChevron: {
    fontSize: 16,
    color: COLORS.primary,
    marginTop: -8, // visually align the chevron
  },
  currencyValue: {
    fontSize: 14,
    color: COLORS.text,
    fontWeight: '700',
    marginTop: 2,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 80, // give enough room for the components
  },
  langPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginRight: 10,
  },
  flagIcon: {
    fontSize: 16,
  },
  greenChevronSmall: {
    fontSize: 12,
    color: COLORS.primary,
    marginLeft: 4,
    marginTop: -4,
  },
  dotsButton: {
    padding: 4,
  },
  dotsIcon: {
    fontSize: 20,
    color: '#666',
    fontWeight: 'bold',
  }
});

export default HomeHeader;
