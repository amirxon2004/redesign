<template>
  <div class="w-full flex gap-8 items-center">
    <div class="flex custom-checkbox gap-4 items-center" v-for="(item, i) in checkBoxList" :key="i">
      <el-checkbox v-model="item.valid" />
      <div class="flex gap-2 items-center">
        <Icon width="20px" height="20px" :name="item.icon" />
        <span class="text-xs text-black font-semibold">{{ item.text }}</span>
      </div>
    </div>
  </div>

  {{ message_type }}
</template>

<script setup>
const props = defineProps(['message_type']);
import { ref, onMounted } from 'vue';

const checkBoxList = ref([
  {
    icon: "icon-message-text",
    text: "СМС",
    valid: false,
    message_type: 'sms',
  },
  {
    icon: "icon-telegram-plane",
    text: "Телеграм бот",
    valid: false,
    message_type: 'telegram',
  },
  {
    icon: "icon-sms",
    text: "Электронная почта",
    valid: false,
    message_type: 'email',
  },
]);



// onMounted(() => {
//   const types = props.message_type.split(',');

//   checkBoxList.value.forEach(item => {
//     item.valid = types.includes(item.message_type);
//   });
// });
// watch(() => props.message_type, (newValue, oldValue) => {
//   console.log('Prop "message_type" changed:', newValue, oldValue);
//   // Do something with the new value
// });
</script>

<style>
</style>
