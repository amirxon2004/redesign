<template lang="">
    <div  v-for="item in items" :key="item.id" class="col-span-1" :class="class">
               <div class="p-4 border border-slate-300 rounded-xl">
                   <a :href="item.href" class="relative ">
                       <div class="flex absolute top-3 left-3 gap-2">
                           <div class="p-3 bg-white  rounded-lg">
                               <img :src="favorite_border" class="w-6 h-6" alt="">

                           </div>
                           <div class="p-3 bg-white  rounded-lg">
                               <img :src="menusl" class="w-6 h-6" alt="">
                           </div>
                         
                       </div>
                       <span class="absolute bottom-2 left-2 bg-[#FF4B97] px-2 py-0.5 text-base text-white rounded-lg ">{{ item.option }}</span>
                       <img :src="item.src" class="w-100 rounded-xl object-cover max-h-72 w-full" :alt="item.title">
                   </a>
                   <div class="flex flex-col">
                       <a :href="item.href">
                           <h1 class="text-xl font-medium text-slate-600 my-4">{{ item.title }}</h1>
                           </a> 
                       <span class="text-slate-600 font-bold text-xl">{{ item.price }}</span>
                       <div class="flex my-5 justify-between items-center">
                           <div class="flex">
                               <img :src="item.rate >= 1 ? star : star_not" class="w-4 h-4" alt="" />
                               <img :src="item.rate >= 2 ? star : star_not" class="w-4 h-4" alt="" />
                               <img :src="item.rate >= 3 ? star : star_not" class="w-4 h-4" alt="" />
                               <img :src="item.rate >= 4 ? star : star_not" class="w-4 h-4" alt="" />
                               <img :src="item.rate >= 5 ? star : star_not" class="w-4 h-4" alt="" />
                           </div>
                           <div class="text-slate-500 flex gap-2 items-center">
                               <img :src="eyes" class="w-5 h-5" alt="">
                               <span class="text-base">{{ item.views }}</span>
                           </div>
                       </div>
                       <div class="grid grid-cols-2 items-center gap-4 max-sm:grid-cols-1 ">
                           <button class="px-5 py-2 rounded-lg border border-2 font-medium border-[#2CB26D] text-[#2CB26D]">В корзину</button>
                           <button class="px-5 py-2 rounded-lg hover:border hover:border-2 font-medium hover:border-[#2CB26D] text-[#2CB26D] text-sm " >В рассрочку</button>

                       </div>
                   </div>
               </div>
           </div>
</template>
<script setup> 
const props = defineProps(['items', 'class']);
import lambo from "@/assets/img/lambo.jpg"; 
import menusl from "@/assets/svg/menu-slate.svg"; 
import star from "@/assets/svg/star.svg"; 
import star_not from "@/assets/svg/star_not.svg"; 
import eyes from "@/assets/svg/eyes.svg"; 
import favorite_border from "@/assets/svg/favorite_border.svg"; 
</script>
<style lang="">
   
</style>