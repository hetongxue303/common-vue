import {defineStore} from 'pinia'

interface indexStore {
    Authorization: string
}

export const useMainStore = defineStore('main', {
    state: (): indexStore => {
        return {
            Authorization: ''
        }
    },
    getters: {
        getAuthorization(state) {
            return state.Authorization
        }
    },
    actions: {
        setAuthorization(authorization: string) {
            sessionStorage.setItem('Authorization', authorization)
            this.Authorization = authorization
        },
        delAuthorization() {
            sessionStorage.removeItem('Authorization')
            this.Authorization = ''
        }
    }
})