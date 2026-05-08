import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from './src/screens/DashboardScreen';
import MenuScreen from './src/screens/MenuScreen';
import MissionVisionScreen from './src/screens/MissionVisionScreen';
import AboutScreen from './src/screens/AboutScreen';
import CaretakerScreen from './src/screens/CaretakerScreen';
import FoundationScreen from './src/screens/FoundationScreen';

export type RootStackParamList = {
  Dashboard: undefined;
  Menu: undefined;
  MissionVision: undefined;
  About: undefined;
  Caretaker: undefined;
  Foundation: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Dashboard"
          screenOptions={{ headerShown: false, animation: 'fade' }}
        >
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen
            name="MissionVision"
            component={MissionVisionScreen}
          />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Caretaker" component={CaretakerScreen} />
          <Stack.Screen name="Foundation" component={FoundationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
