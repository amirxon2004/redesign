<template lang="">
    <div class="flex w-full flex-col  border border-[#DFE2E9] rounded-[10px] p-4">
   <h1 class="font-medium text-base mb-4">{{ blog.title }}</h1>
        <div class="text-sm">
            {{ blog.desc }}
        </div>
    </div>
</template>
<script setup>
definePageMeta({
  layout: 'info'
})
const blog=ref({
    title:"Ro’yxatdan o’tish Qanday ?",
        desc: "-----------------------",
})

</script>
<style >
  
</style>