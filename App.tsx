import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// Define the MenuItem interface
interface MenuItem {
  id: number;
  dishName: string;
  description: string;
  course: string;
  price: number;
}

const App = () => {
  const [dishName, setDishName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [course, setCourse] = useState<string>('Starters');
  const [price, setPrice] = useState<string>('');  // Price is entered as a string
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);  // To store the list of menu items

  // Function to add a new menu item
  const addMenuItem = () => {
    const newItem: MenuItem = {
      id: Date.now(),  // Unique ID based on timestamp
      dishName,
      description,
      course,
      price: parseFloat(price)  // Convert price to a number
    };

    setMenuItems([...menuItems, newItem]);  // Add the new item to the list
    setDishName('');  // Clear input fields after adding
    setDescription('');
    setPrice('');
  };

  const totalMenuItems = menuItems.length;  // Count the number of items

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chef Christoffel's Menu</Text>
     
      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      {/* Course Picker */}
      <Picker
        selectedValue={course}
        style={styles.picker}
        onValueChange={(itemValue) => setCourse(itemValue)}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>

      {/* Add Menu Item Button */}
      <Button title="Add Menu Item" onPress={addMenuItem} 
      color={"purple"}/>

      {/* Display Total Menu Items */}
      <Text style={styles.totalText}>Total Menu Items: {totalMenuItems}</Text>

      {/* List of Menu Items */}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}  // Use id as the unique key
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.itemText}>{item.dishName}</Text>
            <Text style={styles.itemText}>{item.description}</Text>
            <Text style={styles.itemText}>{item.course}</Text>
            <Text style={styles.itemText}>${item.price.toFixed(2)}</Text>  {/* Show price in two decimals */}
          </View>
        )}
      />
    </View>
  );
};

// Styling for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    marginBottom: 20,
  },
  totalText: {
    marginVertical: 20,
    fontSize: 18,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
  },
});

export default App;

