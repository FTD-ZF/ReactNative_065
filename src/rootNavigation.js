import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()


/**
 * 跳转下个页面
 * @param {*} RouteName 
 * @returns 
 */
export const NavPages = (RouteName, params) => {
    console.log(navigationRef)

    if (navigationRef.isReady()) {
        navigationRef.navigate(RouteName, params);
    }
}

/**
 * 返回页面数 默认1层
 * @param {*} position 
 */
export const NavPop = (position = 1) => {
    if (navigationRef.isReady()) {
        navigationRef.pop(position);
    }
}

/**
 * 返回最初页面
 */
export const NavPopToTop = () => {
    if (navigationRef.isReady()) {
        navigationRef.popToTop();
    }
}

/**
 * 当前页面 获取上个页面的传值
 * @returns 
 */
export const getNavParams = () => {
    console.log(navigationRef.getCurrentRoute())
    return navigationRef.getCurrentRoute().params
}

