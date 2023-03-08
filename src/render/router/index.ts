import {createRouter, createWebHistory} from "vue-router";
import {staticRoutes} from "/@/render/router/routes";
import {App} from "vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [...staticRoutes]
})