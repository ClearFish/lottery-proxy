<template>
    <div class="big_box">代理</div>
</template>
<script setup>
import {userRate} from "@/api/api.js"
import { onMounted } from "vue"
onMounted(async()=>{
    let res = await userRate()
})
</script>