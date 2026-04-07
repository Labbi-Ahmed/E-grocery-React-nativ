import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { COLORS, SIZES } from '../constants/Theme';

const HeroBanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.content}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>✔ 100% Organic</Text>
          </View>
          <Text style={styles.title}>Fruit &{'\n'}Vegetable</Text>
          <Text style={styles.subtitle}>Starting at $3.99</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Shop Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imageText}>[Image]</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  innerContainer: {
    backgroundColor: '#E8F5E9', // Light green background from design
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    height: 180,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  badge: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  badgeText: {
    color: COLORS.primary,
    fontSize: 10,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
    lineHeight: 28,
  },
  subtitle: {
    fontSize: SIZES.small,
    color: COLORS.gray,
    marginTop: 5,
    marginBottom: 15,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: SIZES.buttonRadius,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 12,
  },
  imagePlaceholder: {
    flex: 0.4,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,163,46, 0.1)',
    borderRadius: 10,
    marginLeft: 10,
  },
  imageText: {
    color: COLORS.primary,
    fontSize: SIZES.small,
  },
});

export default HeroBanner;
