<template >
   <div class="shadow">
    <div class="navbar">
        <div class="h-12 w-full flex items-center bg-[#203E2F]">
            <div class="container ">
                <div class="flex text-white justify-between items-center">
                    <div class="flex gap-8">
                        <div class="flex gap-1">
                            <span class="flex"><img :src="Locationimg" class="me-1" alt="">
                             Город:</span>
                            <div class="font-medium">Ташкент</div>
                        </div>
                        <div class="max-md:hidden gap-1 flex">
                            <span class="flex"><img :src="headset_mic" class="me-1" alt="">
                                78 777 84 84</span>
                        </div>
                        <div class="max-md:hidden gap-1 flex">
                            <span class="flex"><img :src="telegramimg" class="me-1" alt="">
                                Тех. поддержка</span>
                        </div>
                        <div class="max-md:hidden gap-1 flex">
                            <span class="flex"><img :src="shopping_bag" class="me-1" alt="">
                                Стать продавцом</span>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="flex">
                            <span class="flex items-center"><span class="overflow-hidden w-4 h-4 rounded-full flex items-center me-2"><img :src="rulang" class="me-1 w-full h-full" alt=""></span>
                                Русский <img class="ms-2" :src="dropdown" alt=""></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="header h-20 w-full items-center flex">
        <div class="container">
            <div class=" flex">
                <div class="flex  items-center justify-between">
                    <a href="/">
                    <img :src="logo_1" alt="">
                    </a>
                    <button class="bg-[#2CB26D] p-4 mx-4 flex items-center gap-2 font-medium text-white rounded-xl" @click="toggleVisibility" ><img :src="hambuger" class="w-4 h-4" alt="">
                    <span class="hidden xl:block">Все категории</span>
                    </button>
                    <div  class="w-[100vw] h-[100vh] bg-white fixed left-0 top-[128px] pb-[110px] z-0 flex justify-center px-4 border-t z-50" :class="{ 'hidden': isHidden }">
                        <HeaderCat  />
                    </div>
                </div>
              <div class="flex-1 lg:mx-4 relative z-20">
                <div class="flex w-full px-4 items-center  border rounded-xl border-[#DFE2E9] z-30 relative">
                    <img :src="search" class="w-6 h-6" alt="">
                    <div class="w-full flex">
                        <input type="text" class="focus:outline-0 w-full py-4 rounded-xl" @focus="focuses"  placeholder="Введите название товара или ID номер">
                    </div>
                    <img :src="mic" class="w-6 h-6" alt="">
                </div>
              <div class="w-full p-2 pt-8 absolute left-0 top-0 z-20 rounded-lg bg-white border-8 border-white"  :class="{ 'hidden': searchresult }">
                <BaseSearchResults />
              </div>
              </div>
              <div class="fixed w-[100vw] h-[100vh] bg-black top-0 left-0 z-10 opacity-[0.6]" @click="hidefocuses" :class="{ 'hidden': searchresult }"></div>
              <div class="fixed w-[100vw] h-[100vh] bg-black top-0 left-0 z-20 opacity-[0.6]" @click="hideauthoff"  :class="{ 'hidden': auth }"></div>
                <div class=" flex items-center ">
                    <div class="flex items-center max-lg:fixed max-lg:w-full max-lg:p-4 justify-between bottom-0 left-0 max-lg:bg-white max-lg:border-t border-gray-100 gap-4 ">
                      
                            <a href="#" class="flex items-center flex-col">
                            <img :src="menus" alt="" class="w-6 h-6">
                            <span class="text-xs">Сравнивание</span>
                        </a>
                        <a href="#" class="flex items-center flex-col">
                            <img :src="favheart" alt="" class="w-6 h-6">
                            <span class="text-xs text-[#2CB26D]">Избранное</span>
                        </a>
                        <a href="#" class="flex items-center flex-col">
                            <img :src="cartimg" alt="" class="w-6 h-6">
                            <span class="text-xs">Корзина</span>
                        </a>

                        <a href="#" class=" items-center flex-col hidden max-[768px]:flex">
                            <img :src="user" alt="" class="w-6 h-6">
                            <span class="text-xs">Профиль</span>
                        </a>
                        
                    </div>
                        <div class="flex max-[768px]:hidden ms-4">
                            <button @click="hideauth"  class="border text-[#2CB26D] border-[#2CB26D] px-6 py-3 flex items-center gap-2 font-medium  rounded-lg">
                                Войти
                            </button>
                        </div>
                        <div class="overflow-y-auto overflow-x-hidden fixed top-0 left-0 right-0 z-20 justify-center items-center   p-4 " @click="hideauthoff"  :class="{ 'hidden': auth, 'flex': !auth }">
                            <div  @click.prevent="stop">

                            <BaseCardsAuthCard />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
   </div>
</template>
<script setup>
import Locationimg from "@/assets/svg/location_on.svg"; 
import headset_mic from "@/assets/svg/headset_mic.svg"; 
import telegramimg from "@/assets/svg/telegram.svg"; 
import shopping_bag from "@/assets/svg/shopping_bag.svg"; 
import rulang from "@/assets/img/ru.png"; 
import user from "@/assets/svg/user.svg"; 
import dropdown from "@/assets/svg/dropdown.svg"; 
import logo_1 from "@/assets/svg/logo_1.svg";  
import hambuger from "@/assets/svg/menu.svg"; 
import search from "@/assets/svg/search.svg"; 
import mic from "@/assets/svg/mic.svg"; 
import menus from "@/assets/svg/menuS.svg"; 
import favheart from "@/assets/svg/Favorite_light.svg"; 
import cartimg from "@/assets/svg/Basket_alt_3_light.svg"; 

import { ref } from 'vue';

const isHidden = ref(true);
const auth = ref(true);
const searchresult = ref(true);
const focuses = () => {
  searchresult.value = false;
};

const hidefocuses = () => {
  searchresult.value = true;
  
};

const hideauth = () => {
  auth.value = false;
  
};

const hideauthoff = () => {
  auth.value = true;
  
};

const stop = (event) => {
  // Логика обработки клика внутри div
  event.stopPropagation(); // Предотвращаем всплытие события
};
const toggleVisibility = () => {
    isHidden.value = !isHidden.value;

  // Add or remove the 'overflow-hidden' class from the body
  if (!isHidden.value) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
};
</script>
<style>
   
</style>