<template>
    <div class="header_box">
        <img src="@/assets/images/header/logo.png" alt="">
        <div class="btn_box">
            <div class="btn">登录</div>
            <div class="btn register">注册</div>
        </div>
    </div>
</template>
<script setup>
import {ref} from "vue"
console.log(process.env.NODE_ENV)
</script>
<style lang="scss" scoped>
.header_box {
    width: 100%;
    height: 60px;
    position: sticky;
    z-index: 4;
    left: 0;
    top: 0;
    width: 100%;
    height: 60px;
    color: #333;
    box-shadow: 0 15px 15px -7px rgba(0, 0, 0, .3);
     padding: 0 100px;
     box-sizing: border-box;
     display: flex;
     justify-content: space-between;
     align-items: center;
    // background: linear-gradient(to right, #32d0e5 0%, #00aeff);
    opacity: 0.8;
    .btn_box {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
       
        box-sizing: border-box;
        gap: 20px;
        .btn {
            width: 100px;
            height: 34px;
            background: linear-gradient(to right, #32d0e5 0%, #00aeff);
            color: #fff;
            border-radius: 4px;
            text-align: center;
            line-height: 34px;
        }
        .register {
            color: #00aeff;
            background: none;
            border: 1px solid #00aeff;
        }
    }
    img {
        width: 184px;
        height: 41px;
    }
}
</style>