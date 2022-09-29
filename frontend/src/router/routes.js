
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('pages/Index.vue')
      },
      {
        path: '/signin',
        name: 'signin',
        component: () => import('pages/SignIn.vue')
      },
      {
        path: '/signup',
        component: () => import('pages/SignUp.vue')
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('pages/Dashboard.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/view_product/:id',
        name: 'view product',
        component: () => import('pages/ViewProduct.vue')
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('pages/Cart.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/bidding/:id',
        name: 'bidding',
        params: null,
        component: () => import('pages/Bidding.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/profile',
        name: 'profile',
        params: null,
        component: () => import('pages/Profile.vue'),
        meta: {
          requiresAuth: true
        }
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
