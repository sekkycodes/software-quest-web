import {createApp} from "vue";
import Vuex from "vuex";
import App from './App.vue'

import "bootstrap";
import "bootswatch/dist/darkly/bootstrap.min.css";
import "moment";
import "bootstrap-vue/dist/bootstrap-vue.css"
import router from "./router/index"

const store = new Vuex.createStore({
  state: {},
  mutations: {},
});

const app = createApp(App);
app.use(router)
app.use(store);
app.mount("#app");
