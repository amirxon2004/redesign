import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null,
        modal:false
    }),
    actions: {
        set_token(val) {
           this.token=val
        }, 
        set_modal(val){
            this.modal=val
        }
    }, 
    persist: {
        storage: persistedState.localStorage
    }
})