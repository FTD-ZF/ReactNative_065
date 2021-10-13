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
import BtnView from '../../components/BtnView';
import { RouteName } from '../../root';
import BaseComponent from '../baseComponent';
import { getDeviceId, } from 'react-native-device-info';
import MainView from '../../components/MainView';
import CustomHeaderView from '../../components/CustomHeaderView';



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
    }

    componentUnWillMount() {

    }

    toDetails() {
        this.NavPages(RouteName.Details)
    }

    render() {

        return (
            <MainView isLoading={false} boolTab={true} >
                <BtnView title={'跳转详情'} onPress={() => this.toDetails()} />
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
