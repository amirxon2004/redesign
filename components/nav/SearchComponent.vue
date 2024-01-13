<template>
    <div class="flex-1 relative z-10">
        <div class="relative h-12 w-full  flex items-center z-10  p-1">
            <div class="w-full relative z-[1]">
                <div class="absolute left-0 top-0 h-full w-6  pl-2 text-gray-700 flex justify-center items-center">
                    <Icon name="icon-search-loop" width="14px" height="14px" />
                </div>
                <input @focusin="toggle=true" v-model="search" @input="_get" class="h-10 border  text-sm border-[#2CB26D]  rounded-lg w-full   bg-white py-2 px-8 outline-none" type="text"
                    placeholder="Maxsulot yoki kategoriya..." />
                <div class="absolute right-0 top-0  h-full w-8 pr-1 text-gray-700 flex justify-center items-center">
                    <button class="bg-[#2CB26D] w-7 h-7 p-1 rounded-full text-white flex justify-center items-center">
                        <Icon name="icon-microphone" width="12px" height="12px" />
                    </button>
                </div>
            </div>
            <div v-show="toggle" class="w-full p-2 pt-2 absolute left-0 top-0 z-0 rounded-lg bg-white border-8 border-white">
                <div class="w-full pt-4">
                    <div class="w-ful pt-5 relative" v-if="(Categories && Categories.length) || (Products && Products.length)">
                    <ul v-if="Categories && Categories.length">
                        <li v-for="(item,i) in Categories" :key="i">
                            <!-- <nuxt-link to="/" class="flex items-center gap-2">
                                <div class="w-8 h-8 flex justify-center items-center rounded-full overflow-hidden">
                                    <img class="w-full h-full object-cover" src="@/assets/images/product2.jpg" alt="">
                                </div>
                                <div class="border-b border-gray-100 flex-1 p-1">
                                    <p class="text-sm  font-medium text-gray-700">Olma</p>
                                    <p class="text-[10px] text-gray-500 mt-1">mevalar/ Olma </p>
                                </div>
                            </nuxt-link> -->
                             <nuxt-link :to="`/product`" @click="toggle=false" class="flex items-center gap-2 mb-1 text-gray-700 rounded-lg hover:text-green-500">
                                <div class="w-8 h-8 flex justify-center items-center p-1">
                                    <Icon name="icon-search-loop" width="14px" height="14px" />
                                </div>
                                <div class="border-b flex-1 p-1">
                                    <p class="text-sm  font-medium ">{{ item.name }}</p> 
                                </div>
                            </nuxt-link>
                        </li>
                    </ul>
                    <ul v-if="Products && Products.length">
                        <li v-for="(item,i) in Products" :key="i" >
                            <!-- <nuxt-link to="/" class="flex items-center gap-2 mb-1 text-gray-700 rounded-lg hover:text-green-500">
                                <div class="w-8 h-8 flex justify-center items-center p-1">
                                    <Icon name="icon-search-loop" width="14px" height="14px" />
                                </div>
                                <div class="border-b flex-1 p-1">
                                    <p class="text-sm  font-medium ">{{ item.name }}</p> 
                                </div>
                            </nuxt-link> -->
                            <nuxt-link :to="`/product/${item.id}`" @click="toggle=false" class="flex items-center gap-2 text-gray-700 hover:text-green-500">
                                <div class="w-8 h-8 flex justify-center items-center rounded-full overflow-hidden">
                                    <!-- <img class="w-full h-full object-cover" src="@/assets/images/product2.jpg" alt=""> -->
                                    <Photo class="w-full h-full object-cover" :uid="item.file_id" />
                                </div>
                                <div class="border-b border-gray-100 flex-1 p-1">
                                    <p class="text-sm  font-medium">{{ item.name }}</p>
                                    <p class="text-[10px] opacity-[0.8] mt-1">{{ item.price }} so'm </p>
                                </div>
                            </nuxt-link>
                        </li> 
                    </ul>
                </div>
                  
                </div>
            </div>
        </div>
        <div v-show="toggle" @click="toggle=false" class="fixed w-[100vw] h-[100vh] bg-black top-0 left-0 z-0 opacity-[0.6]"></div>
    </div>
</template>
<script setup>
import { useApi } from '@/composables/useApi'

// DATA
const toggle = ref(false)
const search=ref("")
const Products=ref([])
const Categories=ref([])

// WATCH
watch(()=>toggle.value, ()=>{ 
if(process.client){
    if(toggle.value){
        document.body.style.overflowY = 'hidden';
    }
    else{
        document.body.style.overflowY = '';
    }
}
})


function _get(){
    if(search.value && search.value.length>=3){
        toggle.value=true
        useApi(`/api/frontend/v1/search?q=${search.value}`)
        .then((res)=>{
            Products.value=res.data.products
            Categories.value=res.data.categories
        })
        .catch(()=>{

        })
    }
   

}

</script>