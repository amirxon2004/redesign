<template>
    <img v-if="url" :src="url">
</template>
   
<script setup>
    const props = defineProps({
        uid: {
            type: String, 
            required: true,
        },
        source:{
            type:String,
            default:'default'
        }
    });
    const {uid} =props
    const url=computed(()=>{ 
        return `https://api.cabinet.smart-market.uz/uploads/images/${uid}`
    }) 
</script>