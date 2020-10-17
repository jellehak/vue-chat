<script>
export default {
  data: vm => ({
    messages: [],
    chats: [
      {
        title: 'Jane',
        subtitle: 'Last message',
        time: new Date(),
        new: 2,
        avatar: 'https://randomuser.me/api/portraits/women/64.jpg',
        messages: [
          {
            date: new Date(),
            message: 'Hello Send',
            send: true
          },
          {
            date: new Date(),
            message: 'Hello Received',
            send: false
          }
        ]
      },
      {
        title: 'John',
        subtitle: 'Last message',
        time: new Date(),
        new: 5,
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        messages: []
      }
    ]
  }),
  methods: {
    onChatChange ($event) {
      this.messages = $event.messages
    },
    onNewMessage ($event) {
      this.messages.push($event)

      // E.G. Sync to server
      console.log($event)
    }
  }
}
</script>

<template>
  <div style="background: #f4f7f6;">
    <h1>Chats</h1>
    <div style="display:flex; width: 100%; height:500px">
      <Chats
        :chats="chats"
        :messages="messages"
        @click="onChatChange"
        @input="onNewMessage"
      />
    </div>

    <h1>Default Chats</h1>
    <Chats />

    <h1>Chat Background</h1>
    <Chats :height="500">
      <template #background>
        <img
          src="https://picsum.photos/500/300"
          style="width:100%;height:100%"
        >
      </template>
    </Chats>

    <h1>Chat components</h1>
    <h2>ChatList</h2>
    <h3>Default</h3>
    <ChatList />
    <h3>Props</h3>
    <ChatList
      :items="[
        {
          id: '12',
          seen: 0,
          subtitle: 'Subtitle',
          time: new Date(),
          title: 'Jane',
          new: 2,
          avatar: 'https://randomuser.me/api/portraits/women/64.jpg'
        },
        {
          id: '12',
          seen: 0,
          subtitle: 'Subtitle',
          time: new Date(),
          title: 'John',
          new: 5,
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        }
      ]"
    />

    <h2>ChatMessage</h2>
    <ChatMessage>Received message</ChatMessage>
    <ChatMessage send>
      Send message
    </ChatMessage>
    <ChatMessage send>
      Send message
    </ChatMessage>

    <h2>ChatMessages</h2>
    <ChatMessages />

    <h2>ChatInput</h2>
    <ChatInput />
  </div>
</template>

<style>
body,
html {
  height: 100%;
  margin: 0;
  /* font: 400 15px/1.8 "Lato", sans-serif; */
  /* color: #777; */
  font-family: Roboto, sans-serif;
  line-height: 1.5;
  color: rgba(0,0,0,.87);
}

html {
  font-size: 16px;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

</style>
