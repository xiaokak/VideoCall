/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import ContactsScreen from './src/screens/ContactsScreen';
import CallingScreen from './src/screens/CallingScreen';
import IncomingCallScreen from './src/screens/IncomingCallScreen';
import CallScreen from './src/screens/CallScreen';

const App = () => {

  return (
    <>
      <StatusBar barStyle={'dark-content'} />

      <CallScreen />
    </>
  );
}



export default App;
