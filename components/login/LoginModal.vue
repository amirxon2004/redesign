<template>
    <div class=" overflow-y-auto overflow-x-hidden fixed top-0  left-0 z-50  justify-center items-center w-full h-full p-4" :class="modal ? 'flex' : 'hidden'">
        <div class="relative bg-white z-10 rounded-xl w-full max-w-[400px]">
            <div class="w-full p-5 pb-0 flex justify-between items-start gap-2"> 
                <button @click="set_modal(false)" type="button"
                    class="end-2.5 text-gray-400 bg-gray-100 hover:bg-green-200 hover:text-green-800 rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            </div>
            <div class="w-full p-6 pt-2">
                <AplicationAuth />
                <div class="w-full mt-8 relative flex justify-center">
                    <p class="bg-white p-4 text-sm relative z-[1] font-bold text-gray-500">Yoki</p>
                    <div class="absolute top-0 left-0 w-full h-full flex items-center z-0">
                        <div class="w-full border-b"></div>
                    </div>
                </div>
                <div class="w-full grid grid-cols-2 gap-2">
                    <div
                        class="col-span-1 p-4 rounded-xl border cursor-pointer flex justify-center items-center hover:bg-green-100 hover:border-green-500">
                        <img class="h-5" src="@/assets/images/e-imzo.png" alt="">
                    </div>
                    <div
                        class="col-span-1 p-4 rounded-xl border cursor-pointer flex justify-center items-center hover:bg-green-100 hover:border-green-500">
                        <img class="h-5" src="@/assets/images/oneid.png" alt="">
                    </div>
                    <div
                        class="col-span-1 p-4 rounded-xl border cursor-pointer text-center font-bold text-sm text-gray-600 flex items-center  justify-center hover:bg-green-100 hover:border-green-500">
                        <img class="mr-3 h-5" src="@/assets/images/faceid.png" alt="">
                        Face-ID
                    </div>
                    <div
                        class="col-span-1 p-4 rounded-xl border cursor-pointer text-center font-bold text-xs    text-gray-600 flex items-center  justify-center hover:bg-green-100 hover:border-green-500">
                        <img class="mr-3 h-5" src="@/assets/images/authseller.png" alt="">
                        Sotuvchi kabineti
                    </div>
                </div>
                <div class="w-full mt-6">
                    <p class="text-center text-sm text-gray-500">
                        Avtotizatsiyadan o'tish orqali siz <span class="text-primary">shaxsiy ma'lumotlarni qayta ishlash
                            siyosatiga</span> rozilik bildirasiz
                    </p>
                </div>
            </div>
        </div>
        <div @click="set_modal(false)" class="absolute w-full h-full bg-black opacity-[0.5] left-0 top-0 z-0"></div>
    </div>
       
    


</template>
<script setup> 
import AplicationAuth from './AplicationAuth.vue'; 

// STORE
import { useAuthStore } from '~/stores/auth'
const authStore = useAuthStore()
const { modal } = storeToRefs(authStore)
const { set_modal } = authStore

// DATA
const authtype = ref('phone')  
</script>