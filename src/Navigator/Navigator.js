import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

//imports
import {Home, Post} from '../screens';
import DrawerNavigator from './DrawerNavigator';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Post" component={Post} />
    </Drawer.Navigator>
  );
}

const Navigator = () => {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Post" component={Post} />
        <Tab.Screen name="Drawer" component={MyDrawer} />
      </Tab.Navigator> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
