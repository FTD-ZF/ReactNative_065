/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { useNavigation } from '@react-navigation/native';
import { NavigationContext } from '@react-navigation/native';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
// const navigationA = React.useContext(NavigationContext);
// const navigation = useNavigation();
export default class BaseComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    UNSAFE_componentWillMount() {


    }
    // componentWillMount(){

    // }

    componentDidMount() {
        // console.log('=BaseComponent==componentDidMount======')
        // const { navigation } = this.props;
        // console.log('navigation====')
        // console.log(navigation)
        // console.log(navigationA)
        // console.log('navigation====')
        // navigation.setOptions({
        //     // headerShown:false
        //     // title: 'Updated!',
        //     //  headerStyle: {
        //     //     backgroundColor: 'red',
        //     // },
        //     header: () => {
        //         return (<Text style={{ marginTop: 80 }} >9999</Text>)
        //     }
        // })

    }


    componentUnWillMount() {

    }

    /**
     * 跳转下个页面
     * @param {*} RouteName 
     * @returns 
     */
    NavPages(RouteName, params) {
        return this.props.navigation.navigate(RouteName, params);
    }

    /**
     * 返回页面数 默认1层
     * @param {*} position 
     */
    NavPop(position = 1) {
        this.props.navigation.pop(position);
    }

    /**
     * 返回最初页面
     */
    NavPopToTop() {
        this.props.navigation.popToTop();
    }

    /**
     * 
     * @returns 获取路由传递的参数
     */
    NavRouteParams() {
        return this.props.route.params;
    }
    /**
     * 
     * @returns 是否可以在堆栈中导航回来--是否可以返回
     */
    NavCanGoBack() {
        return this.props.navigation.canGoBack()
    }
}

