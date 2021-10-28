import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';

//imports
import {Profile} from '../screens';
import TabNavigator from './TabNavigator';
import StackNavigator from './StackNavigator';
import DrawerHeader from '../components/DrawerHeader';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{header: props => <DrawerHeader {...props} />}}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Prof" component={Profile} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
