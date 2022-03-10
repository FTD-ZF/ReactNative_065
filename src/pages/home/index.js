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
import BtnView from '../../components/BtnView';
import indexStore from '../../store/indexStore';
import firstStore from '../../store/firstStore';
import rootStore from '../../store/rootStore';


@observer
export default class Index extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    // UNSAFE_componentWillMount(){
    //     console.log('=home==UNSAFE_componentWillMount======')
    // }

    componentDidMount() {
        console.log('===机型==' + getDeviceId())
        indexStore.toTestRequest()

    }


    componentUnWillMount() {

    }

    toDetails() {
        // indexStore.toTestFunc_navigate()
        indexStore.toTestFunc_navigate()
        // this.NavPages(RouteName.Details)
    }

    toChangeValue() {
        // firstStore.testValue = '456'
        // indexStore.toChangeValue()
        firstStore.changeValue()
    }

    render() {

        const { indexValue, } = indexStore;
        // const { testValue } = firstStore;
        // const { isLoading } = rootStore;
        const { } = this.state;

        // console.log('====isLoading======' + isLoading)
        return (
            <MainView boolTab={true} boolShowEmpty={false}  >
                <BtnView title={'跳转详情'} onPress={() => this.toDetails()} />

                <BtnView title={'修改值' + indexValue} onPress={() => this.toChangeValue()} />
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
