import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import peopleData from "../data-code/people-data"

Vue.config.productionTip = false;

let data = {
  PeopleAndStories: peopleData,
}



new Vue({
  router,
  data,
  render: (h) => h(App),
}).$mount("#app");
