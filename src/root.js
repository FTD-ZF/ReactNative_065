import Home from './pages/home'
import Center from './pages/center'
import Mine from './pages/mine'
import Details from './pages/details'
import FirstDetails from './pages/details/firstDetails'


/**
 * 页面添加时使用该值
 */
export const PageComponent = {
    Home,
    Center,
    Mine,
    Details,
    FirstDetails,
}

/**
 * 跳转页面时使用该值跳转
 */
export const RouteName = {
    //底部切换页面
    HomeTab: 'HomeTab',
    CenterTab: 'CenterTab',
    MineTab: 'MineTab',
    //其他页面
    Details: 'Details',
    FirstDetails: 'FirstDetails',
}