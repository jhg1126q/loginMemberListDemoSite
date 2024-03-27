const userRouter = [
    {
      path: '/user',
      name: 'user',
      component: () => import('../../views/MainView.vue')
    },
]

export default userRouter
