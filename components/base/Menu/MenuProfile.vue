<template>
    <div class="grid-cols-1">
 
        <div class="py-4 border rounded-xl">
            <ul class="flex flex-col">
                    <nuxt-link class="flex gap-2 text-base link-tabs items-center hover:bg-[#eaf9f0] hover:text-[#2CB26D] text-slate-500 p-4"
                    to="/profile/details"><Icon  name="user-t" /> Персональные данные</nuxt-link>
                    <nuxt-link class="flex gap-2 text-base link-tabs items-center hover:bg-[#eaf9f0] hover:text-[#2CB26D] text-slate-500 p-4"
                    to="/profile/documents"><Icon name="note-2" /> Документы</nuxt-link>
                    <nuxt-link class="flex gap-2 text-base link-tabs items-center hover:bg-[#eaf9f0] hover:text-[#2CB26D] text-slate-500 p-4"
                    to="/profile/notifications"><Icon name="notification" /> Уведомление</nuxt-link>
                    <nuxt-link class="flex gap-2 text-base link-tabs items-center hover:bg-[#eaf9f0] hover:text-[#2CB26D] text-slate-500 p-4"
                    to="/profile/cards"><Icon name="cards" /> Карты</nuxt-link>
                    <nuxt-link class="flex gap-2 text-base link-tabs items-center hover:bg-[#eaf9f0] hover:text-[#2CB26D] text-slate-500 p-4"
                    to="/profile/orders"><Icon name="box" /> Заказы</nuxt-link>
                    <nuxt-link class="flex gap-2 text-base link-tabs items-center hover:bg-[#eaf9f0] hover:text-[#2CB26D] text-slate-500 p-4"
                    to="/profile/billing"><Icon name="bill" /> Биллинг</nuxt-link>
                    <nuxt-link class="flex gap-2 text-base link-tabs items-center hover:bg-[#eaf9f0] hover:text-[#2CB26D] text-slate-500 p-4"
                    to="/profile/favorite"><Icon name="heart" /> Избранное</nuxt-link>
                    <nuxt-link class="flex gap-2 text-base link-tabs items-center hover:bg-[#eaf9f0] hover:text-[#2CB26D] text-slate-500 p-4"
                    to="/profile/cart"><Icon name="shopping-cart" /> Корзина</nuxt-link>
                    
                    <nuxt-link class="flex gap-2 text-base link-tabs items-center hover:bg-[#eaf9f0] hover:text-[#2CB26D] text-[#FB577C] p-4"
                    to="/profile/exit"><Icon name="login" className="m-0 "/> Выйти</nuxt-link>
                
               
            </ul>
        </div>
    </div>
</template>
<script setup>
import user_green from "@/assets/svg/user-green.svg";
import login from "@/assets/svg/login.svg";
import note2 from "@/assets/svg/note-2.svg";
import notification from "@/assets/svg/notification.svg";
import cards from "@/assets/svg/cards.svg";
import bill from "@/assets/svg/bill.svg";
import heart from "@/assets/svg/heart.svg";
import shopping_cart from "@/assets/svg/shopping-cart.svg";
import order from "@/assets/svg/box.svg";
import { useRouter } from 'vue-router';
import { ref, onMounted, watch } from 'vue';

const router = useRouter();
const currentRoute = ref(router.currentRoute);

watch(() => router.currentRoute, (to, from) => {
    currentRoute.value = to;
});

const isCurrentPath = (path) => currentRoute.value && currentRoute.value.path.startsWith(path);

</script>
<style>/* .active {
    background: #EBF2EE;
    border-right: 2px solid #2CB26D;
   }  */
   </style>