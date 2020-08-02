const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'index', component: () => import('pages/Index.vue') },
      { path: '/mesa/:id', name: 'mesa', component: () => import('pages/Mesa.vue'), props: true },
      { path: '/mesa/:id/addProducto', name: 'addProducto', component: () => import('pages/AddProducto.vue'), props: true },
      { path: '/cuenta/:id', name: 'cuenta', component: () => import('pages/Cuenta.vue'), props: true },
      { path: '/configuracion', name: 'configuracion', component: () => import('pages/Configuracion.vue') },
      { path: '/configuracion/impuestos', name: 'configuracionImpuestos', component: () => import('pages/ConfiguraImpuestos.vue') },
      { path: '/configuracion/categorias', name: 'configuracionCategorias', component: () => import('pages/ConfiguraCategorias.vue') },
      { path: '/configuracion/productos', name: 'configuracionProductos', component: () => import('pages/ConfiguraProductos.vue') },
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
