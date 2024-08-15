<!-- <script>
//Comment All CTRL + ;


//options API
// export default{
//     data:function(){
//         return{
//             ProductName:"Book",
//             ProductCode:"#342"
//         }
//     }
// }


//composition API
export default{
    setup:()=>{
     const ProductName = "Pencil"
     const ProductCode = "#123"
     return{ProductCode,ProductName}
    }
}
</script> -->

<script setup>
    const ProductName = "Pencil"
    const ProductCode = "#123"
</script>
<template>
    <div class="component">
        <h1>Component with data</h1>
        <p>Nome: {{ProductName}} - {{ ProductCode }}</p>

    </div>
</template>

<style scoped>

</style>