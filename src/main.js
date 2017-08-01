// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import VueFire from 'vuefire'
var Firebase = require('firebase')
import 'vue-material/dist/vue-material.css'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueFire)

var db = Firebase.initializeApp({
  databaseURL: 'https://pwadojo.firebaseio.com'
}).database()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  firebase: {
    cats: db.ref('pictures')
  }
})
