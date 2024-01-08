<template>
  
      <component :is="getIcon(`${props.name}`)" :class="props.className" :filled="true" :fontControlled="true" />
  
</template>

<script setup>
const getIcon = (id) => defineAsyncComponent(() => import(`~/assets/svg/${id}.svg`));
const props  = defineProps({
  className:{
      type:String,default:''
  },
  name:{
      type:String,default:''
  },
  
})

</script>

<style lang="scss" scoped>

</style>