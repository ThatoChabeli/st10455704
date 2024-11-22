import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Christoffel's Menu!</Text>
      <Button title="Add Dish" onPress={() => navigation.navigate('AddDish')} />
      <Button title="View Filter Options" onPress={() => navigation.navigate('Filter')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
});

export default HomeScreen;
