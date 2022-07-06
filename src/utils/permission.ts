// 更新路由
import {useRouter} from 'vue-router'
import {routerList} from '../layout/data/routerList'

export const updateRouter = () => {
    const router = useRouter()
    routerList.forEach(item => {
        router.addRoute(item)
    })
}


// 更新菜单
import {menuItem} from '../layout/types'
import {menuListData} from '../layout/data/menuList'

export const updateMenu = (): Array<menuItem> => {
    // 默认就有的
    const menuList: Array<menuItem> = [
        {
            name: '首页',
            path: '/dashboard',
            icon: 'location'
        }
    ]
    // 模拟后台请求的数据
    menuListData.forEach(item => {
        menuList.push(item)
    })
    return menuList
}