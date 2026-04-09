import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../constants/Theme';
import { useAppContext } from '../context/AppContext';

const HomeHeader = ({ onMenuPress }) => {
  const navigation = useNavigation();
  const { currency } = useAppContext();

  return (
    <View style={styles.container}>
      {/* Menu Icon */}
      <TouchableOpacity style={styles.iconContainer} onPress={onMenuPress}>
        <View style={styles.menuLine} />
        <View style={[styles.menuLine, { width: 14 }]} />
        <View style={styles.menuLine} />
      </TouchableOpacity>

      {/* Location / Currency Selector */}
      <TouchableOpacity style={styles.locationContainer} onPress={() => navigation.navigate('Currency')}>
        <Text style={styles.locationLabel}>Location/Currency</Text>
        <View style={styles.locationRow}>
          <Text style={styles.locationValue}>USA, {currency} ($)</Text>
          <Text style={styles.arrowIcon}>▼</Text>
        </View>
      </TouchableOpacity>

      {/* Action Icons */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <Text style={styles.bellIcon}>🔔</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.cartContainer}>
          <Text style={styles.cartIcon}>🛒</Text>
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>2</Text>
          </View>
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
    paddingBottom: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuLine: {
    width: 18,
    height: 2,
    backgroundColor: COLORS.text,
    marginVertical: 2,
    borderRadius: 1,
  },
  locationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationLabel: {
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  locationValue: {
    fontSize: 14,
    color: COLORS.text,
    fontWeight: 'bold',
    marginRight: 4,
  },
  arrowIcon: {
    fontSize: 10,
    color: COLORS.text,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bellIcon: {
    fontSize: 18,
  },
  cartContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  cartIcon: {
    fontSize: 18,
    color: COLORS.white,
  },
  cartBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: COLORS.error,
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  cartBadgeText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default HomeHeader;
