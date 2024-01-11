import Home from "@/views/HomePage.vue";
import Login from "@/views/LoginPage.vue";
import Inventory from "@/views/InventoryPage.vue";
import Market from "@/views/MarketPage.vue";
import Notifications from "@/views/RequestsPage.vue";
import Profile from "@/views/ProfilePage.vue";
import CaseDetails from "@/views/CaseDetailsPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: '/', component: Home, meta: {requiresAuth: true} },
    { path: '/login', component: Login, meta: { requiresAuth: false } },
    { path: '/inventory', component: Inventory, meta: { requiresAuth: true } },
    { path: '/market', component: Market, meta: { requiresAuth: true } },
    { path: '/requests', component: Notifications, meta: { requiresAuth: true } },
    { path: '/profile', component: Profile, meta: { requiresAuth: true } },
    { path: '/case/:name', component: CaseDetails, meta: { requiresAuth: true } }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = JSON.parse(localStorage.getItem('user'));

    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
        next('/login');
    } else if (to.path === '/login' && isAuthenticated) {
        next('/');
    } else {
        next();
    }
});

export default router;
