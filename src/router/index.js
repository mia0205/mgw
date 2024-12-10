import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const base = import.meta.env.VITE_BASE_URL || '/'
const router = createRouter({
    history: createWebHistory(base),
    routes:
        [
            { path: '/', redirect: '/home' },
            { path: '/home', name: 'Home', component: Home },
            { path: '/shopping', name: 'Shopping', component: () => import('../views/shopping.vue') },
            { path: '/my', name: 'My', component: () => import('../views/My.vue') },
            { path: '/live', name: 'Live', component: () => import('../views/Live.vue') }
        ]
})
export default router