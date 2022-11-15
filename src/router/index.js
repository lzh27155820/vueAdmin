import VueRouter from "vue-router";
import Vue from "vue";
import Home from '@/views/Home'
import User from '@/views/User'
import Main from '@/views/Main'
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        component: Main,
        children:[
             { path: '/home', component: Home },
             { path: '/user', component: User },
        ]
    },
   
   
  ]

const router =new VueRouter({
    routes
})
export default router