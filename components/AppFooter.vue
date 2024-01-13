<template>
    <div class="w-full">
        <section class="flex justify-center px-8 py-10 w-full " >
            <div class="f-container grid grid-cols-8 gap-4 gap-y-8 max-lg:grid-cols-6 max-md:grid-cols-4 max-sm:grid-cols-2"> 
                <div class="col-span-2">
                    <h1 class="text-sm font-bold text-gray-700 mb-4">Biz haqimizda</h1>
                    <div class="flex flex-col gap-3">
                        <nuxt-link to="/" class="text-sm text-gray-600 hover:text-[#2CB26D]">Qayta aloqa</nuxt-link>
                        <nuxt-link to="/" class="text-sm text-gray-600 hover:text-[#2CB26D]">Sotib olish</nuxt-link>
                        <nuxt-link to="/" class="text-sm text-gray-600 hover:text-[#2CB26D]">Loyiha haqida</nuxt-link>
                        <nuxt-link to="/" class="text-sm text-gray-600 hover:text-[#2CB26D]">Hamkorlar uchun</nuxt-link>
                    </div>
                </div>
                <div class="col-span-2">
                    <h1 class="text-sm font-bold text-gray-700 mb-4">Foydalanuvchilarga</h1>
                    <div class="flex flex-col gap-3">
                        <nuxt-link to="/" class="text-sm text-gray-600 hover:text-[#2CB26D]">Foydalanuvchi shartnomasi</nuxt-link>
                        <nuxt-link to="/" class="text-sm text-gray-600 hover:text-[#2CB26D]">Maxfiylik siyosati</nuxt-link>
                        <nuxt-link to="/" class="text-sm text-gray-600 hover:text-[#2CB26D]">Ta'riflar</nuxt-link>
                        <nuxt-link to="/" class="text-sm text-gray-600 hover:text-[#2CB26D]">Texnik yo‘riqnoma</nuxt-link>
                        
                    </div>
                </div>
                <div class="col-span-2">
                    <h1 class="text-sm font-bold text-gray-700 mb-4">Tadbirkorlarga</h1>
                    <div class="flex flex-col gap-3">
                        <nuxt-link to="/" class="text-sm text-gray-600 hover:text-[#2CB26D]">Sotuvchining kabineti</nuxt-link>
                        <nuxt-link to="/" class="text-sm text-gray-600 hover:text-[#2CB26D]">Sotuvchini ulash</nuxt-link>
                        <nuxt-link to="/" class="text-sm text-gray-600 hover:text-[#2CB26D]">SmartMarket da sotish</nuxt-link>
                        <nuxt-link to="/" class="text-sm text-gray-600 hover:text-[#2CB26D]">Texnik yordam</nuxt-link>
                    </div>
                </div>
                <div class="col-span-2 row-span-2">
                    <div class="mb-4">
                        <nuxt-link to="/">
                            <div class="w-[120px] min-w-[120px]">
                                <img class="w-full" src="@/assets/images/logo.png" alt=""> 
                            </div>
                        </nuxt-link>
                    </div> 
                    <div class="w-full mb-4">
                        <p class="text-sm text-gray-500 mb-2">STIR: <span class="font-bold text-gray-700">309 095 650</span> </p>
                        <p class="text-sm text-gray-500 mb-2">MFO: <span class="font-bold text-gray-700">01095, ALLIANCE BANK ATB</span> </p>
                        <p class="text-sm text-gray-500 mb-2">XR: <span class="font-bold text-gray-700">2020 8000 9054 6738 5002</span> </p>
                        <p class="text-sm text-gray-500 mb-2">To‘lov maqsadi: <span class="font-bold text-gray-700">Ommaviy ofertaga asosan garov puli ko‘chirildi</span> </p>
                    </div>
                    <div class="flex items-end gap-4">
                        <img class="w-16" src="@/assets/images/qrcode.png" alt="">
                        <img class="w-16" src="@/assets/images/tasix.png" alt="">
                    </div>
                </div>
                <div class="col-span-2">
                    <h1 class="text-sm font-bold text-gray-700 mb-4">Tolov usullari</h1>
                    <div class="flex items-center  gap-2 flex-wrap">
                        <a href="#" class="h-6">
                            <img class="w-full" src="@/assets/images/oilacredit.png" alt="">
                        </a> 
                        <a href="#" class="h-6">
                            <img class="w-full" src="@/assets/images/realpay.png" alt="">
                        </a> 
                    </div>
                </div> 
                <div class="col-span-2">
                    <h1 class="text-sm font-bold text-gray-700 mb-4">Ilovani yuklab olish </h1>
                    <div class="flex gap-2">
                        <a href="#">
                            <img class="h-8" src="@/assets/images/appstore.png" alt="">
                        </a>
                        <a href="#">
                            <img class="h-8" src="@/assets/images/googleplay.png" alt="">
                        </a>
                    </div>  
                </div> 
                <div class="col-span-2">
                    <h1 class="text-sm font-bold text-gray-700 mb-4">Biz ijtimoiy tarmoqlarda</h1>
                    <div class="flex items-center  gap-2 flex-wrap">
                        <a href="#" class="h-8 w-8">
                            <img class="w-full" src="@/assets/images/instagram.png" alt="">
                        </a>
                        <a href="#" class=" h-8 w-8">
                            <img class="w-full" src="@/assets/images/telegram.png" alt="">
                        </a> 
                        <a href="#" class=" h-8 w-8">
                            <img class="w-full" src="@/assets/images/facebook.png" alt="">
                        </a> 
                        <a href="#" class=" h-8 w-8">
                            <img class="w-full" src="@/assets/images/youtube.png" alt="">
                        </a> 
                    </div>
                </div>  
            </div>
        </section>
        <section class="flex justify-center px-8 w-full">
            <div class="f-container flex justify-between gap-3 py-4 border-t border-gray-100">
                <div>
                    <p class="text-gray-400 text-sm">© 2021-2022 — OOO «Smart Marketplace». Все права защищены.</p>
                </div>
                <div>
                    <p class="text-[#2CB26D] text-sm font-bold">Проблемы с использованием сайта?</p>
                </div>
            </div>
        </section>
    </div>
</template>