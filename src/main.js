// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('./bootstrap');
window.Vue = require('vue');
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
Vue.prototype.axios = axios
import echarts from 'echarts'
Vue.prototype.echarts = echarts 


Vue.config.productionTip = false
import particles from 'particles.js';
Vue.use(particles);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
