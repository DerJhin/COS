import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Inventory from "@/views/Inventory.vue";
import Market from "@/views/Market.vue";
import Notifications from "@/views/Notifications.vue";
import Profile from "@/views/Profile.vue";
import {createRouter, createWebHistory} from "vue-router";
import CaseDetails from "@/views/CaseDetails.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/inventory', component: Inventory },
    { path: '/market', component: Market },
    { path: '/notifications', component: Notifications },
    { path: '/profile', component: Profile },
    { path: '/case/:name', component: CaseDetails }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router