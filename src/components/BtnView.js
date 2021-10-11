import React from 'react';
import { View, Text, TouchableOpacity, Image, Platform, Pressable, StyleSheet, StatusBar } from 'react-native';
import { ImgPath } from '../assets';

import { AppColors } from '../utils/stylesUtils';


const randomNum = (min, max) => {
    var range = max - min;
    var rand = Math.random();
    var num = min + Math.round(rand * range);

    return num;
}


const BtnView = (props) => {

    const { title, onPress } = props;
    let bgColor = `rgb(${randomNum(0, 255)}, ${randomNum(0, 255)}, ${randomNum(0, 255)})`

    return (
        <Pressable style={[styles.main, { backgroundColor: bgColor }]}
            onPress={onPress} >
            <Text style={styles.title} >{title}</Text>
        </Pressable>

    );
}

const styles = StyleSheet.create({

    main: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `rgb(187, 255, 255)`,
        paddingVertical: 15,
        marginVertical: 8,
    },
    title: {
        color: AppColors.white,
        fontSize: 24
    }


});

export default React.memo(BtnView)