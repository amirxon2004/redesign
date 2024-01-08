<template>
    <div class="my-10">
        <div class="flex items-center justify-between mb-5">
            <div class="flex flex-col gap-2">
                <h1 class="text-2xl">{{ cattitle }}</h1>
                <span class="text-base text-slate-500">{{ catdesc }}</span>
            </div>
          <BaseBtnCatbtn :catlink="catlink" />
        </div>
        <div class=" my-5 grid gap-6  max-sm:grid-cols-1  min-sm:grid-cols-2 max-md:grid-cols-2  max-[1300px]:grid-cols-3   max-[1000px]:grid-cols-2  xl:grid-cols-4">
            <BaseCardsShortCard :items="items" />
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['catlink', 'cattitle', 'catdesc', 'items']);

</script>
<style>
    /* Lamborghini r8 270 */
</style>