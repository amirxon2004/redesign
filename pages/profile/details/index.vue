<template lang="">
   <div class="">
    <div class="flex gap-1">
      <div class="text-[#2CB26D] py-3 px-6 border border-2 border-slate-200 text-nowrap rounded-t-xl">
        Персональные данные
      </div>
      <div class="bg-[#F9F9F9] text-slate-500 py-3 px-6 border border-2 border-slate-200 text-nowrap rounded-t-xl">
        Информация о компании
      </div>
    </div>
    <div class="p-4">
      <h1 class="font-medium text-2xl">Персональные данные</h1>
      <div class="flex">
        <div class="relative bg-slate-100 flex items-center justify-center p-8 rounded-full m-4">
          <img :src="gallery" class="w-12 h-12" alt="">
          <a href="#" class="absolute bottom-0 right-0 p-3 border border-slate-200 bg-white rounded-full"><Icon name="mode" /></a>
        </div>
      </div>
    </div>
   </div>
</template>
<script setup>
import gallery from "@/assets/img/gallery.png"; 

definePageMeta({
  layout: 'profile'
})
</script>
<style lang="">
     
</style>