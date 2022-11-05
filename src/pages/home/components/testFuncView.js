import React, { useState, useEffect, useCallback, useRef, createRef, forwardRef, useLayoutEffect, useMemo, useImperativeHandle, } from 'react';
import { View, Text, TouchableOpacity, Image, Platform, Pressable, StyleSheet, StatusBar, } from 'react-native';

import { AppColors } from '../../../utils/stylesUtils';


/**
 * React.memo,useMemo,useCallback使用
 * 
 * 组件使用 React.memo ，其中事件使用useCallback
 */


let Child1 = React.memo((props) => {
    console.log("执行子组件1了");
    return <View style={styles.child_v} >
        <Text>{props.value}</Text>
        <Pressable style={styles.btn} onPress={props.onPressChild1} >
            <Text>点击加1</Text>
        </Pressable>
    </View >

})

let Child2 = React.memo((props) => {
    console.log("执行子组件2了");
    return <View style={styles.child_v} >
        <Text>{props.value}</Text>
        <Pressable style={styles.btn} onPress={props.onPressChild2} >
            <Text>点击加2</Text>
        </Pressable>
    </View>

})


const TestFuncView = forwardRef((props, ref) => {

    const { } = props;

    const [child1Value, setchild1Value] = useState(0)
    const [child2Value, setchild2Value] = useState(5)

    const onPressChild1 = useMemo(() => {
        return () => setchild1Value(child1Value + 1)

    }, [child1Value])

    const onPressChild2 = useCallback(() => {
        setchild2Value(child2Value + 2)
    }, [child2Value])


    useImperativeHandle(ref, () => ({
        toSetFunc

    }))

    //给外部使用
    const toSetFunc = () => {
        setchild1Value(child1Value + 1)
        setchild2Value(child2Value + 2)
    }

    return (
        <View style={{ padding: 12 }} >

            <Child1 value={child1Value} onPressChild1={onPressChild1} />

            <Child2 value={child2Value} onPressChild2={onPressChild2} />

        </View>

    );
})

const styles = StyleSheet.create({

    main: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        marginVertical: 8,
    },
    title: {
        color: AppColors.white,
        fontSize: 24
    },
    child_v: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    btn: {
        padding: 12,
    }


});

export default React.memo(TestFuncView)