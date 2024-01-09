<template> 

      <component :is="getIcon(`${props.name}`)" style="margin:0;" :style="{ height: props.w, width: props.w }" :class="props.className" :filled="true" :fontControlled="true" /> 

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
  w:{ 
      type:String,default:'16px' 
  }, 

}) 

</script> 

<style lang="scss" scoped> 

</style>