import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import CartView from '../views/CartView.vue'
import SearchView from '../views/SearchView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/product/:id', // ':' işareti, 'id'nin dinamik bir parametre olduğunu söyler
      name: 'ProductDetail',
      component: ProductDetailView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
       // ':categoryName' kısmı dinamiktir, yani buraya ne yazılırsa (Photography, Paintings vb.)
      // onu bir parametre olarak kabul eder.
    {
      path: '/category/:categoryName',
      name: 'category',
      component: HomeView // Bu rota da HomeView'ı gösteriyor!
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
