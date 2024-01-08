<template>
    <div class="grid-cols-1">

        <div class="py-4 border rounded-xl">
            <ul class="flex flex-col">
                <li>
                    <a :class="{ active: isCurrentPath('/profile/details') }" href="/profile/details"
                        class="flex gap-2 text-base items-center p-4  "><img :src="user_green" class="w-5 h-5" alt="">
                        Персональные данные</a>
                </li>
                <li>
                    <a :class="{ active: isCurrentPath('/documents') }" href="/documents"
                        class="flex gap-2 text-base items-center  p-4"><img :src="note2" class="w-5 h-5" alt="">
                        Документы</a>
                </li>
                <li>
                    <a :class="{ active: isCurrentPath('/notifications') }" href="/notifications"
                        class="flex gap-2 text-base items-center  p-4"><img :src="notification" class="w-5 h-5" alt="">
                        Уведомление</a>
                </li>
                <li>
                    <a :class="{ active: isCurrentPath('/cards') }" href="/cards"
                        class="flex gap-2 text-base items-center  p-4"><img :src="cards" class="w-5 h-5" alt=""> Карты</a>
                </li>
                <li>
                    <a :class="{ active: isCurrentPath('/orders') }" href="/orders"
                        class="flex gap-2 text-base items-center  p-4"><img :src="order" class="w-5 h-5" alt=""> Заказы</a>
                </li>
                <li>
                    <a :class="{ active: isCurrentPath('/billing') }" href="/billing"
                        class="flex gap-2 text-base items-center  p-4"><img :src="bill" class="w-5 h-5" alt=""> Биллинг</a>
                </li>
                <li>
                    <a :class="{ active: isCurrentPath('/favorite') }" href="/favorite"
                        class="flex gap-2 text-base items-center  p-4"><img :src="heart" class="w-5 h-5" alt="">
                        Избранное</a>
                </li>
                <li>
                    <a :class="{ active: isCurrentPath('/cart') }" href="/cart"
                        class="flex gap-2 text-base items-center  p-4"><img :src="shopping_cart" class="w-5 h-5" alt="">
                        Корзина</a>
                </li>

                <li>
                    <a href="#" class="flex gap-2 text-base items-center text-[#FB577C] p-4"><img :src="login"
                            class="w-5 h-5" alt=""> Выйти</a>
                </li>
                <nuxt-link class="flex gap-2 text-base items-center text-[#FB577C] p-4"
                    to="/profile/details">main</nuxt-link>
                <nuxt-link class="flex gap-2 text-base items-center text-[#FB577C] p-4" to="/profile">
                    <Icon name="bill" />
                </nuxt-link>
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