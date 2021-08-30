import Vue from 'vue'

// 1.导入vue-router
// import VueRouter  from 'vue-router'

// Vue.use(VueRouter)

import {createRouter, createWebHistory} from 'vue-router'

// 使用路由懒加载
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Mine = () => import('views/mine/Mine')
const Detail = () => import('views/detail/Detail')

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home,
        meta: {
            keepAlive: true //设置页面是否需要使用缓存
        },
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/mine',
        component:Mine
    },
    {
        // path:'/detail/:id',     // 动态路由方式跳转路由
        path:'/detail',
        component:Detail
    }
]

// const router = new VueRouter({
//     routes
// })

// export default router
const routerHistory = createWebHistory()
 
const router = createRouter({
    history: routerHistory,
    routes
})
// 4.导出router
export default router