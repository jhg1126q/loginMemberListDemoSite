const mainRouter = [
  {
    path: '/main',
    name: 'Main',
    component: () => import('../../views/MainView.vue')
  },
  {
    path: '/mainLanding',
    name: 'MainLanding',
    component: () => import('../../pages/Comm/LandingPage.vue')
  }
]

export default mainRouter
