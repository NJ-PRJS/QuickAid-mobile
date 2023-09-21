// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import OnboardingScreen from '../screens/onBoardingScreens';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown:false,
      }}
      >
         <Stack.Screen name="onboarding" component={OnboardingScreen} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
  
  );
}

export default AppNavigator;