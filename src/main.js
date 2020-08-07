import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// 引用ant-design-vue
import antDesign from 'ant-design-vue'
Vue.use(antDesign);
import 'ant-design-vue/dist/antd.css';

// 引用view-design
import ViewDesign from 'view-design';
Vue.use(ViewDesign);
import 'view-design/dist/styles/iview.css'

// Element ui
import ElementUI from 'element-ui'
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css'

import Mock from './mock'
Mock.bootstrap();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
