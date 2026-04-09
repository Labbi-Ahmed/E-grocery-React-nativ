import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/Theme';

const EmptyState = ({ title = "Not Found", message = "Sorry, the keyword you entered cannot be found. Please check again or search with another keyword." }) => {
  return (
    <View style={styles.container}>
      <View style={styles.illustrationContainer}>
        <Text style={styles.illustration}>📦 🔍</Text>
        <View style={styles.xMark}>
          <Text style={styles.xMarkText}>✕</Text>
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    marginTop: 50,
  },
  illustrationContainer: {
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  illustration: {
    fontSize: 80,
  },
  xMark: {
    position: 'absolute',
    top: -10,
    right: 15,
    backgroundColor: '#D1E6F9',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  xMarkText: {
    color: '#1565C0',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    color: COLORS.gray,
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default EmptyState;
