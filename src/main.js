// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//
// <link href="http://fonts.googleapis.com/css?family=Lato:300,400,400italic,600,700|Raleway:300,400,500,600,700|Crete+Round:400italic" rel="stylesheet" type="text/css" />
// 	<link rel="stylesheet" href="css/bootstrap.css" type="text/css" />
// 	<link rel="stylesheet" href="style.css" type="text/css" />
// 	<link rel="stylesheet" href="css/swiper.css" type="text/css" />
// 	<link rel="stylesheet" href="css/dark.css" type="text/css" />
// 	<link rel="stylesheet" href="css/font-icons.css" type="text/css" />
// 	<link rel="stylesheet" href="css/animate.css" type="text/css" />
// 	<link rel="stylesheet" href="css/magnific-popup.css" type="text/css" />
import '@/assets/css/bootstrap.css'
import '@/assets/css/swiper.css'
import '@/assets/css/dark.css'
import '@/assets/css/animate.css'
// import '@/assets/css/responsive.css'
// import '@/assets/css/font-icons.css'
import '@/assets/css/magnific-popup.css'
import '@/assets/css/responsive.css'
// import '@/assets/css/custom.css'
// import '@/assets/css/elastic.css'
import '@/assets/js/jquery.js'
// import '@/assets/js/plugins.js'
import '@/assets/js/functions.js'
import '@/assets/style.css'

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
