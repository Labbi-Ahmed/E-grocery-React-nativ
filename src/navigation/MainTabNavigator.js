import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants/Theme';
import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProductsScreen from '../screens/ProductsScreen';
import CurrencyScreen from '../screens/CurrencyScreen';
import LanguageScreen from '../screens/LanguageScreen';
import BestSellingScreen from '../screens/BestSellingScreen';
import SearchScreen from '../screens/SearchScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Dummy placeholders
const PlaceholderScreen = ({ route }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.white }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.text }}>{route.name} Screen</Text>
  </View>
);

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="Products" component={ProductsScreen} />
    <Stack.Screen name="Currency" component={CurrencyScreen} />
    <Stack.Screen name="Language" component={LanguageScreen} />
    <Stack.Screen name="BestSelling" component={BestSellingScreen} />
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
  </Stack.Navigator>
);

const CategoryStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
    <Stack.Screen name="Products" component={ProductsScreen} />
    <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}
  >
    <View style={{
      width: 65,
      height: 65,
      borderRadius: 35,
      backgroundColor: '#053C20', // Dark green from mockup
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 5,
      elevation: 5,
    }}>
      {children}
    </View>
  </TouchableOpacity>
);

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: {
          height: 80,
          backgroundColor: '#EFFFEC', // Light green tint from mockup
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#000',
          shadowOpacity: 0.05,
          shadowOffset: { width: 0, height: -2 },
          shadowRadius: 10,
        }
      }}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeStack} 
        options={{ 
          tabBarIcon: ({color}) => <Text style={{fontSize: 24, color: COLORS.primary}}>⌂</Text> // Home filled
        }}
      />
      <Tab.Screen 
        name="Wishlist" 
        component={PlaceholderScreen} 
        options={{ 
          tabBarIcon: ({color}) => <Text style={{fontSize: 24, color: COLORS.gray}}>♡</Text> 
        }}
      />
      
      {/* Floating Action Button in Center */}
      <Tab.Screen 
        name="Categories" 
        component={CategoryStack} 
        options={{ 
          tabBarIcon: () => (
            <View style={{flexWrap: 'wrap', width: 20, height: 20, flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between'}}>
              <View style={{width: 8, height: 8, borderWidth: 1.5, borderColor: 'white', borderRadius: 2}}/>
              <View style={{width: 8, height: 8, borderWidth: 1.5, borderColor: 'white', borderRadius: 2}}/>
              <View style={{width: 8, height: 8, borderWidth: 1.5, borderColor: 'white', borderRadius: 2}}/>
              <View style={{width: 8, height: 8, borderWidth: 1.5, borderColor: 'white', borderRadius: 2}}/>
            </View>
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />
        }}
      />

      <Tab.Screen 
        name="Cart" 
        component={PlaceholderScreen} 
        options={{ 
          tabBarIcon: ({color}) => (
            <View>
              <Text style={{fontSize: 24, color: COLORS.gray}}>🛒</Text>
              <View style={{
                position: 'absolute', right: -5, top: -5, 
                backgroundColor: '#FFA500', borderRadius: 10, 
                width: 16, height: 16, justifyContent: 'center', alignItems: 'center'
              }}>
                <Text style={{color: 'white', fontSize: 9, fontWeight: 'bold'}}>3</Text>
              </View>
            </View>
          )
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={PlaceholderScreen} 
        options={{ 
          tabBarIcon: ({color}) => <Text style={{fontSize: 24, color: COLORS.gray}}>👤</Text> 
        }}
      />
    </Tab.Navigator>
  );
}
