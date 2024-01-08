<template>
    <div class="bg-[#F9F9F9] pt-10">
        <div class="container flex justify-center ">
            <div class=" grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 grid-cols-6 ">
            <div class="max-sm:col-span-1 mb-4 col-span-2 grid max-sm:grid-cols-1 grid-cols-2">
                <ul class="flex flex-col col-span-1">
                <li class="font-medium text-xl mb-5 flex max-sm:justify-center">Покупателям</li>
                <li class="text-slate-500 font-base mb-3 flex max-sm:justify-center">Обратная связь</li>
                <li class="text-slate-500 font-base mb-3 flex max-sm:justify-center">Как сделать заказ</li>
                <li class="text-slate-500 font-base mb-3 flex max-sm:justify-center">О сервисе</li>
            </ul>
            <ul class="col-span-1">
                <li class="font-medium text-xl mb-5 flex max-sm:justify-center">Продавцам</li>
                <li class="text-slate-500 font-base mb-3 flex max-sm:justify-center">Личный кабинет продавца</li>
                <li class="text-slate-500 font-base mb-3 flex max-sm:justify-center">Подключение продавца</li>
                <li class="text-slate-500 font-base mb-3 flex max-sm:justify-center">Сайт дял партнеров</li>
            </ul>
            </div>
            <div class="max-sm:col-span-1 mb-4 col-span-2 grid   max-sm:grid-cols-1 grid-cols-2">
                <ul class="flex flex-col col-span-1">
                <li class="font-medium text-xl mb-5 flex max-sm:justify-center">Покупателям</li>
                <li class="text-slate-500 font-base mb-3 flex max-sm:justify-center">Обратная связь</li>
                <li class="text-slate-500 font-base mb-3 flex max-sm:justify-center">Как сделать заказ</li>
                <li class="text-slate-500 font-base mb-3 flex max-sm:justify-center">О сервисе</li>
            </ul>
            <ul class="col-span-1">
                <li class="font-medium text-xl mb-5 flex max-sm:justify-center ">Информация</li>
                <li class="text-slate-500 font-base mb-3 flex max-sm:justify-center">Пользовательское соглашение </li>
                <li class="text-slate-500 font-base mb-3 flex max-sm:justify-center">Политика конфиденциальности</li>
                <li class="text-slate-500 font-base mb-3 flex max-sm:justify-center">Определения</li>
                <li class="text-slate-500 font-base mb-3 flex max-sm:justify-center">Техническая инструкция</li>

            </ul>
            </div>
           
            <div class="lg:ms-10 col-span-2 max-sm:col-span-1 ">
            <div class="flex flex-col">
                <h1 class="text-xl font-medium max-sm:text-center">Будьте в курсе скидок на электронику, товары для детей и для дома</h1>
             <div class="flex items-center gap-5 my-5 max-sm:flex-col">
                <div class="bg-white w-3/5 max-sm:w-full border border-slate-300 rounded-xl flex items-center">
                    <img :src="mail_outline" class="w-6 h-6 ms-3" alt="">
                    <input type="text" class="focus:outline-0 w-full rounded-xl py-3 px-2" placeholder="Введите вашу эл. почту">
                </div>
                <button class="px-6 py-3 bg-[#2CB26D] text-white rounded-lg w-2/5 max-sm:w-full">Подписаться</button>
             </div>
             <ul class="flex flex-col gap-2">
                <li class="text-lg "><span class="font-medium text-slate-500 ">СТИР:</span> 309 095 650</li>
                <li class="text-lg "><span class="font-medium text-slate-500 ">МФО:</span> 01057, ALLIANCE BANK Шайхантохурский филиал</li>
                <li class="text-lg "><span class="font-medium text-slate-500 ">ХР:</span> 2020 8000 4054 6738 5002</li>
                <li class="text-lg "><span class="font-medium text-slate-500 ">Цель оплаты:</span> В соответствии с публичной офертой залог был перенесен</li>
             </ul>
            </div>
        </div>
        </div>
        
      
    </div>
       <div class="flex items-center justify-between mt-3  py-6 bg-[#F5F5F5]">
        <div class="container">
            <div class="grid max-sm:grid-cols-1 grid-cols-2 gap-5 max-sm:pb-24">
                <div class="col-span-1">
                    <div class="flex flex-col">
                        <span class="text-slate-500 text-base ">
                            © 2021-2022 — OOO «Smart Marketplace». Все права защищены.
                        </span>
                        <a href="#" class="text-[#2CB26D] text-base ">Проблемы с использованием сайта?</a>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="flex items-center justify-end">
                        <div class="flex gap-5">
                            <img :src="scetchik" alt="">
                            <img :src="soc" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
    
</template>
<script setup>

import mail_outline from "@/assets/svg/mail_outline.svg"; 
import scetchik from "@/assets/img/scetchik.png"; 
import soc from "@/assets/svg/soc.svg"; 

</script>
<style>
    
</style>