import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { COLORS, SIZES } from '../constants/Theme';
import PrimaryButton from '../components/PrimaryButton';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Home!</Text>
        <Text style={styles.subtitle}>You have successfully logged in.</Text>
        
        <PrimaryButton 
          title="Log Out" 
          onPress={() => navigation.replace('SignIn')} 
          style={styles.logoutButton} 
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.white },
  container: { flex: 1, paddingHorizontal: 24, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: SIZES.h1, fontWeight: 'bold', color: COLORS.text, marginBottom: 10 },
  subtitle: { fontSize: SIZES.body, color: COLORS.gray, marginBottom: 40 },
  logoutButton: { width: '100%', marginTop: 20 },
});
