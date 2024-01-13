<template>
    <div class="flex rounded-xl items-center">
        <button class="min-w-10 w-10 h-10 bg-gray-200 rounded-l-xl flex justify-center items-center p-1" @click="Decrement">
            <Icon name="icon-minus" width="14px" height="14px" />
        </button>
        <div class="flex-1">
            <input v-model="count" @input="Change" type="number" class="w-full h-10 border border-gray-200 outline-none text-center text-sm font-medium [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none">
        </div>
        <button class="min-w-10 w-10 h-10 bg-gray-200 rounded-r-xl flex justify-center items-center p-1" @click="Increment">
            <Icon name="icon-plus" width="14px" height="14px" />
        </button>  
    </div>
</template>
<script  setup>
// DATA
const emit =defineEmits(['update:modelValue', 'change'])
const props = defineProps({ 
    modelValue:[Number, String], 
    max:{type:Number, default:5000},
    min:{type:Number, default:0},

});
const count= ref(1)
// WATCH
watch(()=>count.value,()=>{  
    emit('change', count.value)
    emit('update:modelValue', count.value)
}) 

// METHODS
function Increment(){
    if(count.value<props.max){
        count.value=count.value+1 
    }
}
function Decrement(){
    if(count.value>props.min){
        count.value=count.value-1 
    }
}
function Change(e){ 
    emit('change', e.target.value)
    if(e.target.value>props.max){
        count.value=props.max
    }
    if(e.target.value<props.min){
        count.value=props.min
    }
}

onMounted(()=>{
    console.log(props.modelValue)
    count.value= props.modelValue!=undefined ? props.modelValue : 0
})


</script>