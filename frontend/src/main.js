import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router'
Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.prototype.$http=axios



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
