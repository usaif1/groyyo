//dependencies
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//imports
import {Home, Post} from '../screens';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="User" component={Home} />
      <Tab.Screen name="Post" component={Post} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
