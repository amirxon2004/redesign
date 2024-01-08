<template>
     <a :href="catlink" class="bg-white max-sm:hidden border border-2 border-slate-300 text-slate-500 text-xl px-6 rounded-lg py-2">
                Посмотреть все
            </a> 
</template>
<script setup>
const props = defineProps(['catlink']);
</script>
<style>
    
</style>