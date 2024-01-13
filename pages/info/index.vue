<template>
    <div class="flex gap-3 w-full">
        <InfoMenu @setDescParent="setDes" :links="links" :activeIndex="activeIndex" />

        <div class="flex w-full flex-col border border-[#DFE2E9] rounded-[10px] p-4">
            <!-- <div v-for="link in links"> -->
                <div>
                    {{ activeDesc }}
                </div>
            <!-- </div> -->
        </div>
    </div>
</template>
  
<script setup>



definePageMeta({
    layout: 'info',
});
const activeDesc = ref(null)
const setDes = (val)=>{
    activeDesc.value = val
}
const props = defineProps(['links', 'activeIndex']);


</script>
  
<style scoped>
/* Add your styles here */
</style>
  