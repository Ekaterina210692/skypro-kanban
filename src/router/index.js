import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/pages/HomeView.vue'
import BaseButton from '@/components/basecomop/BaseButton.vue'
import Calendar from '@/components/form/CalendarForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../components/pages/SigninView.vue'),
    },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../components/pages/SignupView.vue')
  },
  {
      path: '/Calendar',
      name: 'Calendar',
      component: () => import('../components/form/CalendarForm.vue'),
    },
  ],
})

export default router
