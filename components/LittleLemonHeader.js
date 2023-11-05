import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    marginTop: 20,
    marginLeft: 5,
    padding: 10,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});
