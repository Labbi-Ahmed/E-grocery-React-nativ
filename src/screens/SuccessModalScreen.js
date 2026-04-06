import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants/Theme';
import PrimaryButton from '../components/PrimaryButton';

export default function SuccessModalScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SignIn');
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Ionicons name="checkmark-circle" size={100} color={COLORS.primary} />
        </View>
        <Text style={styles.title}>Password Updated!</Text>
        <Text style={styles.subtitle}>Your password has been set up successfully.</Text>
        <Text style={styles.timerText}>Redirecting sign in page in 4 sec</Text>
        
        <PrimaryButton 
          title="Sign In" 
          onPress={() => navigation.navigate('SignIn')} 
          style={styles.signInButton} 
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.background },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 24 },
  iconContainer: { marginBottom: 30 },
  title: { fontSize: SIZES.h1, fontWeight: 'bold', color: COLORS.text, marginBottom: 15 },
  subtitle: { fontSize: SIZES.body, color: COLORS.gray, textAlign: 'center', marginBottom: 30, lineHeight: 22 },
  timerText: { fontSize: SIZES.body, color: COLORS.secondary, marginBottom: 40 },
  signInButton: { marginTop: 10, width: '100%' },
});
