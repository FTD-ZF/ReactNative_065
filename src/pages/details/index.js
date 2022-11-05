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
import CustomHeaderView from '../../components/CustomHeaderView';
import MainView from '../../components/MainView';
import { RouteName } from '../../root';
import { getNavParams, NavPages } from '../../rootNavigation';
import BaseComponent from '../baseComponent';
import { observer, } from "mobx-react";
import firstStore from '../../store/firstStore';
import TestFuncView from '../home/components/testFuncView';

@observer
export default class Index extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            title: '默认你好'
        };
    }

    componentDidMount() {

        console.log('===componentDidMount====details======')
        const { navigation } = this.props;
        navigation.setOptions({
            header: (props) => (<CustomHeaderView title={'修改当前标题'}  {...props} />)
        })

        console.log(getNavParams())
        console.log('==============')
        firstStore.getNavContent_Details()

    }

    componentUnWillMount() {

    }

    toNext() {
        let params = {
            testId: '123',
            callBack: (params) => this.refreshPage(params)

        }
        // console.log(this.props)
        // this.NavPages(RouteName.FirstDetails, params)
        NavPages(RouteName.FirstDetails, params)
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

                    <TestFuncView title={'函数式组件进一步使用'} />
                    
                    <View style={{ width: 100, height: 1000 }} />
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
