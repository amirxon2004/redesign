<template>
    <nav class="w-full app-nav z-10">
        <div class="flex w-[100%] justify-center px-4 bg-white  transition-all ease-in duration-100 z-50" :class="toggle?'fixed top-0 left-0 border-b pt-2 pb-2':'pt-5 pb-1'">
            <div class="f-container flex items-center gap-8">
                <a href="/" class="z-10">
                    <div class="w-[120px] min-w-[120px]">
                        <img class="w-full" src="@/assets/images/logo.png" alt=""> 
                    </div>
                </a>
                <div class="flex-1 flex gap-1 items-center">
                    <CategoryList class="z-10" :active="categoryToggle" :scrolled="toggle" @mouseIn="mouseOver=true">
                            <button class="button max-md:hidden hover-scale" @click="categoryToggle=!categoryToggle" @focusout="!mouseOver?categoryToggle=false:''">
                                <Icon  name="icon-xmark"  width="18px" height="20px" v-if="categoryToggle" />
                                <Icon name="icon-bars-form" width="18px" height="20px" v-else />
                                <span class="max-[1200px]:hidden" >
                                    Katalog
                                </span>
                        </button>
                    </CategoryList>
                    <SearchComponent /> 
                </div>
                <div class="flex items-center max-lg:fixed max-lg:w-full max-lg:p-4 justify-between bottom-0 left-0 max-lg:bg-white max-lg:border-t  border-gray-100" :class="toggle?'gap-8':'gap-4'">
                    <nuxt-link to="/compair" class="flex flex-col items-center cursor-pointer text-gray-700 hover:text-[#2CB26D]">
                        <div class="mb-1 relative h-[24px] w-[24px]">
                            <Icon name="icon-compair" width="24px" height="24px" />
                            <div class="font-bold rounded-full bg-[#2CB26D] w-5 h-5 top-[-8px] right-[-10px] absolute text-white text-[8px] flex justify-center items-center">0</div>
                        </div>
                        <p  class="text-[12px] font-medium" :class="toggle?'max-lg:flex  hidden ':''">Taqqoslash</p>
                    </nuxt-link>
                    <nuxt-link to="/cart" class="flex flex-col items-center cursor-pointer text-gray-700 hover:text-[#2CB26D]">
                        <div class="mb-1  relative h-[24px] w-[24px]">
                            <Icon name="icon-basket" width="24px" height="24px" />
                            <div class="font-bold rounded-full bg-[#2CB26D] w-5 h-5 top-[-8px] right-[-10px] absolute text-white text-[8px] flex justify-center items-center">{{ get_count_all }}</div>
                        </div>
                        <p  class="text-[12px] font-medium text-gray-700" :class="toggle?'max-lg:flex  hidden ':''">Savatcha</p>
                    </nuxt-link>
                    <nuxt-link to="/wishlist" class="flex flex-col items-center  cursor-pointer text-gray-700 hover:text-[#2CB26D]">
                        <div class="mb-1 relative h-[24px] w-[24px]">
                            <Icon name="icon-favorite" width="24px" height="24px" />
                            <div class="font-bold rounded-full bg-[#2CB26D]  w-5 h-5 top-[-8px] right-[-10px] absolute text-white text-[8px] flex justify-center items-center">0</div>
                        </div>
                        <p  class="text-[12px] font-medium" :class="toggle?'max-lg:flex  hidden ':''">Tanlanganlar</p>
                    </nuxt-link>
                </div>
                <div class="relative max-md:hidden">
                    <button class="button outlined hover-scale" @click="set_modal(true)" v-if="!auth">
                        Kirish   
                    </button>
                    <div v-else>
                        <button class="w-10 h-10 rounded-full bg-gray-100 border border-green-500">
                            <img src="@/assets/images/logo.png" alt="">
                        </button>
                    </div>
                </div>
            </div>
        </div> 
        <div class="w-full h-[70px]" v-show="toggle" ></div>
        <ClientOnly>
            <LoginModal />
        </ClientOnly>
        
    </nav>
</template>
<script setup>
import SearchComponent from './nav/SearchComponent.vue'; 
import Button from './ui/Button.vue' 
import LoginModal from './login/LoginModal.vue';

// DATA
const toggle=ref(false)
const mouseUp=ref(false)
const scrollPosition=ref(0)
const categoryToggle=ref(false)
const mouseOver=ref(false) 
const auth=useCookie('auth_token')
 
// STORE
import { useCartStore } from '~/stores/cart';
const cartStore =useCartStore()
const {get_count_all} = storeToRefs(cartStore)


// STORE
import { useAuthStore } from '~/stores/auth'
const authStore = useAuthStore() 
const { set_modal } = authStore

// METHODS

function handleScroll() {
    if(process.client){
    var currentScrollPosition = window.scrollY
    if(currentScrollPosition < scrollPosition.value){ 
        mouseUp.value=true  
    }
    else{  
        mouseUp.value=false
    }
    scrollPosition.value = window.scrollY
    }
    if(scrollPosition.value>150){
        toggle.value=true
    }
    else{
        toggle.value=false
    }
}


// ACTIONS
onMounted(()=>{
    if(process.client){
        window.addEventListener("scroll", handleScroll);
    }
})


</script>