import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/Theme';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    // Navigate to SignIn after 2.5 seconds
    const timer = setTimeout(() => {
      navigation.replace('SignIn');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Placeholder for Map Icon */}
        <Ionicons name="earth" size={80} color={COLORS.gray} />
        <View style={styles.textContainer}>
          <Text style={styles.textNavy}>AfricanFood </Text>
          <Text style={styles.textGreen}>Market</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textNavy: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  textGreen: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});
