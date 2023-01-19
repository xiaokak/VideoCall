/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';

import Navigation from './src/navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Navigation />
    </>
  );
};

export default App;
