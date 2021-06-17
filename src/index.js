import Chats from './Chats.vue'
import ChatList from './ChatList.vue'
import ChatMessages from './ChatMessages.vue'
import ChatMessage from './ChatMessage.vue'
import ChatInput from './ChatInput.vue'
import ChatListItem from './ChatListItem.vue'

function plugin (Vue) {
  Vue.component('Chats', Chats)
  Vue.component('ChatList', ChatList)
  Vue.component('ChatMessages', ChatMessages)
  Vue.component('ChatMessage', ChatMessage)
  Vue.component('ChatInput', ChatInput)
  Vue.component('ChatListItem', ChatListItem)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
