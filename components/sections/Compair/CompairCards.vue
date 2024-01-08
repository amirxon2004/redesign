<template lang="">
     <SectionsSwipperCat :swipes="swipes"  />
     <div class="my-5 grid gap-6  max-sm:grid-cols-1  min-sm:grid-cols-2 max-md:grid-cols-2  max-[1300px]:grid-cols-3   max-[1000px]:grid-cols-2  xl:grid-cols-4">
  <BaseCardsCompairCards :items="items" :class="class" />
     </div>
</template>
<script setup>
const props = defineProps(['items','class','swipes']);
</script>
<style lang="">
    
</style>