import '@/assets/scss/App.scss';
import Vue, { VNode } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// plugins
import { constantPlugin } from '@/plugins/constants';

Vue.use(constantPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h): VNode => h(App)
}).$mount('#app');
