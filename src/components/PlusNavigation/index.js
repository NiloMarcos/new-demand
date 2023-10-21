import React from 'react'

import { View, Text, StyleSheet } from 'react-native';

import { Feather } from '@expo/vector-icons';

export function PlusNavigation() {
  return (
    <View style={styles.container}>
      <Feather name='plus' size={25} color="#FFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#088435',
    height: 56,
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderRadius: 18 
  }
});