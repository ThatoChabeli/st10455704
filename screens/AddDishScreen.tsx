import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, FlatList } from 'react-native';

const AddDishScreen = () => {
  const [dishes, setDishes] = useState<any[]>([]);
  const [dishName, setDishName] = useState('');

  const addDish = () => {
    if (dishName) {
      setDishes([...dishes, { id: Date.now().toString(), name: dishName }]);
      setDishName('');
    }
  };

  const removeDish = (id: string) => {
    setDishes(dishes.filter(dish => dish.id !== id));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />
      <Button title="Add Dish" onPress={addDish} />
      <FlatList
        data={dishes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.dishContainer}>
            <Text>{item.name}</Text>
            <Button title="Remove" onPress={() => removeDish(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
  dishContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
});

export default AddDishScreen;


