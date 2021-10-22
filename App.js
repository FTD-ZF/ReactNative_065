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
  StyleSheet, LogBox, StatusBar, Platform, BackHandler
} from 'react-native';
import { NavigationView } from './src/navigation';
// import { Toast, TopView } from 'teaset-pro'
import NetInfo from "@react-native-community/netinfo";
import { Toast, TopView } from 'teaset'


export default class App extends Component {

  componentDidMount() {
    // StatusBar.setHidden(true)

    if (Platform.OS == 'android') {
      //android 沉浸式状态栏
      StatusBar.setTranslucent(true)
      StatusBar.setBackgroundColor('transparent')
      StatusBar.setBarStyle('dark-content')

      BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid);
    }
    //网路状态监听
    /**
     *   unknown = "unknown",
    none = "none",
    cellular = "cellular",
    wifi = "wifi",
    bluetooth = "bluetooth",
    ethernet = "ethernet",
    wimax = "wimax",
    vpn = "vpn",
    other = "other"
     */
    NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      let netState = state.type;
      if (netState == 'unknown' || netState == 'none') {
        Toast.message('网络已断开，请检查网络连接！')
      } else if (netState == 'wifi') {
        Toast.message('当前网络状态为：' + netState)
      } else {
        console.log('其他网络状态')
      }
    });

    LogBox.ignoreLogs([
      'Non-serializable values were found in the navigation state',
    ]);
  }

  componentWillUnmount() {
    if (Platform.OS == 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this._onBackAndroid);
    }
  }

  //android 返回退出处理
  _onBackAndroid = () => {

    if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
      //最近2秒内按过back键，可以退出应用。
      BackHandler.exitApp();
    }
    this.lastBackPressed = Date.now();
    console.log('再按一次退出应用')
    Toast.message('再按一次退出应用');
    return true;
  }

  render() {
    return (
      <TopView>
        <NavigationView />
      </TopView>

    )
  }
}



