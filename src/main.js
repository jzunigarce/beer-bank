import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue';
import Storage from './storage';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(Storage, {
    name: 'favorite'
});

axios.defaults.baseURL = 'https://api.punkapi.com/v2'
axios.defaults.withCredentials = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
