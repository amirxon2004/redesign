<template>
    <div class="f-range relative w-full h-5">
        <div class="h-[5px] rounded bg-gray-300  flex justify-between relative">
            <div class="h-full z-0 bg-green-500  flex justify-end items-center relative rounded-s " :style="{left:left, width:width }"> </div> 
            <input  @input="Update1" @change="Update1" v-model="range1" class="f-slider w-full h-full absolute top-0 left-0 cursor-pointer"  type="range" :max="max" :min="min" :step="step">
            <input  @input="Update2" @change="Update2"  v-model="range2" class="f-slider w-full h-full absolute top-0 left-0 cursor-pointer"  type="range" :max="max" :min="min" :step="step">
        </div>  
    </div>
</template>
<script setup>
const emit =defineEmits(['update:modelValue'])
// PROPS
const props=defineProps({
    modelValue:{
        type:Object,
        default:[]
    },
    max:{
        type:Number,
        default:100
    },
    min:{
        type:Number,
        default:0
    },
    step:{
        type:Number,
        default:1
    }

}) 
const range1 =ref(props.modelValue.from?props.modelValue.from:props.min)
const range2=ref(props.modelValue.to?props.modelValue.to:props.max) 

// WATCH
watch(()=>props.modelValue.from,()=>{  
    let from_val=parseInt(props.modelValue.from?props.modelValue.from:props.min)  
    let to_val=parseInt(props.modelValue.to?props.modelValue.to:props.max)  
    if( from_val<=props.max &&from_val>=props.min && from_val<=to_val){
        range1.value=from_val
    }  
})

watch(()=>props.modelValue.to,()=>{  
    let from_val=parseInt(props.modelValue.from?props.modelValue.from:props.min)  
    let to_val=parseInt(props.modelValue.to?props.modelValue.to:props.max)  
    if( to_val<=props.max &&to_val>=props.min && to_val>=from_val){
        range2.value=to_val
    }   
}) 
 


// COMPUTED
const left=computed(()=>{
    if(  range1.value<range2.value){
        return (range1.value/props.max)*100 +'%';
    }
    else{
        return (range1.value/props.max)*100 +'%';
    } 
})
const width=computed(()=>{
    if( parseInt(range1.value)<=parseInt(range2.value)){
        return ((range2.value-range1.value)/props.max)*100 +'%';
    }
    else{ 
        return 0*100 +'%';
    } 
})

function Update1(e){
    if( parseInt(e.target.value)>= parseInt(range2.value)){
        e.target.value=range2.value
        range1.value=range2.value
        emit('update:modelValue', {from:range1.value, to:range2.value})
    }
    else{
        emit('update:modelValue', {from:range1.value, to:range2.value})
    }
}
function Update2(e){
    if(parseInt(e.target.value)<parseInt(range1.value)){
        e.target.value=range1.value
        range2.value=range1.value
        emit('update:modelValue', {from:range1.value, to:range2.value})
    }
    else{
        emit('update:modelValue', {from:range1.value, to:range2.value})
    }
}
</script> 