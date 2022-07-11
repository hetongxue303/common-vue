import {defineStore} from 'pinia'

interface indexStore {
    Authorization: string,
}

export const useMainStore = defineStore('main', {
    state: (): indexStore => {
        return {
            Authorization: localStorage.getItem('Authorization') || ''
        }
    },
    getters: {
        getAuthorization(state) {
            return state.Authorization
        }
    },
    actions: {
        setAuthorization(authorization: string) {
            localStorage.setItem('Authorization', authorization)
            this.Authorization = authorization
        },
        delAuthorization() {
            localStorage.removeItem('Authorization')
            this.Authorization = ''
        }
    }
})