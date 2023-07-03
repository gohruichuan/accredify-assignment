// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { useProfileStore } from "@/store/profile";

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/Error404.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeResolve(async (to) => {
const profileStore = useProfileStore();

if(localStorage.getItem('jwtToken'))
  await profileStore.verify()
else
  profileStore.isLoggedIn = false;

// redirect to dashboard if ALREADY logged in
if(to.path === '/login' && profileStore.isLoggedIn){
  return '/'
}
})

export default router
