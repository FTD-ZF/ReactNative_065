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

export default class FirstDetails extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        console.log('===componentDidMount====FirstDetails======')
        console.log(this.props)
        console.log('this.NavCanGoBack()==FirstDetails=')
        console.log(this.NavCanGoBack())
    }

    componentUnWillMount() {

    }

    toPop() {
        const { testId, callBack, } = this.NavRouteParams()
        callBack('返回的值123')
        this.NavPop(1);
    }
    toPopTop() {
        this.NavPopToTop()
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