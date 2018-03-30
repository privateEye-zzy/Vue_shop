import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
  routes: [
  	{
      path: '/',
      name: 'list',
      component: () => import('pages/list/list.vue')
    },
    {
      path: '/comment',
      name: 'comment',
      component: () => import('pages/comment/comment.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('pages/about/about.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('pages/detail/detail.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  let nameList = router.options.routes.map(item => item.name)
  if( nameList.includes(to.name) ) {
    window.scrollTo(0, 0)
    next()
  }else {
    // 错误页面跳转
    next('/')
  }
})

export default router
