<template>
    <div>
        <div class="w-full relative overflow-hidden rounded-xl">
            <Swiper class="relative" @swiper="getMainRef" :modules="[SwiperAutoplay]" :slides-per-view="1" :loop="true" :autoplay="{ delay: 8000, disableOnInteraction: true }">
                <SwiperSlide v-for="(item, i) in data" :key="i" class="z-0">
                    <div class="w-full !h-[450px]  rounded-xl flex justify-center items-center overflow-hidden"> 
                        <Photo :uid="item.image" class="rounded-xl"  />
                    </div>
                </SwiperSlide> 
            </Swiper>
            <button @click="_pre" class="top-[50%] absolute left-1 z-10 h-8 w-8 p-1 flex justify-center items-center rounded-full bg-gray-50">
              <Icon name="icon-angle-left" />
            </button>
            <button @click="_next" class="top-[50%] absolute right-1 z-10 h-8 w-8 p-1 flex justify-center items-center rounded-full bg-gray-50">
              <Icon name="icon-angle-right" />
            </button>
        </div>   
        <div class="w-full relative mt-4">
            <Swiper  class="relative" @swiper="getControlnRef"  :modules="[]"  slides-per-view="auto" :space-between="8">
                <SwiperSlide v-for="(item, i) in data"  :key="i" class="max-w-[80px]">
                    <div @click="slideTo(i)" class="w-[80px] h-[80px] bg-gray-200 rounded-xl overflow-hidden cursor-pointer" :class="index==i?'border border-green-500':''">
                        <!-- <img class="w-full h-full object-cover" src="@/assets/images/product1.jpg" alt=""> -->
                        <Photo :uid="item.image" class="w-full h-full object-cover"  />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    
    </div>
</template>

<script setup> 
// PROPS
const props=defineProps({
    data:{
        type:Array,
        default:[]
    },  
})

// COMPUTED
const len=computed(()=>{
  return props.data.length
})

// DATA
const mainSwiper = ref(null)
const controlSwiper=ref(null)
const index=ref(1)

// METHODS
function getMainRef (swiperInstance) {
  mainSwiper.value = swiperInstance
}
function getControlnRef (swiperInstance) {
  controlSwiper.value = swiperInstance
}

function _next () {
  mainSwiper.value.slideNext()  
  index.value=index.value+1
  if(index.value==len.value+1){
    index.value=1
    controlSwiper.value.slideTo (0) 
  }
  else{
    controlSwiper.value.slideNext() 
  }

}
function _pre () {
  mainSwiper.value.slideNext()  
  index.value=index.value-1
  if(index.value==0){
    index.value=len.value
    controlSwiper.value.slideTo(len.value) 
  }
  else{
    controlSwiper.value.slideTo(index.value) 
  }
}

function slideTo (i) {
  mainSwiper.value.slideTo(i)  
  index.value=i 

}


</script>

<style>
.swiper-slide {
    width: 100%;
}
</style>
