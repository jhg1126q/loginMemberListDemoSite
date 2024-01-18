const mainRouter = [
  {
    path: '/main',
    name: 'Main',
    component: () => import('../../views/MainView.vue')
  }
]

export default mainRouter
