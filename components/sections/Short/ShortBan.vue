<template>
    <div class="my-10">
        <div class="flex items-center justify-between mb-5">
            <div class="flex flex-col gap-2">
                <h1 class="text-2xl">{{ cattitle }}</h1>
                <span class="text-base text-slate-500">{{ catdesc }}</span>
            </div>
            <BaseBtnCatbtn :catlink="catlink" />
        </div>
        <div class="my-5 grid gap-6  max-sm:grid-cols-2  min-sm:grid-cols-2 max-md:grid-cols-2  max-[1300px]:grid-cols-3   max-[1000px]:grid-cols-2  xl:grid-cols-4">
            <a :href="item.href" v-for="item in banitem" :key="item.id" class="col-span-2">
                <div >
                    <img :src="item.src" style="height:515px"  class=" object-cover  rounded-2xl" alt="">
                </div>
            </a>
            <BaseCardsShortCard :items="OtherItem" class="max-sm:col-span-2" />
        </div>
    </div>
</template>
<script setup>
import { ref, defineProps } from 'vue';
const props = defineProps(['catlink', 'cattitle', 'catdesc', 'items', 'banitem']);

const OtherItem = ref(props.items.slice(0, 2)); // Выберите другие элементы, которые вы хотите отобразить


</script>
<style>
    /* Lamborghini r8 270 */
</style>