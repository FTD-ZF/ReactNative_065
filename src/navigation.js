import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PageComponent, RouteName, StackScreenList } from './root';
import CustomBottomTab from './components/CustomBottomTab';
import CustomHeaderView from './components/CustomHeaderView';


//底部切换布局
const TabNav = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            tabBar={props => <CustomBottomTab {...props} />}>
            <Tab.Screen name={RouteName.HomeTab} component={PageComponent.Home}
                options={(nav) => ({
                    tabBarLabel: '主页',
                    // headerShown:false,
                    header: (props) => <CustomHeaderView title={'主页'} boolBack={false}  {...props} />
                })
                } />
            <Tab.Screen name={RouteName.CenterTab} component={PageComponent.Center}
                options={(nav) => ({
                    tabBarLabel: '中心',
                    // headerShown:false,
                    header: (props) => <CustomHeaderView title={'中心'} boolBack={false}  {...props} />
                })
                } />
            <Tab.Screen name={RouteName.MineTab} component={PageComponent.Mine}
                options={(nav) => ({
                    tabBarLabel: '我的',
                    // headerShown:false,
                    header: (props) => <CustomHeaderView title={'我的'} boolBack={false}  {...props} />
                })
                } />
        </Tab.Navigator>
    )
}

export const NavigationView = () => {

    const Stack = createStackNavigator()

    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{ presentation: 'card' }} >
                {/* tab 切换布局 */}
                <Stack.Screen name={'BaseTabNav'} component={TabNav}
                    options={() => ({ headerShown: false })} />
                {/* 页面 */}
                {
                    StackScreenList.map((item, index) => {
                        return <Stack.Screen key={index} name={item.name} component={item.component}
                            options={(nav) => ({
                                header: (props) => <CustomHeaderView title={item.title}  {...props} />
                            })
                            } />
                    })
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}