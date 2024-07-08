<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
<div class="big_box">
</div>

  
</template>

<style scoped lang="scss">
.big_box {
    width: 100%;
    height: 120vh;
    p {
        color: red;
        font-size: 14px;
    }
}

</style>
