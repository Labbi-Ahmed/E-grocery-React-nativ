import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, SIZES } from '../constants/Theme';
import CustomInput from '../components/CustomInput';
import PrimaryButton from '../components/PrimaryButton';

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subtitle}>Create an account to continue</Text>
        </View>

        <View style={styles.formContainer}>
          <CustomInput placeholder="Full Name" icon="person-outline" value={name} onChangeText={setName} />
          <CustomInput placeholder="Email" icon="mail-outline" value={email} onChangeText={setEmail} />
          <CustomInput placeholder="Password" icon="lock-closed-outline" isPassword value={password} onChangeText={setPassword} />
          <CustomInput placeholder="Confirm Password" icon="lock-closed-outline" isPassword value={confirmPassword} onChangeText={setConfirmPassword} />
          
          <PrimaryButton title="Sign Up" onPress={() => alert('Sign Up Pressed')} style={styles.signUpButton} />
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.footerLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.white },
  container: { flexGrow: 1, paddingHorizontal: 24, paddingTop: 40, paddingBottom: 20 },
  header: { alignItems: 'center', marginBottom: 40 },
  title: { fontSize: SIZES.h1, fontWeight: 'bold', color: COLORS.text, marginBottom: 10 },
  subtitle: { fontSize: SIZES.body, color: COLORS.gray },
  formContainer: { marginBottom: 30 },
  signUpButton: { marginTop: 20 },
  footerContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 'auto' },
  footerText: { color: COLORS.gray, fontSize: SIZES.body },
  footerLink: { color: COLORS.primary, fontSize: SIZES.body, fontWeight: 'bold' },
});
