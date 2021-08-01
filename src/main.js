import Vue from 'vue'
import router from './router'
import App from './App.vue'

import * as io from "socket.io-client";
import VueSocketIO from 'vue-socket.io';

import 'animate.css';

Vue.config.productionTip = false

const options = { transports: ['websocket', 'polling', 'flashsocket'] }

Vue.use(
  new VueSocketIO({
    // debug: true,
    connection: io('http://localhost:3000', options),
  })
)

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
