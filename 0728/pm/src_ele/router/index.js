import Vue from 'vue'
import Router from 'vue-router'

import Outmai from '../components/Outmai'
import Finder from '@/components/Finder'
import Order from '@/components/Order'
import Mine from '@/components/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:"/outmai"},
    {path: '*',redirect:"/outmai"},
    {path: '/outmai',name:'outmai',component:Outmai},
    {path: '/finder',name:'finder',component:Finder},
    {path: '/order',name:'order',component:Order},
    {path: '/mine',name:'mine',component:Mine}
  ]
})
