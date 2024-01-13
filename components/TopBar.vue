<template>
    <div class="w-full flex justify-center px-4 py-2 bg-[#203E2F] dark:bg-black">
        <div class="f-container flex justify-between">
            <div class="flex items-center gap-8">
                <location-changer /> 
                <a href="#" class="text-white text-xs font-medium flex items-center gap-2 max-md:hidden"><Icon name="icon-phone" /> +998 (99) 878-07-87</a>
                <a href="#" class="text-white text-xs font-medium flex items-center gap-2 max-md:hidden"><Icon name="icon-telegram" /> Yordam markazi</a>
                <a href="#" class="text-white text-xs font-medium flex items-center gap-2 max-md:hidden"><Icon name="icon-shopping-bag-solid" class="text-green-500" /> Smatr-marketda soting</a>
            </div>
            <div class="flex items-center gap-3">
                <lang-changer />
            </div>
        </div>
    </div>
</template>