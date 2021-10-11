/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { useNavigation } from '@react-navigation/native';
import { NavigationContext } from '@react-navigation/native';
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


// const navigationA = React.useContext(NavigationContext);
// const navigationB = useNavigation();
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
        console.log(getDeviceId())
        // console.log('=home==componentDidMount======')
        // const { navigation } = this.props;
        // console.log('navigation====')
        // console.log(navigation)
        // console.log(navigationA)
        // // console.log(navigationB)
        // console.log('navigation====')
        // navigation.setOptions({
        // headerShown:false
        // title: 'Updated!',
        //  headerStyle: {
        //     backgroundColor: 'red',
        // },
        // header: () => {
        //     return (<Text style={{ marginTop: 20 }} >901239</Text>)
        // }
        // })
        // console.log('this.NavCanGoBack()==home=')
        // console.log(this.NavCanGoBack())

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
