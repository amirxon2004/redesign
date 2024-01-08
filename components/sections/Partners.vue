<template>
    <div class="my-10">
        <h1 class="mb-5 font-medium text-3xl text-slate-600">Наши партнеры</h1>
        <div class="flex gap-5 overflow-hidden">
            
                <div  class="border border-slate-300  rounded-xl flex items-center justify-center py-10">
                    <img :src="Oilalogo" class="w-full" alt="">
                    <img :src="Oilakredituz" class="w-full" alt="">
                </div>
            
           
                <div  class="border border-slate-300  rounded-xl flex items-center justify-center py-10">
                    <img :src="Oilalogo" class="w-100" alt="">
                    <img :src="Oilakredituz" class="w-100" alt="">
                </div>
           
          
                <div  class="border border-slate-300  rounded-xl flex items-center justify-center py-10">
                    <img :src="Oilalogo" class="w-100" alt="">
                    <img :src="Oilakredituz" class="w-100" alt="">
                </div>
         
            
                <div  class="border border-slate-300  rounded-xl flex items-center justify-center py-10">
                    <img :src="Oilalogo" class="w-100" alt="">
                    <img :src="Oilakredituz" class="w-100" alt="">
                </div>
          
        </div>
    </div>
</template>
<script setup>

import Oilakredituz  from "@/assets/svg/Oilakredituz.svg"; 
import Oilalogo  from "@/assets/svg/Oilalogo.svg"; 

</script>
<style>
    
</style>