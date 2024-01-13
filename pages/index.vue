<template>
    <section class="w-full">
        <MainSlider />
        
        <MainCategories />
        <NewProducts />
        <SujjestProducts />
        <DualBanner />
        <PopularProducts />
        <CheapProducts />
        <BigSale />
        <MidPrice />
        
    </section>
</template>
<script setup>
import MainSlider from '~/components/home/MainSlider.vue';
import MainCategories from '~/components/home/MainCategories.vue';
import SujjestProducts from '~/components/home/SujjestProducts.vue';
import PopularProducts from '~/components/home/PopularProducts.vue';
import NewProducts from '~/components/home/NewProducts.vue'
import CheapProducts from '~/components/home/CheapProducts.vue'
import BigSale from  '~/components/home/BigSale.vue'
import MidPrice from '~/components/home/MidPrice.vue'
import DualBanner from '~/components/home/DualBanner.vue';

// STORE
import { useDictionaryStore } from '@/stores/dictionary';
const dictionaryStore=useDictionaryStore()
const {get_regions, get_categories} = dictionaryStore

// METHODS
// ACTIONS
onMounted(()=>{
    get_regions()
    get_categories()
})
</script>