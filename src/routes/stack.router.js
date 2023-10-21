import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Details } from '../screens/Details';

import { TabNavigator } from './tab.router';

import { SignIn } from '../screens/SignIn';

export function StackNavigator() {
  const Stack = createNativeStackNavigator();
  
  return (
    <Stack.Navigator
      initialRouteName='SignIn'
    >
      <Stack.Screen 
        name='Tab'
        component={TabNavigator}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen 
        name='Details'
        component={Details}
        options={{
          headerShown: false
        }}
      />
      
      <Stack.Screen 
        name='SignIn'
        component={SignIn}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>    
  );
}

