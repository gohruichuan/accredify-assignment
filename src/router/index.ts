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
  console.warn("to ", to);

const profileStore = useProfileStore();

if(localStorage.getItem('jwtToken'))
  await profileStore.verify()
else
  profileStore.clearProfileDetails()

// redirect to dashboard if ALREADY logged in
if(to.path === '/login' && to.meta.requiresAuth && profileStore.isLoggedIn){
  return '/'
}else if(to.meta.requiresAuth && !profileStore.isLoggedIn) return '/login'

})

export default router
