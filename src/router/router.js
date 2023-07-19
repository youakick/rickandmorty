import MainPage from '@/pages/MainPage.vue'
import SelectedChar from '@/pages/SelectedChar.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/selec',
        component: SelectedChar
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router