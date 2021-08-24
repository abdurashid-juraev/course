import App from './App.vue'
import Vue from 'vue'
import VueAxios from 'vue-axios'
import VueLodash from 'vue-lodash'
import axios from 'axios'
import lodash from 'lodash'
import pageTest from './components/pages/testPage.vue'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueLodash, { name: 'custom', lodash: lodash })
Vue.component('pageTest', pageTest)

new Vue({
  render: h => h(App),
}).$mount('#app')
