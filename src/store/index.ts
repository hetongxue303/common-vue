import {defineStore} from 'pinia'

interface indexStore {
}

export const useMainStore = defineStore('main', {
    // 存储全局状态
    state: (): indexStore => {
        return {}
    },

    // 封装计算属性 具有缓存功能
    getters: {},

    // 封装业务逻辑 修改state
    actions: {}
})