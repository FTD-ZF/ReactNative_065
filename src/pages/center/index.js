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
import MainView from '../../components/MainView';

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    componentUnWillMount() {

    }


    render() {

        return (
            <MainView boolTab={true}>

                <Text>center</Text>

            </MainView>
        );
    }
}

const styles = StyleSheet.create({

});
