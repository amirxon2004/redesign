<template>
    <a :href="`/product/${product.id ? product.id : 1}`"
        class="flex flex-col w-full p-3 bg-white rounded-xl border relative min-h-full">
        <div class="relative rounded-lg overflow-hidden bg-gray-100 h-[220px]">
            <Photo :uid="product.main_photo" class="w-full h-full object-cover" v-if="product.main_photo" />
            <img v-else src="@/assets/images/product2.jpg" alt="">
        </div>
        <div class="flex flex-col justify-between flex-1 mt-3">
            <h1 class="text-gray-600 text-sm mb-3 overflow-hidden text-ellipsis line-clamp-2">
                <span v-if="product.name">{{ product.name }}</span>
                <span v-else>Kungaboqar yog'i Oila tanlovi, tozalangan va xidsizlantirilgan, 900 ml </span>
            </h1>

            <div class="w-full"> 
                <h1 class="text-sm font-bold text-gray-800 mb-3">{{ product.price }} so'm</h1>
                <div class="flex justify-between gap-4 items-center">
                    <Ratingstars :rating="product.rating" />
                    <div v-if="product.counter" class="flex text-xs items-center gap-2 text-gray-700">
                        <Icon name="icon-eye-fill" width="14px" height="14px" />
                        {{ product.counter }}
                    </div>
                </div>
                <div class="flex justify-between items-center mt-4 gap-2 flex-wrap" v-if="!is_incart(product.id)"> 
                        <button @click="AddCart" class="border-[#2CB26D] border text-[#2CB26D] justify-center font-medium text-sm py-2 px-4 rounded-lg flex items-center gap-3">
                            Savatga
                        </button>  
                        <button class=" text-[#2CB26D] text-sm p-2 rounded-lg flex items-center gap-3 font-bold"
                            v-if="product.has_installment || product.price > 10000000">
                            Bo'lib to'lash
                        </button>
                </div>
                <div class="flex justify-between mt-4 gap-2" v-if="is_incart(product.id)">
                    <button class="py-2 px-3  m-h-full border-[#2CB26D] !bg-[#2CB26D] border !text-white  rounded-xl" @click="AddCart">
                        <Icon name="icon-basket" width="16px" height="16px" />
                    </button>
                    <div class="flex-1"><Counter @click="PreventDefault" v-model="count"  /></div>
                </div>
              
            </div>
        </div>
    </a>
</template>
<script setup>
import Ratingstars from '../ui/Ratingstars.vue';
import Counter from '../ui/Counter.vue';
const props = defineProps({
    product: {
        type: Object,
        default: {},
        required: true,
    },
});
// STORE
import { useCartStore } from '~/stores/cart';
const cartStore =useCartStore()
const {set_cart, is_incart, set_count, get_count} =cartStore


//  DATA
const { product } = props
const count=ref(get_count(product.id))

// WATCH
watch(()=>count.value, ()=>{
    set_count(product.id, count.value)
})

// METHODS
function PreventDefault(e){
    e.preventDefault()
}
function AddCart(e){
    e.preventDefault()
    set_cart(props.product)
    
}

</script>
