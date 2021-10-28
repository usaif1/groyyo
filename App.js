import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Navigator from './src/Navigator/Navigator';

const App = () => {
  return <Navigator />;
};

export default App;
