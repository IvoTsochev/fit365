import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function  Home({ navigation }) {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Welcome to the Home Page!</Text>
    <Button title="Account page" onPress={() => navigation.navigate('Account')} />
    {/* Rest of your home page content */}
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
