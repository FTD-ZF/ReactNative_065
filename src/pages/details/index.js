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
import { RouteName } from '../../root';
import BaseComponent from '../baseComponent';

export default class Index extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            title: '默认你好'
        };
    }

    componentDidMount() {
        // this.props.navigation.setParams({
        //     refreshPage: () => this._refreshPage()
        // })
        console.log('===componentDidMount====details======')
        console.log(this.props)
        console.log('this.NavCanGoBack()==details=')
        console.log(this.NavCanGoBack())

    }

    componentUnWillMount() {

    }

    toNext() {
        let params = {
            testId: '123',
            // update: () => this.refreshPage()
            callBack: (params) => this.refreshPage(params)

        }
        // console.log(this.props)
        this.NavPages(RouteName.FirstDetails, params)
    }

    refreshPage(params) {
        console.log('=====refreshPage======')
        console.log(params)
        this.setState({ title: params })

    }

    render() {
        const { title, } = this.state;
        return (
            <MainView>
                <View style={styles.container}>
                    <Text style={{ fontSize: 20, marginVertical: 15 }} >{title}</Text>
                    <BtnView title='toNextDetails' onPress={() => this.toNext()} />
                    <View style={{width:100,height:1000}}  />
                    <Text>123</Text>
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
