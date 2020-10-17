import Vue from 'vue'
import VueChat from './index'
import ChatExample from './ChatExample'

Vue.use(VueChat)

new Vue({
  render: h => h(ChatExample)
}).$mount('#app')
