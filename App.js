import { GestureHandlerRootView } from 'react-native-gesture-handler';

import React from 'react';

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import { useFonts } from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';

// import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './src/routes'

import { ThemeProvider } from 'styled-components'

import theme from './src/global/styles/theme';

export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if(!fontsLoaded) {
    return null;
  }
  
  SplashScreen.hideAsync();
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
    
  )
}
