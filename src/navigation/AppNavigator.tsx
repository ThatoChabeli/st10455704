import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import AddDishScreen from '../../screens/AddDishScreen';
import FinalScreen from '../../screens/FinalScreen';
import FilterScreen from '../../screens/FilterScreen';

type StackParamList = {
  Home: undefined;
  AddDish: undefined;
  Final: undefined;
  Filter: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddDish" component={AddDishScreen} />
      <Stack.Screen name="Final" component={FinalScreen} />
      <Stack.Screen name="Filter" component={FilterScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
