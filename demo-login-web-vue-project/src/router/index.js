import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import mainRouter from './Main/main-router'
import boardRouter from './Board/board-router'
import userRouter from './User/user-router'

/*
 * 선언하는 방식이 두개가 있다
 * import 방식으로 진행하는 것과
 * 이미 import 된 컴포넌트를 가져오는 것
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...boardRouter,
    ...userRouter,
    ...mainRouter,
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
