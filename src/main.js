// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import router from './router'
import axios from 'axios';
import url from './url/url'
import 'babel-polyfill'
Vue.config.productionTip = false
// es6Promise .polyfill();
Vue.use(iView);
Vue.prototype.$http = axios;
Vue.prototype.$url = url;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
