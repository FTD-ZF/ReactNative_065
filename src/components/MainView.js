import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { View, ScrollView, Pressable, StyleSheet, StatusBar, Platform } from 'react-native';


import { ImgPath } from '../assets';
import firstStore from '../store/firstStore';
import indexStore from '../store/indexStore';
import rootStore from '../store/rootStore';
import { isIphoneX, screen } from '../utils/screenUtils';
import { AppColors } from '../utils/stylesUtils';
import EmptyView from './EmptyView';
import LoadingView from './LoadingView';


// 基础布局
// const MainView = (props) => {
//     /**
//      * isLoading-是否展示加载中布局 默认false
//      * boolTab-是否为首页的切换页面 默认false
//      * boolUseScrollView- 是否使用FlatList  默认false
//      * boolShowEmpty- 是否展示缺省页面 默认false--根据实际数据是否展示
//      */
//     const { children, isLoading = rootStore.isLoading, boolTab = false,
//         boolUseScrollView = true, bottomStyle, boolShowEmpty = false, } = props;
//     console.log('======mainview==')
//     return (
//         <View style={styles.main}>
//             {boolUseScrollView ?
//                 <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={!boolShowEmpty} >
//                     <View>
//                         {children}
//                         {
//                             !isLoading ? boolShowEmpty ? <EmptyView /> : <View /> : <View />
//                         }
//                     </View>
//                 </ScrollView>
//                 :
//                 <View style={{ flex: 1, flexDirection: 'column', }} >
//                     {children}
//                     {
//                         !isLoading ? boolShowEmpty ? <EmptyView /> : <View /> : <View />
//                     }
//                 </View>}
//             {/* 此处为是否需要显示ios全面屏幕底部高度 */}
//             <View style={[{ height: boolTab ? 0 : isIphoneX() ? 34 : 0, }, bottomStyle]} />
//             <LoadingView isLoading={isLoading} />
//         </View>
//     );
// }

const styles = StyleSheet.create({

    main: {
        flex: 1,
        display: 'flex',
        position: 'relative',
    },


});

// export default React.memo(MainView)


@observer
export default class MainView extends Component {
    render() {
        const { children, isLoading = rootStore.isLoading, boolTab = false,
            boolUseScrollView = true, bottomStyle, boolShowEmpty = false, } = this.props;
        console.log('======mainview==')
        return (
            <View style={styles.main}>
                {boolUseScrollView ?
                    <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={!boolShowEmpty} >
                        <View>
                            {children}
                            {
                                !isLoading ? boolShowEmpty ? <EmptyView /> : <View /> : <View />
                            }
                        </View>
                    </ScrollView>
                    :
                    <View style={{ flex: 1, flexDirection: 'column', }} >
                        {children}
                        {
                            !isLoading ? boolShowEmpty ? <EmptyView /> : <View /> : <View />
                        }
                    </View>}
                {/* 此处为是否需要显示ios全面屏幕底部高度 */}
                <View style={[{ height: boolTab ? 0 : isIphoneX() ? 34 : 0, }, bottomStyle]} />
                <LoadingView isLoading={isLoading} />
            </View>
        );
    }
}