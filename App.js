/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import { Node } from 'react';
import {
  StyleSheet, LogBox, StatusBar, Platform
} from 'react-native';
import { NavigationView } from './src/navigation';


export default class App extends Component {

  componentDidMount() {
    // StatusBar.setHidden(true)
    if (Platform.OS == 'android') {
      //android 沉浸式状态栏
      StatusBar.setTranslucent(true)
      StatusBar.setBackgroundColor('transparent')
      StatusBar.setBarStyle('dark-content')
    }

    LogBox.ignoreLogs([
      'Non-serializable values were found in the navigation state',
    ]);
  }

  render() {
    return (
      <NavigationView />
    )
  }
}



