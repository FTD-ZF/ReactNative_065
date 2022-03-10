import React from 'react';
import { View, Text, TouchableOpacity, Image, Platform, Pressable, StyleSheet, StatusBar } from 'react-native';
import { ImgPath } from '../assets';
import { isIphoneX, screen, titleHeight } from '../utils/screenUtils';
import { AppColors } from '../utils/stylesUtils';


// 默认自定义头部布局 
const CustomHeaderView = (props) => {
    /**
     * title-标题名字
     * boolBack-是否展示返回布局 默认true
     * boolShare-是否展示分享布局 默认false
     * onBackPress-返回按钮点击
     */

    const { title, boolBack = true, boolShare = false, navigation } = props;


    const titleBarHeight = titleHeight + screen.statusBarHeight;

    const onBackPress = () => {
        console.log('===onBackPress==1')

        boolBack && navigation.goBack()
    }

    return (
        <View style={[styles.main, { height: titleBarHeight, paddingTop: screen.statusBarHeight }]}>
            {/* 左边 */}
            <Pressable style={[styles.left, { height: titleHeight }]} onPress={onBackPress} >
                {boolBack ? <Image source={ImgPath.Nav.back} style={[
                    styles.backIcon,]} /> : <View />}
            </Pressable>
            {/* 标题 */}
            <View style={styles.center} >
                <Text style={styles.title} >{title}</Text>
            </View>
            {/* 右边 */}
            <Pressable style={[styles.left, { height: titleHeight, }]} >
                {boolShare ? <Text style={{ color: AppColors.dark3 }}>分享</Text> : <View />}
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({

    main: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: AppColors.themecolor
    },
    left: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    center: {
        display: 'flex',
        flexDirection: 'row',
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: 24
    },
    backIcon: {
        width: 20,
        height: 20,
    }

});

export default React.memo(CustomHeaderView)