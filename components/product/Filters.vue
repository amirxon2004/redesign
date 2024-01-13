<template>
    <div class="w-[280px]  bg-white rounded-xl border py-2 sticky top-[70px] left-0">
        <div class="px-4 py-1 border-b">
            <div class="w-full py-3 flex justify-between cursor-pointer">
                <p class="text-base font-bold text-gray-600">Narxi</p>
                <span class="rotate-90">
                    <Icon name="icon-angle-right" />
                </span>
            </div>
            <div class="w-full mb-4 mt-4">
                <Frange v-model="filters.price" :min="2500" :max="25000000" />
            </div>
            <div class="w-full flex gap-2 mb-3">
                <div class="flex-1 form-input">
                    <el-input class="form-input" v-model="filters.price.from" placeholder="dan" size="large" />
                </div>
                <div class="flex-1">
                    <el-input v-model="filters.price.to" placeholder="gacha" size="large" />
                </div>
            </div>
        </div>
        <div class="px-4 py-1 border-b">
            <div class="w-full py-3 flex justify-between">
                <p class="text-base font-bold text-gray-600">Hudud</p>
                <span class="rotate-90">
                    <Icon name="icon-angle-right" />
                </span>
            </div>
            <div class="w-full">
                <div class="w-full mb-3 py-2 px-4 bg-gray-50 rounded-lg">
                    <el-checkbox label="Barcha hudular" v-model="filters.all_regions" />
                </div>
                <div class="w-full mb-3">
                    <el-select v-model="filters.region" @change="filters.district=''" placeholder="Viloyat" size="large" clearable :disabled="filters.all_regions">
                        <el-option v-for="(item, i) in regions" :key="i" :label="item.name" :value="item.id" />
                    </el-select>
                </div>
                <div class="w-full mb-3">
                    <el-select v-model="filters.district" placeholder="Tuman" size="large" clearable :disabled="!filters.region || filters.all_regions">
                        <el-option v-for="(item,i) in districts" :key="i" :label="item.name" :value="item.id" />
                    </el-select>
                </div>
            </div>
        </div>
        <div class="px-4 py-1 border-b">
            <div class="w-full py-3 flex justify-between">
                <p class="text-base font-bold text-gray-600">Yetkazib berish</p>
                <span class="rotate-90">
                    <Icon name="icon-angle-right" />
                </span>
            </div>
            <div class="w-full">
                <div class="w-full mb-1">
                    <el-checkbox label="Bepul yetkazib berish" />
                </div>
                <div class="w-full mb-1">
                    <el-checkbox label="Bor" />
                </div>
            </div>
        </div>
        <div class="px-4 py-1 border-b">
            <div class="w-full py-3 flex justify-between">
                <p class="text-base font-bold text-gray-600">Qo'shimcha</p>
                <span class="rotate-90">
                    <Icon name="icon-angle-right" />
                </span>
            </div>
            <div class="w-full">
                <div class="w-full mb-3">
                    <el-select v-model="filters.region" placeholder="O'lchov birligi" size="large" clearable>
                        <el-option v-for="(item, i) in regions" :key="i" :label="item.name" :value="item.id" />
                    </el-select>
                </div>
            </div>
        </div>
        <div class="px-4 py-1">
            <div class="w-full py-3 flex justify-between">
                <p class="text-base font-bold text-gray-600">Ta'minotchilars</p>
                <span class="rotate-90">
                    <Icon name="icon-angle-right" />
                </span>
            </div>
            <div class="w-full">
                <div class="w-full mb-3">
                    <el-select v-model="filters.region" placeholder="Ta'minotchi" size="large" clearable>
                        <el-option v-for="item in 5" :key="item" :label="item" :value="item" />
                    </el-select>
                </div>
            </div>
        </div> 
      
    </div>
</template>
<script setup>
import Frange from '~/components/ui/Frange.vue'; 
// STORE
import { useDictionaryStore } from '@/stores/dictionary';
const dictionaryStore=useDictionaryStore()
const {regions} =dictionaryStore


// DATA
const filters = reactive({
    price: {
        from: 2500,
        to: 25000000
    },
    all_regions:true,
    region:'',
    district:'',
    category:''
})

// COMPUTED
const districts=computed(()=>{
    let data=[]
    if(filters.region){
        regions.forEach(element=>{
            if(element.id==filters.region){
                data=element.districts
            }
        })
    }
    return data
})
 


</script>