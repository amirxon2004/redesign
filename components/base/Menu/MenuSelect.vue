<template lang="">
     <div class="flex-col flex w-full">
            <span class="text-xs font-medium " >{{ title }}</span>
            <div class="relative w-full">
              <button @click="ClickId" class="border border-slate-300 px-4 py-1.5  w-full rounded-lg my-2 flex justify-between items-center">Выбрать <Icon name="arrow_down" /></button>
            <!-- Выпадающий список -->
    <ul v-show="ShowId" class="absolute bg-white border p-2 rounded left-0 right-0 z-10"> 
      <li v-for="select in selects" :key="select.id">{{ select.title }}</li>
    </ul>
            </div>
          </div>
</template>
<script setup>
const props = defineProps(['ShowId', 'ClickId','title','selects']);
import { ref } from 'vue';

const ShowId = ref(false);

const ClickId = () => {
  ShowId.value = !ShowId.value;
};
</script>
<style lang="">
    
</style>