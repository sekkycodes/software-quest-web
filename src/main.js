import Vue from 'vue'
import Vuex from "vuex";
import App from './App.vue'

import "bootstrap";
import "bootswatch/dist/darkly/bootstrap.min.css";
import "moment";
import BootstrapVue from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueToastr from "vue-toastr";

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.use(VueToastr);

const store = new Vuex.Store({
  state: {},
  mutations: {},
});

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')