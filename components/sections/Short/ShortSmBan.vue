<template>
    <div class="my-10">
        <div class="flex items-center justify-between mb-5">
            <div class="flex flex-col gap-2">
                <h1 class="text-2xl">{{ cattitle }}</h1>
                <span class="text-base text-slate-500">{{ catdesc }}</span>
            </div>
            <BaseBtnCatbtn :catlink="catlink" />
        </div>
        <div class="my-5 grid gap-6  max-sm:grid-cols-1  max-md:grid-cols-2 max-lg:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <a :href="item.href" v-for="item in smban" :key="item.id" class="col-span-1">
                <img :src="item.src" style="height: 520px;" class="w-full object-cover rounded-2xl" alt="">
            </a>
            <BaseCardsShortCard :items="LastPost" />
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['catlink', 'cattitle', 'catdesc', 'items','smban']);
const LastPost = ref(props.items.slice(0, 3)); // Выберите другие элементы, которые вы хотите отобразить


</script>
<style>
    /* Lamborghini r8 270 */
</style>