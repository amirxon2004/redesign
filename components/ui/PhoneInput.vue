<template>
    <div class="w-full relative">
        <div class="absolute h-full px-2 py-1 w-24 flex justify-center items-center">
           <button class="font-medium text-xs flex gap-1 items-center text-gray-600 p-2 bg-gray-100 rounded-xl w-full justify-center"> 
            <img class="w-3" src="@/assets/images/uz.png" alt=""> 
            <span class="text-[12px] flex-1 overflow-hidden">+998</span>
            <!-- <Icon class="text-gray-700 rotate-90" name="icon-angle-right" width="12px" height="12px" /> -->
        </button>
        </div>
        <input class="w-full h-12 pl-24 border rounded-xl px-4 py-3 outline-none text-base focus:border-green-500" type="text" placeholder="-- --- -- --" />
    </div>
</template>