import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        products: [],
    }),
    actions: {
        set_cart(product) {
            if(this.is_incart(product.id)){ 
                this.products=this.products.filter((el) => {return el.id != product.id})
            }
            else{
                this.products.push({
                    ...product,
                    count: 1
                })
            }
           
        },
        set_count(id, val){ 
            for(let i=0; i<this.products.length; i++){
                if(this.products[i].id==id){
                    this.products[i].count=val
                }
            }
        }, 
    },
    getters: { 
        is_incart: (state) => {
            return (id) => {
                let data = false
                state.products.forEach(element => {
                    if (element.id == id) {
                        data = true
                    }
                })
                return data
            }
        },
        get_count: (state) => {
            return (id) => {
                let count=1
                for(let i=0; i<state.products.length; i++){
                    if(state.products[i].id==id){
                        count=state.products[i].count
                    }
                }
                return count
            }
        },
        get_count_all: (state) => {
                let count=0
                for(let i=0; i<state.products.length; i++){
                    count=count+state.products[i].count 
                }
                return count 
        },
    },
    persist: {
        storage: persistedState.localStorage
    }
})