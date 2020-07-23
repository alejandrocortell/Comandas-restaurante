const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'index', component: () => import('pages/Index.vue') },
      { path: '/mesa/:id', name: 'mesa', component: () => import('pages/Mesa.vue'), props: true },
      { path: '/mesa/:id/addProducto', name: 'addProducto', component: () => import('pages/AddProducto.vue'), props: true },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
