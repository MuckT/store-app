import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MyNavigation from '../Navigator/Navigator';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const CategoriesStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
