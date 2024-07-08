<template>
    <div class="footer_box">
        <div class="effective_area">
            <div class="container">
                <div class="top_cont">
                    <div class="left_con">
                        <div class="list">
                            <div class="list_item" v-for="(item,index) in linkList" :key="index">
                                <p class="title">{{item.title}}</p>
                                <p class="link" v-for="(ite,inx) in item.lists" :key="inx">{{ite.name}}</p>
                            </div>
                        </div>
                        <div class="bottom_btn">
                            <div class="btn">
                                <p>在线客服</p>
                            </div>
                             <div class="btn">
                                <p>下载专区</p>
                            </div>
                        </div>
                    </div>
                    <div class="license_box">
                        <p class="title">牌照</p>
                        <img src="@/assets/images/footer/pz.jpg" alt="">
                    </div>
                    <div class="third_box">
                        <div class="resposty">
                            <p class="title">博彩责任</p>
                            <div class="list_box">
                                <div 
                                    class="list_item" 
                                    v-for="(item,index) in resImg" 
                                    :style="{backgroundPosition:item.address}"
                                    :key="index">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {ref} from "vue"
const linkList = ref([
    {
        title:'关于我们',
        lists:[
            {name:'大法888',link:''},
            {name:'联系我们',link:''},
            {name:'合作我们',link:''}
        ]
    },
    {
        title:'使用帮助',
        lists:[
            {name:'存款流程',link:''},
            {name:'取款流程',link:''}
        ]
    },
    {
        title:'技术支持',
        lists:[
            {name:'常见问题',link:''}
        ]
    },
    {
        title:'产品下载',
        lists:[
            {name:'大法888移动端',link:''}
        ]
    }
])
const resImg = ref([
    {name:'18+',address:'-16px -12px',hoverAddress:'-16px -48px'}
])
</script>
<style lang="scss" scoped>
.footer_box {
    width: 100%;
    height: 420px;
    background: #f7f5ef;
    .container {
        padding:  30px 0;
        box-sizing: border-box;
        .title {
            font-size: 14px;
            font-weight: bolder;
            color: #333;
            margin-bottom: 15px;
        }
        .top_cont {
            display: flex;
            height: 210px;
        }
        .left_con {
            width: 36%;
            height: 100%;
            border-right: 1px solid #d7d0c0;
            .list {
                display: flex;
                padding-right: 50px;
                box-sizing: border-box;
                .list_item {
                    width: 25%;
                    .link {
                        color: #666;
                        margin-bottom: 15px;
                        cursor: pointer;
                        &:hover {
                            color: #656fd6;
                        }
                    }
                }
            }
            .bottom_btn {
                display: flex;
                gap: 15px;
                margin-top: 25px;
                .btn {
                    font-size: 14px;
                    border: 1px solid #7e7e7e;
                    color: #7e7e7e;
                    width: 120px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    border-radius: 5px;
                    cursor: pointer;
                    &:hover {
                        background: #656fd6;
                        border-color: #656fd6;
                        color: #fff;
                    }
                }
            }
        }
        .license_box {
            width: 18%;
            padding: 0 50px;
            box-sizing: border-box;
            border-right: 1px solid #d7d0c0;
            img {
                cursor: pointer;
                filter: grayscale(1);
                &:hover {
                    filter: grayscale(0);
                }
            }
        }
        .third_box {
            width: 29%;
            padding: 0 50px;
            box-sizing: border-box;
            border-right: 1px solid #d7d0c0;
            .list_box {
                margin-top: 15px;
                display: flex;
                gap: 15px;
                align-items: center;
                .list_item {
                    display: inline-block;
                    background: url("@/assets/images/footer/icon-logo.png") no-repeat;
                    height: 40px;
                    zoom: 83%;
                    width: 35px;
                }
            }
        }
    }
}
</style>