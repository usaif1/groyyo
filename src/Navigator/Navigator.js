//dependencies
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

//imports
import DrawerNavigator from './DrawerNavigator';

const Navigator = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
