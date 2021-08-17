// 对首页请求数据的请求封装
// 这个js文件相当于控制层

import {request} from './request'

export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    });
}