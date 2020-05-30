import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import BaiduMap from 'vue-baidu-map'
// import 'element-ui/lib/theme-chalk/index.css';
import './theme/index.css'

Vue.use(ElementUI);
Vue.use(BaiduMap,{
  ak:"2IEbVc6uPkna2XcGPlXE2QdAUHcrMzZC"
});
// Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
