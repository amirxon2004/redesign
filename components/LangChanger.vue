<template>
    <div class="relative">

        <button ref="usermbutton"  @click="toggle=!toggle" @focusout="!mousein?toggle=false:''" class="flex items-center gap-2" type="button">
            <div class="h-[18px] w-[18px] rounded-full overflow-hidden">
                <img class="w-full h-full object-cover " src="@/assets/images/uz.png" alt=""> 
            </div>
            <div class="font-bold text-white h-4 flex items-center  text-xs mt-[2px]">
                O'z
            </div>
        </button>

        <!-- Dropdown menu -->
        <div @mouseenter="mousein=true" @mouseleave="MouseLeave()" :class="toggle?'visible':'hidden'"  class="z-10 py-1  w-16 absolute left-0 top-6 bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600">
            <ul class="text-sm text-gray-700 dark:text-gray-200 ">
                <li class="px-2 py-1  flex items-center gap-2 text-xs font-bold text-gray-500 cursor-pointer hover:bg-blue-50">
                    <img class="w-4 h-4 roundex-xl" src="@/assets/images/uz.png" alt=""> Uz
                </li> 
                <li class="px-2 py-1 flex items-center gap-2 text-xs font-bold text-gray-500 cursor-pointer hover:bg-blue-50">
                    <img class="w-4 h-4 roundex-xl" src="@/assets/images/ru.png" alt=""> Ru
                </li> 
            </ul> 
        </div>

    </div>
</template>
<script setup>   
// DATA
 
const toggle=ref(false)
const mousein=ref(false)
const usermbutton=ref(null)


// METHODS
 
function MouseLeave(){
    mousein.value=false
    usermbutton.value.focus()
}

</script>