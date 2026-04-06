import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants/Theme';
import CustomInput from '../components/CustomInput';
import PrimaryButton from '../components/PrimaryButton';

export default function ResetPasswordScreen({ navigation }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={COLORS.text} />
        </TouchableOpacity>
        
        <View style={styles.header}>
          <Text style={styles.title}>Password Reset</Text>
          <Text style={styles.subtitle}>New Password</Text>
          <Text style={styles.instruction}>Your password must be different from previous password.</Text>
        </View>

        <View style={styles.formContainer}>
          <CustomInput placeholder="Password" icon="lock-closed-outline" isPassword value={password} onChangeText={setPassword} />
          <CustomInput placeholder="Confirm Password" icon="lock-closed-outline" isPassword value={confirmPassword} onChangeText={setConfirmPassword} />
          
          <PrimaryButton 
            title="Continue" 
            onPress={() => navigation.navigate('SuccessModal')} 
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
  title: { fontSize: SIZES.h1, fontWeight: 'bold', color: COLORS.text, marginBottom: 5 },
  subtitle: { fontSize: SIZES.h2, fontWeight: 'bold', color: COLORS.secondary, marginBottom: 10 },
  instruction: { fontSize: SIZES.body, color: COLORS.gray, lineHeight: 22 },
  formContainer: { marginBottom: 30 },
  continueButton: { marginTop: 20 },
});
