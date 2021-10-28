//dependencies
import React from 'react';
import {StatusBar} from 'react-native';

import Navigator from './src/Navigator/Navigator';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Navigator />
    </>
  );
};

export default App;
