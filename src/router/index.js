import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: resolve => require(['../components/login/login.vue'], resolve),
    },{
      path:"/shopIndex",
      redirect: '/shopIndex/qrcode',
      component: resolve => require(['../components/shopIndex.vue'], resolve), 
      children:[
        {
          path:'index',
          name:'index',
          component: resolve => require(['../components/common/index.vue'], resolve), 
        },{
          path:'notify',
          name:'notify',
          component: resolve => require(['../components/notify/notify.vue'], resolve), 
        },{
          path:'order',
          name:'order',
          component: resolve => require(['../components/orders/orders.vue'], resolve),
        },{
          path:'music',
          name:'music',
          component: resolve => require(['../components/setMusic/music.vue'], resolve),
        },{
          path:'goodList',
          name:'goodList',
          component: resolve => require(['../components/goodsList/goodList.vue'], resolve),
        },{
          path:'profit',
          name:'profit',
          component: resolve => require(['../components/profit/profit.vue'], resolve),
        },{
          path:'personInfo',
          name:'personInfo',
          component: resolve => require(['../components/personInfo/personInfo.vue'], resolve)
        },{
          path:'qrcode',
          name:'qrcode',
          component: resolve => require(['../components/qrcode/qrcode.vue'], resolve)
        }
      ]
    }
  ]
})
