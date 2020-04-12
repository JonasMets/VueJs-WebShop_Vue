import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products'
import Product from '../views/Product'

import Login from '../views/Login';
import Register from '../views/Register';
import CheckOut from '../views/CheckOut';
import CheckOutOk from '../views/CheckOutOk';
import CustomerOrders from '../views/CustomerOrders';
import CustomerProfile from '../views/CustomerProfile';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ProductsHome',
    component: Products
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
    props: true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    // denna länk är spärrad om man inte är inloggad
    path: '/checkout',
    name: 'CheckOut',
    component: CheckOut,
    meta:{authorize:[]}
  },
  {
    // denna länk är spärrad om man inte är inloggad
    path: '/checkoutok',
    name: 'CheckOutOk',
    component: CheckOutOk,
    meta:{authorize:[]}
  },
  {
    // denna länk är spärrad om man inte är inloggad
    path: '/customerorders',
    name: 'CustomerOrders',
    component: CustomerOrders,
    meta:{authorize:[]}
  },
  {
    // denna länk är spärrad om man inte är inloggad
    path: '/customerprofile',
    name: 'CustomerProfile',
    component: CustomerProfile,
    meta:{authorize:[]}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// kontroll om användare är inloggad och får gå till en viss sida
router.beforeEach((to, from, next)=>{
  const {authorize} = to.meta;
  const currentUser = JSON.parse(sessionStorage.getItem('currentUser'))

  if (authorize) {
    if (!currentUser.id) {
      return next({path:'/login', query: {returnUrl: to.path}})
    }
  }
  next();

})

export default router
