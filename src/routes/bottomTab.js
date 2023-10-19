import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          headerShown: false
        }}
      />

      
    </Tab.Navigator>
  );
}