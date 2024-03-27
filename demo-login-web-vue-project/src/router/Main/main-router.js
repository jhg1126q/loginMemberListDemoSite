const mainRouter = [
  {
    path: '/main',
    name: 'Main',
    component: () => import('../../views/MainView.vue')
  },
  {
    path: '/front',
    name: 'front',
    component: () => import('../../pages/Comm/MainPage.vue')
  },
  {
    path: '/mainLanding',
    name: 'MainLanding',
    component: () => import('../../pages/Comm/LandingPage.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../../pages/Comm/LoginPage.vue')
  }
]

export default mainRouter
