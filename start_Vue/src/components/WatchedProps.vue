<template>
    <div class="component">
        <h1>Watched Props Component</h1>
        <p>{{ age }}</p>
        <label for="">Birth:</label>
        <input type="number" v-model="YearBirth" min="1900">
        <label for="">Current Year:</label>
        <input type="number" v-model="CurrentYear" min="2000">
    </div>
</template>


<script setup>
import {ref} from "vue"
//import {watch} from 'vue'
import {watchEffect} from 'vue'

const YearBirth =ref(1900)
const CurrentYear=ref(2000)
const age = ref(0)

// watch(CurrentYear,(Year)=>{
//     age.value = Year-YearBirth.value
// })
// watch(YearBirth,(Year)=>{
//     age.value = CurrentYear-Year
// })


watchEffect(()=>{
    age.value = CurrentYear.value - YearBirth.value
})
</script>