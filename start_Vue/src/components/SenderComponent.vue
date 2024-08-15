<template>
    <div class="component">
        <h1>Sender Component</h1>
        <p>{{ item }}, (R${{ price }})</p>
        <button @click="AddProduct"> adcionar ao carrinho</button>
    </div>
</template>

<script setup>
    import {defineProps, defineEmits} from "vue"

    const props = defineProps({
        item:String,
        price:Number
    })

    const emit = defineEmits(["Added"])

    function AddProduct(){
        emit("Added", props.price)
    }
</script>