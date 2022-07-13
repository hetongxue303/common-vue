import {defineStore} from 'pinia'

interface mainStore {
}

export const useMainStore = defineStore('main', {
    state: (): mainStore => {
        return {}
    },
    getters: {},
    actions: {}
})