import Vue from 'vue'
import Router from 'vue-router'
import New from '@/components/New'
import Women from '@/components/Women'
import Men from '@/components/Men'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'New',
      component: New
    },
    {
      path: '/Women',
      name: 'Women',
      component: Women
    },
    {
      path: '/Men',
      name: 'Men',
      component: Men
    }
  ]
})
