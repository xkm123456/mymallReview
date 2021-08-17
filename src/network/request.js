// 封装axios模块

import axios from 'axios'

export function request(config) {
    // 1.创建实例
    const instance1 = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 3000
    })
    
    // 2.发送真正的网络请求并将其结果返回，返回值是一个Promise对象
    return instance1(config);
}