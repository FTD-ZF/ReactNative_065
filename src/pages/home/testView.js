/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { RouteName } from '../../root';
import { getDeviceId, } from 'react-native-device-info';
import MainView from '../../components/MainView';
import BaseComponent from '../baseComponent';
import { observer, } from "mobx-react";
import TestFuncView from './components/testFuncView';
import TestFuncView2 from './components/testFuncView2';
import { screen } from '../../utils/screenUtils';
import BtnView from '../../components/BtnView';


@observer
export default class TestView extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {

        };
    }



    componentDidMount() {



    }


    componentUnWillMount() {

    }

    toGetFunc() {
        console.log(this.testRef)
        this.testRef.toSetFunc()
    }


    render() {



        const { } = this.state;
        return (
            <MainView>


                <TestFuncView ref={ref => this.testRef = ref} />

                <View style={{ height: 1, backgroundColor: 'red', marginVertical: 10 }} />

                <TestFuncView2 />

                <BtnView title={'类组件中调用函数组件的方法'} onPress={() => this.toGetFunc()} />


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
