// 购物车请求封装
import {request} from './request'

export function ShowProCart(uid){
    return request({
        url:'https://localhost:44324/Product/ShowProCart',
        params:{
            uid
        }
    })
}