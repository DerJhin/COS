import Home from "@/views/HomePage.vue";
import Login from "@/views/LoginPage.vue";
import Inventory from "@/views/InventoryPage.vue";
import Market from "@/views/MarketPage.vue";
import Notifications from "@/views/RequestsPage.vue";
import Profile from "@/views/ProfilePage.vue";
import {createRouter, createWebHistory} from "vue-router";
import CaseDetails from "@/views/CaseDetailsPage.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/inventory', component: Inventory },
    { path: '/market', component: Market },
    { path: '/requests', component: Notifications },
    { path: '/profile', component: Profile },
    { path: '/case/:name', component: CaseDetails }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router