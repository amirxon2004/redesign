<template>
    <div class="relative">
        <slot></slot>
        <div class="w-[100vw] h-[100vh] bg-white fixed left-0 top-[112px] pb-[110px] z-0 flex justify-center px-4 border-t"
            :class="{ '!hidden': !props.active, 'top-[65px]': props.scrolled }">
            <div class="f-container h-full flex gap-4">

                <div class="w-[300px] h-full border-r">
                    <div class="scroll h-full px-1 py-2 default">
                        <ul>
                            <li v-for="(item,i) in CategoryList" :key="i">
                                <nuxt-link to="/product"
                                    class="py-2 px-3 rounded-xl flex items-center text-sm font-medium gap-3 text-gray-700 justify-between hover:!text-green-500 hover:bg-green-100">
                                    <div class="flex items-center gap-3">
                                        <div class="w-4 h-4 min-w-4">
                                            <Photo class="w-full" :uid="item.icon" />
                                        </div>
                                        {{item.name}}  
                                    </div>
                                    <Icon name="icon-angle-right" class="text-gray-400" width="14px" height="14px" />
                                   
                                   
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex-1 py-3 px-2 h-full scroll default">
                    <div class="flex items-center gap-2 mb-4">
                        <h1 class="text-lg font-bold text-gray-700">Kategoriya 1 </h1>
                        <Icon name="icon-angle-right" class="text-gray-700" width="16px" height="16px" />
                    </div>
                    <div class="grid grid-cols-4 gap-4">
                        <div class="col-span-1" v-for="i in 10" :key="i">
                            <div class="flex items-center mb-2">
                                <h1 class="text-sm font-bold text-gray-600">Kategoriya {{ i }} </h1>
                            </div>
                            <div class="w-full">
                                <ul>
                                    <li v-for="i in 5" :key="i">
                                        <nuxt-link to="/product"
                                            class="mb-1 py-1 rounded-xl flex items-center text-sm  gap-3 text-gray-400 font-medium justify-between hover:!text-green-500">
                                            <div class="flex items-center gap-3">
                                                Kategoriya {{ i }}
                                            </div>
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <pre>
                    <!-- {{ CategoryList }} -->
                </pre>

                </div>
               
            </div>
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    active: {
        type: Boolean,
        default: false
    },
    scrolled: {
        type: Boolean,
        default: false
    }
});


// STORE
import { useDictionaryStore } from '@/stores/dictionary';
const dictionaryStore = useDictionaryStore()
const { categories, regions } = dictionaryStore

// CategoryList
const CategoryList = computed(() => {
    let data = []
    if (categories && categories.length) {
        categories.forEach(element => {
            if (element.parent_id == 121) {
                data.push({
                    ...element,
                    child: []
                })
            }
        });
        data.forEach(element1 => {
            categories.forEach(element2 => {
                if (element2.parent_id == element1.id) {
                    element1.child.push({
                        ...element2,
                        child: []
                    })
                }
            });
        })
        data.forEach(element1 => {
            if (element1.child && element1.child.length) {
                element1.child.forEach(element2 => {
                    categories.forEach(element3 => {
                        if (element3.parent_id == element2.id) {
                            element2.child.push(element3)
                        }
                    });
                })
            }
        })
        return data
    }
})


// WATCH
watch(() => props.active, () => {

    if (process.client) {
        if (props.active) {
            document.body.style.overflowY = 'hidden';
        }
        else {
            document.body.style.overflowY = '';
        }
    }
})



</script>