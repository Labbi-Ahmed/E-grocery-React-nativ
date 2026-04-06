import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants/Theme';
import CustomInput from '../components/CustomInput';
import PrimaryButton from '../components/PrimaryButton';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={COLORS.text} />
        </TouchableOpacity>
        
        <View style={styles.header}>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subtitle}>Please enter your email address to request a password reset</Text>
        </View>

        <View style={styles.formContainer}>
          <CustomInput placeholder="Type your email" icon="mail-outline" value={email} onChangeText={setEmail} />
          
          <PrimaryButton 
            title="Continue" 
            onPress={() => navigation.navigate('OtpVerification', { email })} 
            style={styles.continueButton} 
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.white },
  container: { flex: 1, paddingHorizontal: 24, paddingTop: 10 },
  backButton: { marginBottom: 20 },
  header: { marginBottom: 40 },
  title: { fontSize: SIZES.h1, fontWeight: 'bold', color: COLORS.text, marginBottom: 10 },
  subtitle: { fontSize: SIZES.body, color: COLORS.gray, lineHeight: 22 },
  formContainer: { marginBottom: 30 },
  continueButton: { marginTop: 20 },
});
