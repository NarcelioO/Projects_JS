<template>
    <div class="component">
        <h1>No Primitive Reactive Data</h1>
        <p>Name: {{ person.name }} | Age:{{ person.age }}</p>
        <button @click="Birthday">Have a Birthday</button>
        <button @click="ChangeName">Change Name</button>
    </div>
</template>
<script setup>
import {reactive} from "vue"

const person = reactive({name:"Ana", age:27})

const Birthday = () =>{
   person.age+=1
}
const ChangeName = () =>{
    person.name = "Ana Maria"
}
</script>