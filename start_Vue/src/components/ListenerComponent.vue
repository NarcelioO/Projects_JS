<script setup>
import SenderComponent from "./SenderComponent.vue"
import {ref} from "vue"

const total = ref(0)

const UpdateTotal=(p)=>{
    const valor = total.value + p
    total.value = +valor.toFixed(2)
}

</script>

<template>
    <div class="component">
        <h1>Listener Component</h1>
        <p>Total:R${{ total }}</p>
        <div class="ProductsList">
            <SenderComponent item="Item 1" :price="1.99"  @added="UpdateTotal"/>
            <SenderComponent item="Item 2" :price="15.99" @added="UpdateTotal"/>
            <SenderComponent item="Item 3" :price="12.99" @added="UpdateTotal"/>
        </div>
    </div>
</template>


<style scoped>
    .ProductsList{
        display: flex;
        justify-content: center;
    }

</style>