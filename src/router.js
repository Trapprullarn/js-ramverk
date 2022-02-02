import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './components/home.vue'
import Hiscores from './components/hiscores.vue'
import GrandExchange from './components/grand-exchange.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: Home,
      path: '/'
    },
    {
      component: Hiscores,
      path: '/hiscores'
    },
    {
      component: GrandExchange,
      path: '/grandexchange'
    },
  ]
})
