import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/pages/HomeView.vue'
import SigninView from '@/components/pages/SigninView.vue'
import SignupView from '@/components/pages/SignupView.vue'
import CalendarForm from '@/components/form/CalendarForm.vue'
import PopNewCard from '@/components/form/PopNewCard.vue'
import PopBrowse from '@/components/form/PopBrowse.vue'

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
      component: SigninView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarForm,
    },
    {
      path: '/tasks/new',
      name: 'new-task',
      component: PopNewCard,
    },
    {
      path: '/tasks/:id',
      name: 'task-detail',
      component: PopBrowse,
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('@/components/form/CategorySelector.vue'),
    },
    {
      path: '/statuses',
      name: 'statuses',
      component: () => import('@/components/form/StatusSelector.vue'),
    },
  ],
})

export default router
