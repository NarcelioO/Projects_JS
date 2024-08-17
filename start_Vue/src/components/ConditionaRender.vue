<template>
    <div class="component">
        <h1>Conditional Render Component</h1>
        <p>Name:{{ name }}</p>
        <p v-if="numberdogs === 1">Have a dog</p>
        <p v-else-if="numberdogs > 1">There are many dogs</p>
        <p v-else>Doesn't have a dog</p>
        
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    name:String,
    numberdogs:Number
})
</script>