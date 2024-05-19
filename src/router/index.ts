import { createRouter, createWebHistory } from 'vue-router'
import UserRegistration from '../views/UserRegistration.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'registration',
      component: UserRegistration
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/UserProfile.vue')
    }
  ]
})

export default router
