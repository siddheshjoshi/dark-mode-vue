import Vue from 'vue'
import App from './App.vue'
import './assets/style.css'
// import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
