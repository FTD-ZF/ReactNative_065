import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Platform, Pressable, StyleSheet, } from 'react-native';
import { ImgPath } from '../assets';
import indexStore from '../store/indexStore';
import { isIphoneX, screen } from '../utils/screenUtils';
import { AppColors } from '../utils/stylesUtils';
import { observer } from 'mobx-react';


@observer
export default class CustomBottomTabs extends Component {

    onPress(position) {
        console.log('===onPressonPress======' + position)
        const { state, descriptors, navigation } = this.props
        let route = state.routes[position]
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        });
        console.log('===event=======')
        console.log(event)
        indexStore.tabPosition = position
        // if (event.defaultPrevented) {
        // The `merge: true` option makes sure that the params inside the tab screen are preserved
        navigation.navigate({ name: route.name, merge: true });
        // }
    };

    render() {
        console.log('this.props===CustomBottomTabs===')
        console.log(this.props)
        const { state, descriptors, navigation } = this.props
        return (
            <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
                {state.routes.map((route, index) => {
                    // console.log('=====route=====')
                    // console.log(route)
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = indexStore.tabPosition === index;


                    let homeImg = isFocused ? ImgPath.Tab.home : ImgPath.Tab.home_default;
                    let centerImg = isFocused ? ImgPath.Tab.center : ImgPath.Tab.center_default;
                    let mineImg = isFocused ? ImgPath.Tab.mine : ImgPath.Tab.mine_default;

                    if (index == 1) {
                        return (
                            <View style={{ position: 'relative', flex: 1 }} key={index} >
                                <Pressable
                                    accessibilityRole="button"
                                    accessibilityState={isFocused ? { selected: true } : {}}
                                    accessibilityLabel={options.tabBarAccessibilityLabel}
                                    testID={options.tabBarTestID}
                                    onPress={() => this.onPress(index)}
                                    // onLongPress={onLongPress}
                                    activeOpacity={0.5}
                                    style={styles.center}>
                                    <Image style={styles.tabIcon}
                                        source={index == 0 ? homeImg : index == 1 ? centerImg : mineImg} />
                                    <Text style={{ color: isFocused ? AppColors.themecolor : '#666', marginTop: 5 }}>
                                        {label}
                                    </Text>
                                </Pressable>
                            </View>
                        )
                    } else {
                        return (
                            <Pressable
                                accessibilityRole="button"
                                accessibilityState={isFocused ? { selected: true } : {}}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={() => this.onPress(index)}
                                // onLongPress={onLongPress}
                                style={styles.default_home}
                                key={index}
                            >
                                <Image style={styles.tabIcon}
                                    source={index == 0 ? homeImg : index == 1 ? centerImg : mineImg} />
                                <Text style={{ color: isFocused ? AppColors.themecolor : '#666', marginTop: 5 }}>
                                    {label}
                                </Text>
                            </Pressable>
                        )
                    }
                })}
            </View>
        );

    }
}

const styles = StyleSheet.create({
    center: {
        position: 'absolute',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: screen.width / 3,
        height: screen.width / 3,
        marginTop: -((screen.width / 3) / 3),
        paddingTop: ((screen.width / 3) / 5),
        paddingBottom: Platform.OS == 'ios' ? isIphoneX() ? 34 : 0 : 0,
        borderRadius: screen.width / 3,
        backgroundColor: 'white',
    },
    default_home: {
        flex: 1, justifyContent: 'center', alignItems: 'center',
        paddingBottom: Platform.OS == 'ios' ? isIphoneX() ? 34 : 0 : 0,
        paddingTop: 8,
    },
    tabIcon: {
        width: 25,
        height: 25
    }

});
