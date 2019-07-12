import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import item from '@/components/item'
import me from '@/components/me'
import Login from '@/components/Login'
import Page1 from '@/components/page1'
import Page2 from '@/components/page2'
import Page3 from '@/components/page3'
import a from '@/components/a'

Vue.use(Router);

export default new Router({
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/item',
      name: 'item',
      component: item,
      children:[
        {
          path: '/Page1',
          name: 'Page1',
          component: Page1
        },
        {
          path: '/Page2',
          name: 'Page2',
          component: Page2
        },
        {
          path: '/Page3',
          name: 'Page3',
          component: Page3
        }
      ]
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
      path: '/a',
      name: 'a',
      component: a
    }
  ],
  mode:'history'
})
