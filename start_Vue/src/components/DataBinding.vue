<template>
    <div class="component">
        <h1>Componet with data binding</h1>
        <div>{{ valor }}</div>
        <!-- <input type="text" v-bind:value="valor" v-on:input="(e)=> valor = e.target.value"> -->

        <input type="text" v-model="valor" >

    </div>
</template>

<script setup>
import {ref} from 'vue'

const valor = ref("")
</script>