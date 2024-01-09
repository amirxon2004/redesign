<template lang="">
    <div class="p-4 border rounded-md">
      <div class="my-4">
        <h1 class="font-medium text-xl">Уведомление</h1> 
      </div>
      <div class=" flex gap-5 w-2/4 py-4">
        <BaseMenuSelect title="Махалля" :selects="maxalla" ShowId="maxalla" ClickId="maxallabtn"/>
        <BaseMenuSelect title="Махалля" :selects="maxalla" ShowId="maxalla" ClickId="maxallabtn"/>
        
      </div>
    </div>
</template>
<script setup>
definePageMeta({
  layout: 'profile'
})
</script>
<style lang="">
    
</style>