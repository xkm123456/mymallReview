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

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
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