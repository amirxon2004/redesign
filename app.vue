<template>
  <div class="w-full">
    
    <NuxtLayout />  
    <div v-if="loading" class="fixed top-0 left-0 w-[100vw] h-[100vh] bg-white z-50 flex justify-center items-center" >
      <fwb-spinner size="8" />
    </div>
  </div>

</template>
<script setup>
import { FwbSpinner } from 'flowbite-vue'
  const loading=ref(false)
  const nuxtApp = useNuxtApp();
  // nuxtApp.hook("page:start", () => {
  //     loading.value = true;
  //   });
  //   nuxtApp.hook("page:finish", () => {
  //     loading.value = false;
  //   });
</script>


