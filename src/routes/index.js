import React from 'react';

import { TabNavigator } from './tab.router';

import { StackNavigator } from './stack.router';
 
import { NavigationContainer } from '@react-navigation/native';

export function Routes() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}