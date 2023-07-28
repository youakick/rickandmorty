import MainPage from '@/pages/MainPage.vue'
import SelectedChar from '@/pages/SelectedChar.vue'
import AboutPage from '@/pages/AboutPage.vue'
import EpisodesPage from '@/pages/EpisodesPage.vue'
import LocationsPage from '@/pages/LocationsPage.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/selec/:id',
        component: SelectedChar
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/episodes',
        component: EpisodesPage
    },
    {
        path: '/locations',
        component: LocationsPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router