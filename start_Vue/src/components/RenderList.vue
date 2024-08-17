<template>
    <div class="component">
        <h1>Render List</h1>
        <p>Name:{{ name }}</p>
        <p v-show="dogs.length === 0">Não tem cachorros</p>
        <ul>
            <li v-for="dog in dogs">
                Nome: {{ dog.name }} | Age: {{ dog.age }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    name:String,
    dogs:Array
})
</script>

<style scoped>
    ul{
        margin: 0px;
        padding: 0px;

    }
    li{
        list-style:none;
        text-align: center;
        font-size: large;
    }
</style>