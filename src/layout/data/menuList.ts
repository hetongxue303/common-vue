import {menuItem} from '../types'

// 模拟菜单数据
export const menuListData: Array<menuItem> = [
    {
        name: '系统管理',
        path: '/system',
        icon: 'setting',
        children: [
            {
                name: '用户管理',
                path: '/system/user',
                icon: 'document'
            },
            {
                name: '角色管理',
                path: '/system/role',
                icon: 'document'
            },
            {
                name: '菜单管理',
                path: '/system/menu',
                icon: 'document'
            }

        ]
    },
    {
        name: '测试管理',
        path: '/test',
        icon: 'setting',
        children: [
            {
                name: '测试1',
                path: '/test/1',
                icon: 'document'
            },
            {
                name: '测试2',
                path: '/test/2',
                icon: 'document'
            },
            {
                name: '测试3',
                path: '/test/3',
                icon: 'document'
            }
        ]
    }
]