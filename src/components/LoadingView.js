import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, StatusBar } from 'react-native';
import { ImgPath } from '../assets';
import { isIphoneX, screen } from '../utils/screenUtils';
import { AppColors } from '../utils/stylesUtils';


// loading布局
const LoadingView = (props) => {


    const { isLoading = false, loadingTitle = '加载中...' } = props;

    return (
        <View style={isLoading ? styles.container : {}}>
            {
                isLoading ?
                    <View style={styles.loading}>
                        <ActivityIndicator animating={true} size='large' color='white' />
                        <Text style={styles.loadingTitle}>{loadingTitle}</Text>
                    </View> : <View />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loading: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: 80,
        width: 100,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingTitle: {
        marginTop: 10,
        fontSize: 14,
        color: 'white'
    }
});

export default React.memo(LoadingView)