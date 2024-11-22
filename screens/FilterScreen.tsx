import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const FilterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Filter Screen - Coming Soon!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, fontWeight: 'bold' },
});

export default FilterScreen;

