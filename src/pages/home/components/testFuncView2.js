import React, { useState, useEffect, useCallback, useRef, createRef, forwardRef, useLayoutEffect, useMemo, useImperativeHandle, } from 'react';
import { View, Text, TouchableOpacity, Image, Platform, Pressable, StyleSheet, StatusBar, } from 'react-native';
import { AppColors } from '../../../utils/stylesUtils';




const randomNum = (min, max) => {
    var range = max - min;
    var rand = Math.random();
    var num = min + Math.round(rand * range);

    return num;
}

let TestFirstView = forwardRef((props, ref) => {
    const [value, setValue] = useState('123')



    useImperativeHandle(ref, () => ({
        value: value,
        toGetValue

    }))

    const toGetValue = () => {
        return value
    }

    return <Text>{value}</Text>
})




const TestFuncView = (props) => {

    const { title, } = props;
    let bgColor = `rgb(${randomNum(0, 255)}, ${randomNum(0, 255)}, ${randomNum(0, 255)})`


    const [value, setValue] = useState(false)
    const [value1, setValue1] = useState('value1')

    const txtRef = useRef()

    const onPress = () => {
        console.log('====onclick=func===')
        console.log(txtRef)
        setValue(!value)
    }



    useLayoutEffect(() => {
        console.log('===useLayoutEffect=====')
        // setTimeout(() => {
            setValue1('pppp')
        // }, 3000);
        console.log('effect2')
        return () => {
            value1
            console.log('destory2');
        }
    })

    useEffect(() => {
        console.log('effect1')
        return () => {
            console.log('destory1');
        }
    })

    console.log('=====render==func===')
    return (
        <View style={{ padding: 12 }} >


            <Pressable style={[styles.main, { backgroundColor: bgColor }]}
                onPress={onPress} >
                <Text style={styles.title} >{title}</Text>
                <Text style={styles.title} >{'测试值 -useLayoutEffect-=>' + value1}</Text>
                <Text style={styles.title} >{'测试值=>' + value}</Text>
                <TestFirstView ref={txtRef} />
            </Pressable>
        </View>

    );
}

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