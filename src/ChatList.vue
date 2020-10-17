<script>
const ITEMS = [
  {
    id: '12',
    seen: 0,
    subtitle: 'Subtitle',
    time: '2020-08-18 15:47:36',
    title: 'John',
    new: 5,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: '12',
    seen: 0,
    subtitle: 'Subtitle',
    time: '2020-08-18 15:47:36',
    title: 'John',
    new: 5,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  }
]

export default {
  props: {
    items: {
      type: Array,
      default: () => (ITEMS)
    }
  }
}
</script>

<template>
  <div class="ChatList">
    <template v-for="(item, index) in items">
      <ChatListItem
        :key="index"
        :item="item"
        @click="$emit('click',item)"
      />
    </template>

    <div
      v-if="items.length === 0"
    >
      <slot name="empty">
        <div class="ChatList__empty">
          <p>No chat history</p>
        </div>
      </slot>
    </div>
  </div>
</template>

<style>
.ChatList {
  background: white;
  min-width: 330px;
  min-height: 100%;
}

.ChatList__empty {
  text-align: center;
  padding:20px;
}
</style>
