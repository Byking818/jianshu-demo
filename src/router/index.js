import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Hot from '@/components/hot'
import List from '@/components/list'
import Details from '@/components/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloword',
      component: HelloWorld,
    },
    {
      path: '/',
      component: Home,
    },
    {
    		path:'/hot',
    		component:Hot,
    },
    {
    		path:'/details',
    		component:Details,
    }
   ]
})
