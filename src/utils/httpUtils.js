

import { Component } from 'react'
import rootStore from '../store/rootStore'
import { Toast } from 'teaset'

/**
 * fetch 网络请求的header，可自定义header 内容
 * @type {{Accept: string, Content-Type: string, accessToken: *}}
 */
let header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

/**
 * GET 请求时，拼接请求URL
 * @param url 请求URL
 * @param params 请求参数
 * @returns {*}
 */
const handleUrl = url => params => {
    if (params) {
        let paramsArray = []
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])))
        if (url.search(/\?/) === -1) {
            typeof (params) === 'object' ? url += '?' + paramsArray.join('&') : url
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    return url
}

/**
 * fetch 网络请求超时处理
 * @param original_promise 原始的fetch
 * @param timeout 超时时间 30s
 * @returns {Promise.<*>}
 */
const timeoutFetch = (original_fetch, timeout = 30000) => {
    let timeoutBlock = () => { }
    let timeout_promise = new Promise((resolve, reject) => {
        timeoutBlock = () => {
            // 请求超时处理
            reject('请求超时，请稍后再试')
        }
    })

    // Promise.race(iterable)方法返回一个promise
    // 这个promise在iterable中的任意一个promise被解决或拒绝后，立刻以相同的解决值被解决或以相同的拒绝原因被拒绝。
    let abortable_promise = Promise.race([
        original_fetch,
        timeout_promise
    ])

    setTimeout(() => {
        timeoutBlock()
    }, timeout)

    return abortable_promise
}




export default class HttpUtils extends Component {

    /**
     * 基于fetch 封装的GET 网络请求
     * @param url 请求URL
     * @param params 请求参数
     * @returns {Promise}
     */
    static getRequest = (url, params = {}) => {
        rootStore.isLoading = true;
        return timeoutFetch(fetch(handleUrl(url)(params), {
            method: 'GET',
            headers: header,
        })).then(response => {
            // console.log(response)
            return response.json()
            // return response.text()
        }).then(response => {
            // console.log(response)
            // response.code：是与服务器端约定code：200表示请求成功，非200表示请求失败，message：请求失败内容
            rootStore.isLoading = false;

            return response
        }).catch(error => {
            console.log(error)
            Toast.fail('网络数据请求异常，请稍后再试')
            // alert(error)
            rootStore.isLoading = false;
            // return error
        })
    }

    /**
     * 基于fetch 的 POST 请求
     * @param url 请求的URL
     * @param params 请求参数
     * @returns {Promise}
     */
    static postRequrst = (url, params = {}) => {
        rootStore.isLoading = true
        return timeoutFetch(fetch(url, {
            method: 'POST',
            headers: header,
            body: JSON.stringify(params)
        })).then(response => {

            return response.json()
        }).then(response => {
            rootStore.isLoading = false;
            return response
        }).catch(error => {
            rootStore.isLoading = false;
            // alert(error)
            Toast.fail('网络数据请求异常，请稍后再试')
        })
    }

}