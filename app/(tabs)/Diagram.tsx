import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Diagram() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Diagram page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F7D9',
  },
  text: {
    fontSize: 24,
    color: 'black',
  },
});