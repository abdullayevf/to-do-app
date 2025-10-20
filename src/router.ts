import { createRouter, createWebHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import Register from "./views/RegisterView.vue";
import Login from "./views/LoginView.vue";

const routes = [
    { path: "/", component: HomeView },
    { path: "/about", component: AboutView },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
