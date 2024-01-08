<template lang="">
    <div class="flex  gap-2.5 overflow-hidden">
        <a href="#" class="py-4 items-center px-5 items-center justify-center text-nowrap text-base bg-[#2CB26D] flex gap-2 text-white rounded-lg">
            <img class="w-4" :src="coat" alt="">
            <span>Домашний скот</span>
        </a>
        <a v-for="swipe in swipes" key="index" :href="swipe.url" class="py-4 px-5 justify-center items-center text-base bg-white border border-2 border-slate-300 flex gap-2 text-slate-500 rounded-lg text-nowrap">
            <img :src="swipe.img" class="w-4" alt="img">
            <span>{{ swipe.title }}</span>
        </a>
    </div>
</template>
<script setup>
import coat from "@/assets/svg/coat.svg"; 
import lemon from "@/assets/svg/lemon.svg"; 
import vino from "@/assets/svg/vino.svg"; 
import semena from "@/assets/svg/semena.svg"; 
import Bee from "@/assets/svg/Bee.svg"; 
import Chicken from "@/assets/svg/Chicken.svg"; 
import rabbit from "@/assets/svg/rabbit.svg"; 
import fork from "@/assets/svg/fork.svg"; 
const swipes = [
    {
        url:"#",
        img:lemon,
        title:"Лимон",
    },
    {
        url:"#",
        img:vino,
        title:"Виноград",
    },
    {
        url:"#",
        img:semena,
        title:"Семена",
    },
    {
        url:"#",
        img:Bee,
        title:"Пчеловодство",
    },
    {
        url:"#",
        img:Chicken,
        title:"Птицеводство",
    },
    {
        url:"#",
        img:rabbit,
        title:"Зайцеводство",
    },
    {
        url:"#",
        img:fork,
        title:"Питание",
    },
]
</script>
<style lang="">
    
</style>