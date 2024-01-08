<template >
    <div class="py-10">
        <div class=" grid grid-cols-12 gap-4 ">
           <div class="col-span-8">
            <img :src="iphone" class="object-cover w-full rounded-2xl" style="height: 400px;" alt="">
           </div>
           <div class="col-span-4">
            <img :src="carwash" class="object-cover w-full rounded-2xl" style="height: 400px;" alt="">

           </div>
        </div>
    </div>
</template>
<script setup>
import iphone from "@/assets/img/iphone.png"; 
import carwash from "@/assets/img/carwash.png"; 

</script>
<style >
    
</style>