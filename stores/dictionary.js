import { defineStore } from 'pinia'
import { useApi } from '@/composables/useApi'

export const useDictionaryStore = defineStore('dictionary', { 
    state: () => ({ 
        regions:[], 
        categories:[]
    }), 
    actions: { 
        get_regions(){ 
            return new Promise ((resolve, reject)=>{
                useApi('/api/frontend/v1/regions?lang=uz', {})
                .then((res)=>{
                    this.regions=res.data
                    return resolve(res)
                })
                .catch(()=>{
                    return reject(0)
                })
            })
        }, 
        get_categories(){
            return new Promise ((resolve, reject)=>{
                useApi('/api/frontend/v1/categories?lang=uz', {})
                .then((res)=>{
                    this.categories=res.data.results
                    return resolve(res)
                })
                .catch(()=>{
                    return reject(0)
                })
            })
        }        
    },
    persist: {
        storage:persistedState.localStorage
    }
})