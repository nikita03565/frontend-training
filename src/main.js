import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import store from './store/index'
import App from './App.vue'
import router from './router';
import Axios from 'axios'

Vue.prototype.$http = Axios;
const token = localStorage.getItem('access_token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
