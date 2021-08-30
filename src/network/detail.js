// 详情页数据获取

import {request} from './request'

// 根据商品id获取商品信息
export function getProDetailById(id){
    return request({
        url:'https://localhost:44324/Product/GetProductById',
        params:{
            id:id
        }
    })
}

// 获取所有店铺信息
export function getShop(){
    return request({
        url:'https://localhost:44324/Product/GetShop'
    })
}

// 将指定用户的指定商品添加到购物车中
export function addProToCart(uid,pid){
    return request({
        url:'https://localhost:44324/Product/AddProToCart',
        params:{
            uid,
            pid
        }
    })
}