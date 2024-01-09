<template lang="">
    <div class="flex-col flex">
            <label :for="name" class="text-xs font-medium">{{ label }}</label>
        <input :type="type" :name="name" class="border border-slate-300 px-4 py-1.5 w-full rounded-lg my-2" :class="class" :value="value" :placeholder="placeholder">
          </div>
</template>
<script setup>
const props = defineProps(['label', 'placeholder', 'name', 'class', 'value', 'type']);
</script>
<style lang="">
    
</style>