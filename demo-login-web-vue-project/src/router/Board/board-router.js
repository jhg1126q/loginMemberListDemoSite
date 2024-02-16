const boardRouter = [
    {
      path: '/board',
      name: 'Board',
      component: () => import('../../views/MainView.vue')
    },
]

export default boardRouter
