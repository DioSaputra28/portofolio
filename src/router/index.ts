import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataPilotDetail from '../views/DataPilotDetail.vue'
import SimTASDetail from '../views/SimTASDetail.vue'
import AIAdminWhatsAppDetail from '../views/AIAdminWhatsAppDetail.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/project/data-pilot',
        name: 'DataPilotDetail',
        component: DataPilotDetail
    },
    {
        path: '/project/simtas',
        name: 'SimTASDetail',
        component: SimTASDetail
    },
    {
        path: '/project/ai-admin-whatsapp',
        name: 'AIAdminWhatsAppDetail',
        component: AIAdminWhatsAppDetail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router