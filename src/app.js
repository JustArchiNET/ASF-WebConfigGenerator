import Vue from 'vue';

import App from './App.vue';
import { i18n } from './i18n.js';
import router from './router.js';

new Vue({
    el: '#app',
    router,
    i18n,
    template: '<App/>',
    components: { App }
});
