import {RouteRecordRaw} from 'vue-router'

// 模拟路由数据
export const routerList: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'system',
        component: () => import('../index.vue'),
        meta: {
            title: '系统管理'
        },
        children: [
            {
                path: '/system/user',
                name: 'user',
                meta: {
                    title: '用户管理'
                },
                component: () => import('../../views/system/user.vue')
            },
            {
                path: '/system/role',
                name: 'role',
                meta: {
                    title: '角色管理'
                },
                component: () => import('../../views/system/role.vue')
            },
            {
                path: '/system/menu',
                name: 'menu',
                meta: {
                    title: '菜单管理'
                },
                component: () => import('../../views/system/menu.vue')
            }
        ]
    },
    {
        path: '/',
        name: 'test',
        component: () => import('../index.vue'),
        meta: {
            title: '测试管理'
        },
        children: [
            {
                path: '/test/1',
                name: 'test1',
                meta: {
                    title: '测试1'
                },
                component: () => import('../../views/system/user.vue')
            },
            {
                path: '/test/2',
                name: 'test2',
                meta: {
                    title: '测试2'
                },
                component: () => import('../../views/system/role.vue')
            },
            {
                path: '/test/3',
                name: 'test3',
                meta: {
                    title: '测试3'
                },
                component: () => import('../../views/system/menu.vue')
            }
        ]
    }
]