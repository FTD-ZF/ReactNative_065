
import {
    Dimensions,
    Platform,
    PixelRatio,
    NativeModules,
    StatusBar,
} from 'react-native';
import { getDeviceId } from 'react-native-device-info';

import { getStatusBarHeight } from 'react-native-status-bar-height';
export const screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    statusBarHeight: getStatusBarHeight()
};


// iPhoneX
const X_WIDTH = 375;
const X_HEIGHT = 812;
// iPhoneX max
const X_MAX_WIDTH = 414;
const X_MAX_HEIGHT = 896;



//ios全面屏幕系列
const iosSeries = ['iPhone10', 'iPhone11', 'iPhone12', 'iPhone13']

export const isIphoneX = () => {
    if (Platform.OS === 'ios') {
        let deviceId = getDeviceId();
        let boolIOSx = false;
        iosSeries.map((item, index) => {
            if (deviceId.indexOf(item) != -1) {
                boolIOSx = true
            }
        })
        return boolIOSx
    }
}


