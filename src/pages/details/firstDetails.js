/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import BtnView from '../../components/BtnView';
import MainView from '../../components/MainView';
import BaseComponent from '../baseComponent';
import { RouteName } from '../../root';
import { getNavParams } from '../../rootNavigation';

export default class FirstDetails extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

        const { navigation } = this.props;
        navigation.setOptions({
            headerShown: false,//隐藏当前标题栏
        })
    }

    componentUnWillMount() {

    }

    toPop() {
        // const { testId, callBack, } = this.NavRouteParams()
        const { testId, callBack, } = getNavParams()
        callBack('返回的值123')
        this.NavPop();


    }

    //返回指定页面
    toPopTop() {

        const aa = {
            "stale": false,
            "type": "tab",
            "index": 1,
            "routeNames": ["HomeTab", "CenterTab", "MineTab"],
            // "history": [{ "type": "route", "key": "HomeTab-fjYsW_eJ7Ip6-Onj4yPg1" }],
            "routes": [{ "name": "HomeTab", "key": "HomeTab-fjYsW_eJ7Ip6-Onj4yPg1" },
            { "name": "CenterTab", "key": "CenterTab-C1_KB5Yf1NyxrBguUYIsP" },
            { "name": "MineTab", "key": "MineTab-AMt72YU_A-WLstFwhmBWq" }]
        }


        // console.log(this.props)
        // console.log(this.props.navigation.getState())

        // this.NavPopToTop()


        this.NavPages({ name: RouteName.CenterTab, merge: true })
        // this.props.navigation.reset(aa)
    }

    render() {

        const { testId, } = this.NavRouteParams()

        return (
            <MainView>


                <View style={styles.container}>

                    <Text style={{ fontSize: 20 }} >获取的参数值：{testId}</Text>
                    <BtnView title='点击返回一层' onPress={() => this.toPop()} />
                    <BtnView title='点击返回初始页面' onPress={() => this.toPopTop()} />

                </View>
            </MainView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});
