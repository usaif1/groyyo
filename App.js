//dependencies
import React from 'react';
import {StatusBar} from 'react-native';

import Navigator from './src/Navigator/Navigator';
import {AppProvider} from './src/context/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Navigator />
    </AppProvider>
  );
};

export default App;
