//dependencies
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

//imports
import {Home, Post} from '../screens';
// import DrawerNavigator from './DrawerNavigator';

const Tab = createBottomTabNavigator();

const tabs = [
  {
    id: 0,
    name: 'User',
    component: Home,
    icon: 'home',
    label: 'Home',
  },
  {
    id: 1,
    name: 'Post',
    component: Post,
    icon: 'plus-square',
    label: 'Post',
  },
];

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#A7A7A7',

        tabBarItemStyle: {
          marginBottom: 3,
        },
        tabBarIconStyle: {
          marginBottom: -10,
        },
      }}>
      {tabs.map(tab => {
        return (
          <Tab.Screen
            key={tab.id}
            name={tab.name}
            component={tab.component}
            options={{
              tabBarIcon: ({focused, color, size}) => (
                <Icon name={tab.icon} size={22} color={color} />
              ),
              tabBarLabel: ({focused, color}) => (
                <Text style={{color: color, fontSize: 10, fontWeight: '400'}}>
                  {tab.label}
                </Text>
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigator;
