//dependencies
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//imports
import {Profile} from '../screens';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
