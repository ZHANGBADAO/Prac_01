import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./routes/index"

new Vue({
    el: "#app",
    store,
    router,
    render: h=> {
        return h(App);
    }
});
