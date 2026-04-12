import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, SIZES } from '../constants/Theme';
import CustomInput from '../components/CustomInput';
import PrimaryButton from '../components/PrimaryButton';
import SocialButton from '../components/SocialButton';
import { useAppContext } from '../context/AppContext';

export default function SignInScreen({ navigation }) {
  const { setUserType } = useAppContext();
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password');
  const [selectedType, setSelectedType] = useState('Regular');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.subtitle}>Give credentials to sign in your account</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.typeSelector}>
             <TouchableOpacity 
               style={[styles.typeBtn, selectedType === 'Regular' && styles.typeBtnActive]}
               onPress={() => setSelectedType('Regular')}
             >
                <Text style={[styles.typeBtnText, selectedType === 'Regular' && styles.typeBtnTextActive]}>Regular</Text>
             </TouchableOpacity>
             <TouchableOpacity 
               style={[styles.typeBtn, selectedType === 'Wholesale' && styles.typeBtnActive]}
               onPress={() => setSelectedType('Wholesale')}
             >
                <Text style={[styles.typeBtnText, selectedType === 'Wholesale' && styles.typeBtnTextActive]}>Wholesale</Text>
             </TouchableOpacity>
          </View>

          <CustomInput 
            placeholder="Type your email" 
            icon="mail-outline" 
            value={email} 
            onChangeText={setEmail} 
          />
          <CustomInput 
            placeholder="Type your password" 
            icon="lock-closed-outline" 
            isPassword 
            value={password} 
            onChangeText={setPassword} 
          />
          
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <PrimaryButton 
            title="Sign In" 
            onPress={() => {
              if (email.toLowerCase().trim() === 'test@example.com' && password === 'password') {
                setUserType(selectedType);
                navigation.replace('Home');
              } else {
                alert('Invalid credentials. Please use:\nEmail: test@example.com\nPassword: password');
              }
            }} 
            style={styles.signInButton} 
          />
        </View>

        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or continue with</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.socialContainer}>
          <SocialButton 
            title="Continue with Google" 
            iconName="logo-google" 
            iconColor="#DB4437" 
            onPress={() => {}} 
          />
          <SocialButton 
            title="Continue with Facebook" 
            iconName="logo-facebook" 
            iconColor="#4267B2" 
            onPress={() => {}} 
          />
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.footerLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: SIZES.h1,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: SIZES.body,
    color: COLORS.gray,
  },
  formContainer: {
    marginBottom: 30,
  },
  typeSelector: {
    flexDirection: 'row',
    marginBottom: 25,
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    padding: 5,
  },
  typeBtn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 12,
  },
  typeBtnActive: {
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  typeBtnText: {
    fontSize: 15,
    color: COLORS.gray,
    fontWeight: '500',
  },
  typeBtnTextActive: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 10,
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: COLORS.primary,
    fontSize: SIZES.body,
    fontWeight: '600',
  },
  signInButton: {
    marginTop: 10,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.lightGray,
  },
  dividerText: {
    color: COLORS.gray,
    paddingHorizontal: 10,
    fontSize: SIZES.small,
  },
  socialContainer: {
    marginBottom: 30,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
  },
  footerText: {
    color: COLORS.gray,
    fontSize: SIZES.body,
  },
  footerLink: {
    color: COLORS.primary,
    fontSize: SIZES.body,
    fontWeight: 'bold',
  },
});
