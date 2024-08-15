<template>
    <div class="component">
        <h1>Primitive Reactive  Data</h1>
        <p>Name: {{ name }} | Age:{{ age }}</p>
        <button v-on:click="Birthday">Have a Birthday</button>
        <button @click="ChangeName">Change Name</button>
    </div>
</template>
<script setup>
import {ref} from 'vue'

    const name = ref("Ana")
    const age = ref(27)

    const Birthday = () =>{
        age.value+=1
    }
    const ChangeName = () =>{
        name.value = "Ana Maria"
    }
</script>