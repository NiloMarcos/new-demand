import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';

import { Calendar } from '../screens/Calendar';

import { Chat } from '../screens/Chat';

import { Profile } from '../screens/Profile';

import { Entypo } from '@expo/vector-icons/';

// import { StackNavigator } from './stack.router';

export function TabNavigator() {
  const Tab = createBottomTabNavigator();
  
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: '#1BD15D',
        tabBarInactiveTintColor: '#9B9B9B',
        tabBarShowLabel: false,
        headerShown: false
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) => 
            <Entypo 
              name="grid" 
              color={color} 
              size={size} 
            />
          ) 
        }}
      />

      <Tab.Screen 
        name='Calendar'
        component={Calendar}
        options={{
          tabBarIcon: (({ size, color }) => 
            <Entypo 
              name="calendar" 
              color={color} 
              size={size} 
            />
          ) 
        }}
      />    

      <Tab.Screen 
        name='Chat'
        component={Chat}
        options={{
          tabBarIcon: (({ size, color }) => 
            <Entypo 
              name="chat" 
              color={color} 
              size={size} 
            />
          ) 
        }}
      />

      <Tab.Screen 
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: (({ size, color }) => 
            <Entypo 
              name="controller-record" 
              color={color} 
              size={size} 
            />
          ) 
        }}
      />
    </Tab.Navigator>
  );
}