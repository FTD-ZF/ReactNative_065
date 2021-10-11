import React from 'react';
import { View, ScrollView, Pressable, StyleSheet, StatusBar, Platform } from 'react-native';

import { ImgPath } from '../assets';
import { isIphoneX, screen } from '../utils/screenUtils';
import { AppColors } from '../utils/stylesUtils';
import LoadingView from './LoadingView';


// 基础布局
const MainView = (props) => {


    /**
     * isLoading-是否展示加载中布局 默认false
     * boolTab-是否为首页的切换页面 默认false
     */
    const { children, isLoading = false, boolTab = false, } = props;

    return (
        <View style={styles.main}>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} >
                <View>
                    {children}
                </View>
            </ScrollView>
            {/* 此处为是否需要显示ios全面屏幕底部高度 */}
            <View style={{ height: boolTab ? 0 : isIphoneX() ? 34 : 0 }} />
            <LoadingView isLoading={isLoading} />
        </View>
    );
}

const styles = StyleSheet.create({

    main: {
        flex: 1,
        display: 'flex',
        position: 'relative',
    },
    scroll: {
        display: 'flex',
    }

});

export default React.memo(MainView)