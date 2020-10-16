// import { ChatList, ChatWindow } from './src'
import Chats from './Chats'
import ChatList from './ChatList'
import ChatExample from './ChatExample'
import ChatMessages from './ChatMessages'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'
import ChatListItem from './ChatListItem'

function plugin (Vue) {
  Vue.component('Chats', Chats)
  Vue.component('ChatList', ChatList)
  Vue.component('ChatExample', ChatExample)
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
