<template>
    <section class="w-full flex justify-center p-8">
        <div class="f-container">
            <div class="flex justify-between mb-4 items-start gap-2">
                <div>
                    <h1 class="text-gray-700 text-2xl font-extrabold">Katta texnikalar</h1> 
                </div> 
                <button class="py-2 px-4 bg-white rounded-lg border text-sm hover:bg-green-200 hover:border-green-500">Barchasi</button>
            </div>
            <div
                class="w-full grid grid-cols-5 gap-3 max-[1300px]:grid-cols-4 max-[1000px]:grid-cols-3 max-md:grid-cols-2 ">
                <div v-for="(item, i) in products" :key="i" class="col-span-1">
                    <ProductCard :product="item" />
                </div> 
            </div>   
        </div>
    </section>
</template>
<script setup>
import ProductCard from '../product/ProductCard.vue'
import { useApi } from '@/composables/useApi' 
const { data:products } = await useAsyncData('get-bigsale', async () => {
    try {
        return await useApi('/api/frontend/v1/new/products?page=1&page_size=10')
            .then(res => { 
                if (res.data.results && res.data.results.length > 10) {
                    return res.data.results.splice(0, 10)
                }
                else {
                    return res.data.results
                }
            })
            .catch(e => {
                return e
            })
    }
    catch {
        return []
    }

})
</script>