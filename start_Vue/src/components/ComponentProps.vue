<template>
    <div class="component">
        <h1>Component with props</h1>
        <p>{{ item }} (R${{ price.toFixed(2) }})</p>
    </div>
</template>

<script setup>
    import {defineProps} from "vue"

    defineProps({
        item:String,
        price:Number
    })

    

</script>