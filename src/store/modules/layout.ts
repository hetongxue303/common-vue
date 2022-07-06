import {defineStore} from 'pinia'
import {menuItem} from '../../layout/types'

interface storeTypes {
    collapse: boolean,
    menuList: Array<menuItem>
}

export const useLayoutStore = defineStore('layout', {
    state: (): storeTypes => {
        return {
            collapse: false,
            menuList: []
        }
    },
    getters: {
        getCollapse(state) {
            return state.collapse
        },
        getMenuList(state) {
            return state.menuList
        }
    },
    actions: {
        setCollapse(status: boolean) {
            this.collapse = status
        },
        setMenuList(menuList: Array<menuItem>) {
            this.menuList = menuList
        }
    }
})