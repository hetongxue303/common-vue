import {defineStore} from 'pinia'
import {menuItem} from '../../layout/types'

interface storeTypes {
    // token
    Authorization: string,
    // 菜单列表
    menus: Array<menuItem>,
    // 折叠面板
    collapse: boolean
}

export const useLoginStore = defineStore('login', {
    state: (): storeTypes => {
        return {
            Authorization: localStorage.getItem('Authorization') || '',
            menus: [],
            collapse: false,
        }
    },
    getters: {
        getCollapse(state) {
            return state.collapse
        },
        getAuthorization(state) {
            return state.Authorization
        },
        getMenus(state) {
            return state.menus
        }
    },
    actions: {
        setCollapse(status: boolean) {
            this.collapse = status
        },
        setAuthorization(authorization: string) {
            localStorage.setItem('Authorization', authorization)
            this.Authorization = authorization
        },
        delAuthorization() {
            localStorage.removeItem('Authorization')
            this.Authorization = ''
        },
        logout() {
            localStorage.removeItem('Authorization')
            this.Authorization = ''
            this.menus = []
            this.collapse = false
        },
        setMenus(menus: Array<menuItem>) {
            this.menus = menus
        },
        delMenus() {
            localStorage.removeItem('menus')
            this.menus = []
        }
    }
})