import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import store from './store'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  store,
  render: h => h(App),
  i18n,

  beforeCreate () {
    // this.$store.commit('initialiseStore')
    this.$store.dispatch('initialiseStore')
  }
}).$mount('#app')
