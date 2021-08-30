// 对首页请求数据的请求封装
// 这个js文件相当于控制层

import {request} from './request'

// 1.获取Home首页中的轮播图和推荐数据
export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    });
}

// 2.根据商品的风格和页数获取对应商品数据
export function getProductByStyle(type,page){
    return request({
        url:'https://localhost:44324/Product/GetAllProduct',
        params:{
            type,
            page
        }
    });
}