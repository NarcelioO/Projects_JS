<!--JS-->
<script setup>
import FirstComponent from './components/FirstComponent.vue'
import ComponentData from './components/ComponentData.vue'
import ComponentPrimitiveData from './components/ComponentPrimitiveData.vue'
import ComponentNoPrimitive from './components/ComponentNoPrimitive.vue'
import DataBinding from './components/DataBinding.vue'
import ComponentProps from './components/ComponentProps.vue'
import ListenerComponent from './components/ListenerComponent.vue'
import ComputedProps from './components/ComputedProps.vue'
import WatchedProps from './components/WatchedProps.vue'
import ConditionaRender from './components/ConditionaRender.vue'
import RenderList from './components/RenderList.vue'
import ButtomSlot from './components/ButtomSlot.vue'

const dogsJohn=[
    {name: "joão", age:3},
    {name:"Maria", age:2},
    {name:"Lupi", age:5}
  ]
</script>

<!--HTML-->
<template>
  <header>
    Vue
  </header>
  <ButtomSlot>
    <template v-slot:icon>
    <svg xmlns="http://www.w3.org/2000/svg" width="24"height="24"viewBox="0 0 24 24"fill="currentColor"class="icon icon-tabler icons-tabler-filled icon-tabler-home">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" />
    </svg>
    </template>
    <template v-slot:text>
      Home
    </template>
  </ButtomSlot>
  <RenderList name="joão" :dogs="dogsJohn"/>
  <ConditionaRender name="Narcelio" :numberdogs="0"/>
  <WatchedProps/>
  <ComputedProps/>
  <ListenerComponent/>
  <ComponentProps item="Borracha" v-bind:price="2.52"/>
  <DataBinding/>
  <ComponentData/>
  <FirstComponent/>
  <ComponentPrimitiveData/>
  <ComponentNoPrimitive/>
</template>
 

<!--CSS-->
<!--"scoped" limits the style to just this componente -->
<style scoped>

</style>


