import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/home.controller';
import ListNotification from '../screens/ListNotication/listNotification.controller';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ListNotification" component={ListNotification} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
