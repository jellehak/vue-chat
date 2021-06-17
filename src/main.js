import Vue from 'vue'
import VueChat from './index'
import ChatExample from './ChatExample.vue'

Vue.use(VueChat)

new Vue({
  render: h => h(ChatExample)
}).$mount('#app')
