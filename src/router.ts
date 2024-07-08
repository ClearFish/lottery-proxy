import { createRouter, createWebHashHistory } from 'vue-router';
import Home from  "@/pages/home/index.vue"
import Proxy from "@/pages/proxy/index.vue"
import Login from "@/pages/login/index.vue"
const router = createRouter({
        history:createWebHashHistory(),
        routes:[
            {
                name:'home',
                path:"/",
                redirect:'/home',
                children:[
                    {
                        name:'home',
                        path:"/home",
                        component:Home
                    }
                ]
            },
            {
                name:'proxy',
                path:"/proxy",
                component:Proxy
            },
            {
                name:'login',
                path:"/login",
                component:Login
            },
        ]
    
})
export default router