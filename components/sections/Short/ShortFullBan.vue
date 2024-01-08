<template>
    <div class="my-10">
        <div class="flex items-center justify-between mb-5">
            <div class="flex flex-col gap-2">
                <h1 class="text-2xl">{{ cattitle }}</h1>
                <span class="text-base text-slate-500">{{ catdesc }}</span>
            </div>
            <BaseBtnCatbtn :catlink="catlink" />
        </div>
        <div class="my-5 grid gap-6 grid-cols-2 max-sm:grid-cols-1 min-sm:grid-cols-2 ">
            <a :href="item.href" v-for="item in OtherItem" :key="item.id" class="col-span-1">
               <img :src="item.src" class="w-full object-cover  rounded-2xl" alt="">
            </a>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['catlink', 'cattitle', 'catdesc', 'items']);
const OtherItem = ref(props.items.slice(0, 2)); // Выберите другие элементы, которые вы хотите отобразить
import lambo from "@/assets/img/lambo.jpg"; 
import menusl from "@/assets/svg/menu-slate.svg"; 
import star from "@/assets/svg/star.svg"; 
import star_not from "@/assets/svg/star_not.svg"; 
import eyes from "@/assets/svg/eyes.svg"; 
import favorite_border from "@/assets/svg/favorite_border.svg"; 
</script>
<style>
    /* Lamborghini r8 270 */
</style>