<!--JS-->
<script setup>
import FirstComponent from './components/FirstComponent.vue'
import ComponentData from './components/ComponentData.vue'
import ComponentPrimitiveData from './components/ComponentPrimitiveData.vue'
import ComponentNoPrimitive from './components/ComponentNoPrimitive.vue'
import DataBinding from './components/DataBinding.vue'
import ComponentProps from './components/ComponentProps.vue'
import ListenerComponent from './components/ListenerComponent.vue'
</script>

<!--HTML-->
<template>
  <header>
    Vue
  </header>
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


