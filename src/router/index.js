import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/bossActive'
import B from '@/components/writeInfo'
import Login from '@/components/login'
import article from '@/components/article'
Vue.use(Router)

export default new Router({
    mode: 'history',
    // base:'/history',
    routes: [{
            path: '/',
            name: 'A',
            component: A,
            meta: { title: "招募合伙人" }
        },
        {
            path: '/b/:hid',
            name: 'B',
            component: B,
            meta: { title: "招募合伙人" }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: { title: "登录" }
        }, {
            path: '/article',
            name: 'article',
            component: article,
            meta: { title: "文章" }
        }
    ]
})