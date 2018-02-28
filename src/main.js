// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/style.css'
import '@/assets/css/bootstrap.css'
import '@/assets/css/animate.css'
import '@/assets/css/responsive.css'
import '@/assets/css/swiper.css'
import '@/assets/css/font-icons.css'
import '@/assets/css/magnific-popup.css'
import '@/assets/css/dark.css'
import '@/assets/js/jquery.js'
// import '@/assets/js/plugins.js'
import '@/assets/js/functions.js'

import Page from './components/Page/Page'
import Menu from './components/Menu/Menu'

Vue.config.productionTip = false

Vue.component('menu-app', Menu)
Vue.component('page', Page)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
