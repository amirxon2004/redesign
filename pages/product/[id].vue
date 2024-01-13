<template>
    <section class="w-full flex justify-center p-8">  
        <div class="f-container " v-if="product&&product.id">
            <div class="w-full mb-4">
                <el-breadcrumb separator="/" class="text-xs">
                    <el-breadcrumb-item to="/" class="text-xs">Bosh sahifa</el-breadcrumb-item>
                    <el-breadcrumb-item class="text-xs"><a href="/">{{ product.name }}</a></el-breadcrumb-item                    > 
                </el-breadcrumb>
            </div>
            <div class="w-full grid grid-cols-12 gap-16">
                <div class="col-span-6 ">
                <ProductCarousel class="sticky top-[70px]" :data="product.photos" />
            </div>
            <div class="col-span-6">
                <div class="flex justify-between gap-3 mb-4 items-center">
                    <div class="text-xs text-gray-400 flex items-center gap-2">
                        <Icon class="text-yellow-400" name="icon-star-fill" width="12px" height="12px" /> 4.9 ( 2900 ta baho ) 66000 ta buyurtma
                    </div>
                    <button class="button light">Sevimlilar</button>
                </div>
                <h1 class="text-xl mb-4">{{ product.name }} </h1>

                <ul class="mb-4">
                    <li class="text-xs text-gray-600 mb-2" v-if="product.seller"> <span class="font-bold">Soruvchi:</span> <a href="#" class="underline">{{ product.seller.name }}</a> </li>
                    <li class="text-xs text-gray-600 mb-2"> <span class="font-bold">Yetkasib bersih:</span> <a href="#"
                            class="underline">BTS </a> </li>
                </ul>
                <hr class="w-full h-[1px] mb-6 mt-6">
                <div class="w-full mb-6">
                    <p class="mb-2 text-sm text-gray-700">Miqdor</p>
                    <div class="flex gap-4 items-center">  
                        <Counter class="w-[150px]"  v-model="count" :max="product.amount" :min="product.min_amount" />
                        <p class="text-green-500 text-sm">Sotuvda {{ product.amount }} dona bor</p> 
                    </div>
                </div>
                <div class="w-full mb-6">
                    <p class="mb-2 text-sm text-gray-700">Narxi</p>
                    <div class="flex gap-4 items-end">
                        <p class="font-bold text-xl text-gray-700">{{ product.price }} so'm</p>
                        <p v-if="product.old_price" class="text-sm text-gray-500 line-through">{{ product.old_price }} so'm</p>
                        <!-- <span class="px-2 py-1 bg-purple-500 rounded-lg  text-xs text-white font-bold">Top</span> -->
                    </div>
                </div>
                <div class="w-full mb-6">
                    <div
                        class="mb-4 w-full p-3 flex justify-between rounded-xl bg-gray-100 cursor-pointer items-center h-12">
                        <div>
                            <span class="px-2 py-1 rounded-xl bg-yellow-300 text-sm font-bold text-gray-700 mr-3">32 000 /
                                oy</span>
                            <span class="text-sm text-gray-600">Muddatli to'lov</span>
                        </div>
                        <div class="text-gray-600">
                            <Icon name="icon-angle-right" />
                        </div>

                    </div>
                    <div class="flex gap-4 mb-4">
                        <button @click="set_cart(product.id)"  class="button size-xl flex-1 h-12" :disabled="is_incart(product.id)">Savatga qo'shish</button>
                        <button class="button size-xl flex-1 outlined">Sotib olish</button>
                    </div>
                    <div class="mb-4 w-full p-3 text-sm font-medium flex justify-between rounded-xl cursor-pointer items-center h-12 bg-yellow-50 text-yellow-600">
                         <span>Bu haftada 555 kishi sotib oldi</span>
                    </div>
                </div>
                <div class="w-full">
                    <h1 class="font-bold text-sm mb-2 text-gray-700">Maxsulot haqida qisqacha:</h1>
                    <div class="text-sm text-gray-600" v-html="product.technical_parameters"> 
                    </div>
                </div>
            </div> 
            </div>
       
          
        </div>
        <div class="f-container grid grid-cols-12 gap-16" v-else>
            Ma'lumot topilmadi
        </div>
</section>
</template>
<script setup>
import ProductCarousel from '~/components/product/ProductCarousel.vue';
import Counter from '~/components/ui/Counter.vue'; 
import { useApi } from '@/composables/useApi'
const route=useRoute()
const a= useCookie('token')

// STORE
import { useCartStore } from '~/stores/cart';
const cartStore =useCartStore()
const {set_cart, is_incart, set_count, get_count} =cartStore





// DATA

const { data:product } = await useAsyncData('get-product', async () => {
    try {
        return await useApi(`/api/frontend/v1/product/detail?product_id=${route.params.id}&lang=la`)
            .then(res => {
                return res.data
            })
            .catch(() => {
                return {}
            })
    }
    catch {
        return {}
    }
})
const count=ref(is_incart(product.id)?get_count(product.id):1)
// WATCH
watch(()=>count.value, ()=>{
    if(is_incart(product.id)){
        set_count(product.id, count.value)
    }
    
})

// ACTION
onMounted(()=>{
    if(is_incart(product.id)){ 
        count.value=get_count(product.id) 
    }
  
})




</script>