import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router/index.js'
import App from './App'
import 'common/stylus/index.styl'

Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
