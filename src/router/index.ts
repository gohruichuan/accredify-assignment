// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { useProfileStore } from "@/store/profile";

const validateLogin = (to: any, from: any , next: any) => {
const profileStore = useProfileStore();

if(localStorage.getItem('jwtToken'))
  profileStore.isLoggedIn = true;
 else
  profileStore.isLoggedIn = false;

// redirect to dashboard if ALREADY logged in
if(to.path === '/login' && profileStore.isLoggedIn)
  next('/');

// redirect to dashboard if logged in
if(profileStore.isLoggedIn)
  next();
else if(to.path !== '/login')
  next('/login'); // go to '/login';

};

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    beforeEnter : validateLogin,
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
    beforeEnter : validateLogin,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
