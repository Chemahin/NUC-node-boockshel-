import Vue from 'vue'
import App from './App.vue'
//add router vue
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Routes from './routers/router';
import store from './store/index'

Vue.use(VueRouter)
//add bootstrap grid
Vue.use(BootstrapVue);

const router = new VueRouter({
  routes:Routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});