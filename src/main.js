import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueQuillEditor from "vue-quill-editor";
import "./plugins/element.js";

Vue.config.productionTip = false;
Vue.use(VueQuillEditor);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
