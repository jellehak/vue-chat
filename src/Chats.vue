<script>
export default {
  props: {
    height: { type: Number, default: 200 },
    chats: { type: Array, default: () => [] },
    messages: { type: Array, default: () => [] }
  },

  methods: {
    onNewMessage ($event) {
      // this.items.push($event)
      // Tell parent
      this.$emit('input', $event)
    }
  }
}
</script>

<template>
  <div
    class="Chat"
    :style="`min-height:${height}px`"
  >
    <div class="Chat__left">
      <ChatList
        :items="chats"
        @click="$emit('click',$event)"
      >
        <template #empty>
          <slot name="empty" />
        </template>
      </ChatList>
    </div>

    <div class="Chat__right">
      <div class="Chat__background">
        <slot name="background" />
      </div>

      <div class="Chat__foreground">
        <div class="Chat__messages">
          <ChatMessages :items="messages" />
        </div>

        <div class="Chat__input">
          <ChatInput @submit="onNewMessage" />
        </div>
      </div>
    </div>
  </div>
</template>

<style >
.Chat {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  /* min-height: 200px; */
}

.Chat__messages {
  padding: 10px;
}

.Chat__foreground {
  width: 100%;
  z-index: 1;
  position: absolute;
  height: 100%;
}

.Chat__right {
  position: relative;
  flex-grow: 1;
}

.Chat__input {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.Chat__background {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  /* background-image: radial-gradient(
      circle at 100% 100%,
      rgba(173, 216, 230, 0.8),
      rgba(255, 192, 203, 0.05)
    ),
    radial-gradient(
      circle at 100% 0,
      rgba(227, 173, 230, 0.05),
      rgba(227, 173, 230, 0.8)
    ),
    radial-gradient(
      circle at 20% 50%,
      rgba(255, 255, 0, 0.5),
      rgba(255, 192, 203, 0.1)
    ); */
}
</style>
