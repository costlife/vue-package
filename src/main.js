import Vue from 'vue';
import App from './App.vue';


import store from '@/store';
import router from '@/router';

// common reset css
import 'normalize.css';
import 'animate.css';
import 'nprogress/nprogress.css';
import '@/assets/css/common.less';

// import library
Vue.use(require('vue-wechat-title'));

import 'swiper/dist/css/swiper.css';
Vue.use(require('vue-awesome-swiper'));

// import filters
import * as filters from './filters'
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
