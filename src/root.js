import Home from './pages/home'
import Center from './pages/center'
import Mine from './pages/mine'
import Details from './pages/details'
import FirstDetails from './pages/details/firstDetails'
import TestView from './pages/home/testView'


/**
 * 页面添加时使用该值（页面的路径）
 */
export const PageComponent = {
    Home,
    Center,
    Mine,
    Details,
    FirstDetails,
    TestView
}

/**
 * 跳转页面时使用该值跳转（定义的页面名称）
 */
export const RouteName = {
    //底部切换页面
    HomeTab: 'HomeTab',
    CenterTab: 'CenterTab',
    MineTab: 'MineTab',
    //其他页面-Stack.Screen
    Details: 'Details',
    FirstDetails: 'FirstDetails',
    TestView: 'TestView',
}

// Stack.Screen中使用，添加顺序随意
// name-页面名称 component-页面路径值 title-标题栏名字
export const StackScreenList = [
    // Details页面
    { name: RouteName.Details, component: PageComponent.Details, title: 'Details标题' },
    // FirstDetails页面
    { name: RouteName.FirstDetails, component: PageComponent.FirstDetails, title: 'FirstDetails标题' },
    { name: RouteName.TestView, component: PageComponent.TestView, title: '函数式组件进一步使用' },

]