<template>
    <div class="component">
        <h1>Computed Props Component</h1>
        <p>{{ age }}</p>
        <label for="">Birth:</label>
        <input type="number" v-model="YearBirth" min="1900">
        <label for="">Current Year:</label>
        <input type="number" v-model="CurrentYear" min="2000">
    </div>
</template>


<script setup>
import {ref, computed} from "vue"

const YearBirth =ref(0)
const CurrentYear=ref(0)

const age = computed(()=>{
    return CurrentYear.value - YearBirth.value
})
</script>