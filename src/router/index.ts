import { createRouter, createWebHashHistory } from 'vue-router'
import UserRegistration from '../views/UserRegistration.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
  history: createWebHashHistory('/user-registration'),
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
    },
    {
      path: '/:pathMatch(.*)*',
      name:'NotFound',
      component: NotFound,
    },
  ]
})

export default router
