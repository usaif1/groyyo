import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//imports
import {Home, Post} from '../screens';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="User" component={Home} />
      <Tab.Screen name="Post" component={Post} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
