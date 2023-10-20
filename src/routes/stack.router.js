import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Details } from '../screens/Details';

import { TabNavigator } from './tab.router';

export function StackNavigator() {
  const Stack = createNativeStackNavigator();
  
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>    
  );
}

