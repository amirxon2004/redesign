<template lang="">
    <div class="flex  gap-2.5 overflow-hidden">
      
        <a v-for="swipe in swipes" :key="index" :href="swipe.url" class=" py-4 px-5 justify-center items-center text-base bg-white border border-2 border-slate-300 flex gap-2 text-slate-500 rounded-lg text-nowrap">
            <span>{{ swipe.title }}</span>
            <img :src="close" class="w-4 invert" alt="img">
        </a>
    </div>
</template>
<script setup>
const props = defineProps(['swipes']);
import close from "@/assets/svg/close.svg";  


</script>
<style lang="">
    
</style>