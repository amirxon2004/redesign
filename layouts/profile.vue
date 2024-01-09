<template>
    <MyHeader />
    <div class="container">
        <BaseBreadCrumb />
    <div class="my-10 grid grid-cols-4 gap-5">
       <div class="col-span-1">
        <BaseMenuProfile />
       </div>
        <div class="col-span-3">    
        <NuxtPage />
        </div>
    </div> 
    </div>
    <MyFooter />

</template> 
<script setup> 
 

</script>
<style>
@media not all and (min-width: 1430px) {

.container {
    padding-left: 1rem;
    padding-right: 1rem;
    max-width: 1440px !important;
}
}

.container {
    max-width: 1440px !important;
}
</style>