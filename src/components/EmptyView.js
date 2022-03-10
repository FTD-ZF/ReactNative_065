
import React from 'react';
import { View, Text, TouchableOpacity, Image, Platform, Pressable, StyleSheet, StatusBar } from 'react-native';
import { screen, titleBarHeight } from '../utils/screenUtils';
import { AppColors } from '../utils/stylesUtils';



/**
 * boolSearch -是否为搜索界面使用 默认false
 * @param {*} props 
 * @returns 
 */
const EmptyView = (props) => {

    const { } = props;

    return <View style={styles.main}>
        <Text style={styles.title} >{'暂无内容'}</Text>
    </View>

}

export default React.memo(EmptyView)


const styles = StyleSheet.create({

    main: {
        flex: 1,
        height: screen.height-titleBarHeight,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },

    title: {
        color: AppColors.themecolor,
    }

});