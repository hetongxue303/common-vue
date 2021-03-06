import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import * as nProgress from 'nprogress'
import {useLoginStore} from '../store/modules/login'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@views/error/404.vue')
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@views/login.vue')
    },
    {
        path: '/',
        name: 'layout',
        component: () => import('@layout/index.vue'),
        redirect: '/dashboard',
        meta: {
            keepAlive: true,
            requireAuth: true
        },
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {
                    title: '首页',
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import('@views/dashboard/index.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    nProgress.start()
    if (to.path === '/login' || to.meta.requireAuth === false) {
        next()
    } else if (localStorage.getItem('Authorization') && useLoginStore().getAuthorization) {
        next()
    } else {
        next('/login')
    }

})

router.afterEach(() => {
})

// 配置nProgress
nProgress.configure({
    ease: 'linear',
    speed: 500,
    showSpinner: false  // 是否使用进度环
})

export default router