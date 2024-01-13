
import type { Link } from '@element-plus/icons-vue/dist/types';

import type { InfoFilled } from '@element-plus/icons-vue/dist/types';

<template>
    <div class="flex flex-col gap-2 max-w-[340px] border border-[#DFE2E9] rounded-[10px] p-4" style="width:340px">
      <div class="flex flex-col gap-2" v-for="link in links" :key="link.title">
        <h1 class="font-extrabold text-lg">{{ link.title }}</h1>
        <ul>
           <li v-for="(info,i) in link.infoes" @click="setDesc(info.desc, info.id);activeTab=link.id;activeIndex=i" :key="info.id">
          <span class="text-sm text-slate-500 leading-3 cursor-pointer mytabs" :class="{ 'active': link.id === activeTab && i == activeIndex }">{{ info.title }}</span>
        </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  const activeIndex = ref(0);
  const activeTab = ref(1);
  const activeDesc = ref(null);
  const emit = defineEmits();
  const links = [
    {
        id: 1,
        title: "Ro’yxatdan o’tish",
        infoes: [
            {
                id: 1,
                title: "Qanday buyurtma beriladi?",
                desc: "123",
                parent_id:1
            },
            {
                id: 2,
                title: "Qanday buyurtma beriladi?",
                desc: "test",
            },
            {
                id: 3,
                title: "Qanday buyurtma beriladi?",
                desc: "test2",
            },
        ],
    },
    {
        id: 2,
        title: "Ro’yxatdan o’tish kerak",
        infoes: [
            {
                id: 1,
                title: "Qanday buyurtma beriladi2?",
                desc: "1234",
            },
        ],
    },
];
const setDesc = (desc, id) =>{
    activeIndex.value = id;
    activeDesc.value = desc;
    emit('setDescParent',activeDesc.value)
}
onMounted(()=>{
   let active = links[0];
   emit('setDescParent',active.infoes[0]['desc'])
})
  </script>
  
  <style scoped>
  .router-link-exact-active {
    font-weight: 600;
  }
.mytabs:hover {
    opacity:0.7 ;
}
  .active {
    font-weight:600;
    opacity:1 !important;

  }
  </style>
  