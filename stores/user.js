import { defineStore } from 'pinia' 

export const useUserStore = defineStore('user', {
    state: () => ({ 
        auth:{
            access:'',
            refresh:''
        },
        me:{}, 
    }),
    actions: { 
        set_auth(key, value){
            this.auth[key]=value
        },
       
        logout(){
            this.auth.access=""
            this.auth.refresh=""
            this.me={}
        }
    },
    getters:{
         
    },
    persist: true
})