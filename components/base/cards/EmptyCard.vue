<template lang="">
  <div class="w-full relative flex-col py-24 rounded-2xl bg-slate-100 flex items-center justify-center mb-10">
    <img :src="src" class="w-20 h-20" alt="">
    <h2 class="text-xl text-slate-700">
        {{ title }}
    </h2>
    <span class="text-slate-500 font-base">
        {{ desc }}
    </span>
    <a href="/" class="bg-[#2CB26D] text-white rounded-lg py-2 px-6 mt-16">Перейти на главную страницу</a>
  </div>
</template>
<script setup>
const props = defineProps(['src', 'title', 'desc']);
</script>
<style lang="">
    
</style>