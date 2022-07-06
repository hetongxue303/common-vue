import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import * as nProgress from 'nprogress'
import Layout from '../layout/index.vue'

const routes: Array<RouteRecordRaw> = [
    // 404
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/error/404.vue')
    },
    // 登录页
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('../views/login.vue')
    },
    // layout页面(默认就有)
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {
                    title: '仪表盘',
                    keepAlive: true,
                    requireAuth: false
                },
                component: () => import('../views/dashboard/index.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    // nProgress.start()
    next()
})

router.afterEach(() => {
    // nProgress.done()
})

// 配置nProgress
nProgress.configure({
    ease: 'linear',
    speed: 500,
    showSpinner: false  // 是否使用进度环
})

export default router