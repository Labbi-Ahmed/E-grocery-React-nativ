import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants/Theme';
import PrimaryButton from '../components/PrimaryButton';

export default function OtpVerificationScreen({ navigation, route }) {
  const email = route.params?.email || 'test@example.com';
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={COLORS.text} />
        </TouchableOpacity>
        
        <View style={styles.header}>
          <Text style={styles.title}>Security</Text>
          <Text style={styles.subtitle}>Verification</Text>
          <Text style={styles.instruction}>We've sent you the verification code on {email}</Text>
        </View>

        <View style={styles.otpContainer}>
          {[1,2,3,4].map((i) => (
            <TextInput key={i} style={styles.otpInput} keyboardType="number-pad" maxLength={1} />
          ))}
        </View>

        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>Get Code in 0:57 </Text>
          <TouchableOpacity>
            <Text style={styles.resendText}>Resend</Text>
          </TouchableOpacity>
        </View>

        <PrimaryButton 
          title="Continue" 
          onPress={() => navigation.navigate('ResetPassword')} 
          style={styles.continueButton} 
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.white },
  container: { flex: 1, paddingHorizontal: 24, paddingTop: 10 },
  backButton: { marginBottom: 20 },
  header: { alignItems: 'center', marginBottom: 40 },
  title: { fontSize: SIZES.h1, fontWeight: 'bold', color: COLORS.text, marginBottom: 5 },
  subtitle: { fontSize: SIZES.h2, fontWeight: 'bold', color: COLORS.secondary, marginBottom: 10 },
  instruction: { fontSize: SIZES.body, color: COLORS.gray, textAlign: 'center', lineHeight: 22 },
  otpContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  otpInput: { width: 60, height: 60, backgroundColor: COLORS.lightGray, borderRadius: SIZES.radius, textAlign: 'center', fontSize: SIZES.h2, fontWeight: 'bold' },
  timerContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 40 },
  timerText: { color: COLORS.gray, fontSize: SIZES.body },
  resendText: { color: COLORS.primary, fontSize: SIZES.body, fontWeight: 'bold' },
  continueButton: { marginTop: 20 },
});
