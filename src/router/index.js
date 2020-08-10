import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import homeTemplate from '../components/home-template.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/login',
      component: Login,
      name: '',
      hidden: true
    },
  {
    path: '/',
    name: 'Home',
    component: homeTemplate,
    children: [
      {
        path: '/',
        name: 'one',
        component: () => import('../views/one.vue')
      },
      {
        path: '/antView',
        name: 'antView',
        component: () => import('../views/antView')
      },
      {
        path: '/table',
        name: 'table',
        component: () => import('../views/Nav1/Table')
      }
    ]
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

router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  // console.log(sessionStorage.getItem('user'))
  // console.log(JSON.parse(sessionStorage.getItem('user')))
  // console.log(JSON.stringify(JSON.parse(sessionStorage.getItem('user'))))
  let user = JSON.parse(sessionStorage.getItem('user'));
  console.log(!user)
  if (!user && to.path != '/login') {
      next({path: '/login'})
  } else {
    next()
  }
})

export default router
