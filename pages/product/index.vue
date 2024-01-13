<template>
    <section class="w-full flex justify-center p-8">
        <div class="f-container">
            <div class="w-fill mb-4">
                <el-breadcrumb separator="/" class="text-xs">
                    <el-breadcrumb-item to="/" class="text-xs">Asosiy</el-breadcrumb-item>
                    <el-breadcrumb-item class="text-xs"><a href="/">Maxulot</a></el-breadcrumb-item                    > 
                </el-breadcrumb>
            </div>
            <h1 class="text-2xl font-bold text-gray-700 mb-4">Elektronika</h1>
            <div class="w-full flex items-center mb-4 gap-4">
                <div class="text-xs bg-gray-100 rounded-lg p-4 w-[280px] text-center text-gray-600">Найден: 20 279 товаров</div>
                <div class="flex-1 flex items-center justify-between bg-gray-100 rounded-lg"> 
                    <div class="flex items-center">
                        <div class="col-span-2 p-4 text-xs cursor-pointer flex items-center gap-1 font-bold text-primary ">Mashxurlik<el-icon><ElIconSort /></el-icon></div>
                        <div class="col-span-2 p-4 text-xs cursor-pointer flex items-center gap-1 text-gray-600">Yangi<el-icon><ElIconSort /></el-icon></div> 
                        <div class="col-span-2 p-4 text-xs cursor-pointer flex items-center gap-1 text-gray-600">Narx <el-icon><ElIconSort /></el-icon></div>
                        <div class="col-span-2 p-4 text-xs cursor-pointer flex items-center gap-1 text-gray-600">Reyting <el-icon><ElIconSort /></el-icon></div>
                        <div class="col-span-2 p-4 text-xs cursor-pointer flex items-center gap-1 text-gray-600">Chegirma <el-icon><ElIconSort /></el-icon></div>
                    </div>
                    <div class="flex items-center gap-3 p-4">
                        <button class="text-green-500">
                            <Icon name="icon-col" width="16px" height="16px" />
                        </button>
                        <button class="text-gray-700">
                            <Icon name="icon-row" width="16px" height="16px" />
                        </button>
                    </div>
                   
                
                </div>
            </div>
            <div class="w-full flex gap-4 items-start  relative">
                <Filters />
                <div class="flex-1">
                    <div class="grid grid-cols-4 gap-3 ">
                        <div v-for="i in 8" :key="i" class="col-span-1">
                            <ProductCard :product="{}" />
                        </div>
                    </div>
                    <div class="w-full py-4">
                        <button class="w-full p-4 bg-gray-100 rounded-lg text-gray-700 text-sm font-normal ">
                            Ko'proq ko'rish
                        </button>
                    </div>
                    <div class="w-full flex justify-between items-center">
                        <el-pagination layout="prev, pager, next" :total="1000" />
                        <p class="text-xs text-gray-500">Siz 120 ta natijadan 16 tasini koʻrdingiz</p>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import ProductCard from '~/components/product/ProductCard.vue';
import Filters from '~/components/product/Filters.vue';

</script>