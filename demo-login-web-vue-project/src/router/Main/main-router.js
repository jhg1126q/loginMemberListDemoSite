const mainRouter = [
  {
    path: '/main',
    name: 'Main',
    component: () => import('../../views/MainView.vue')
  },
  {
    path: '/test1',
    name: 'Test1',
    component: () => import('../../views/wireFrame/baseline.vue')
  },
  {
    path: '/test2',
    name: 'Test2',
    component: () => import('../../views/wireFrame/constrained.vue')
  },
  {
    path: '/test3',
    name: 'Test3',
    component: () => import('../../views/wireFrame/discord.vue')
  },
  {
    path: '/test4',
    name: 'Test4',
    component: () => import('../../views/wireFrame/extended-toolbar.vue')
  },
  {
    path: '/test5',
    name: 'Test5',
    component: () => import('../../views/wireFrame/inbox.vue')
  },
  {
    path: '/test6',
    name: 'Test6',
    component: () => import('../../views/wireFrame/side-navigation.vue')
  },
  {
    path: '/test7',
    name: 'Test7',
    component: () => import('../../views/wireFrame/steam.vue')
  },
  {
    path: '/test8',
    name: 'Test8',
    component: () => import('../../views/wireFrame/system-bar.vue')
  },
  {
    path: '/test9',
    name: 'Test9',
    component: () => import('../../views/wireFrame/three-column.vue')
  }
]

export default mainRouter
