import React from 'react';

import {
  View,
  Text,
  Platform,
  StyleSheet
} from 'react-native';

export function Home() {
  return (
    <View>
      <Text style={styles.title}>Screen Home !!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: Platform.OS === 'ios' ? 50 : 0
  }
})