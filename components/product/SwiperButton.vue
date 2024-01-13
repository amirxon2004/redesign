<template>
    <button @click="next? swiper.slideNext()  : swiper.slidePrev()">
        <Icon :name="icon" width="14px" height="14px" />
    </button>
</template>
<script setup>
import { useSwiper } from 'swiper/vue'; 
const swiper = useSwiper() 

const props = defineProps({
  next: {
    type: Boolean,
    default:false, 
  },
  icon: {
    type: String,
    default:"icon-angle-left", 
  },

});

</script>