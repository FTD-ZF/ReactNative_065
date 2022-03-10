import { CommonActions, } from '@react-navigation/core';
import { observable, action, makeObservable, configure, makeAutoObservable, } from 'mobx';
import { RouteName } from '../root';
import { getNavParams, NavPages } from '../rootNavigation';


/**
 * Mobx6使用 makeAutoObservable 
 * 定义新的变量、方法不需要使用装饰器方式
 * 
 */
class RootStore {

    constructor() {
        /**
         *  "never" (默认): 可以在任意地方修改状态
            "observed": 在某处观察到的所有状态都需要通过动作进行更改。在正式应用中推荐此严格模式。
            "always": 状态始终需要通过动作来更新(实际上还包括创建)。
         */
        configure({ enforceActions: 'never' })
        // makeObservable(this);//mbox 6后需要添加这个组件才会更新
        makeAutoObservable(this)
    }

    isLoading = false;




}

export default new RootStore()