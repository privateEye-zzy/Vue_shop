import Vue from 'vue'
import App from './App'
import router from './router/router'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import Toast from 'plugins/toast/toast.js'
import Confirm from 'plugins/confirm/confirm.js'

import './css/font/iconfont.css'
import './css/common.css'
import './css/animate.css'
import 'swiper/dist/css/swiper.min.css'
import './css/vedioDialog.css'

Vue.use(Toast)
Vue.use(Confirm)
Vue.component('icon', Icon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router,
}).$mount("#app")
