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
  <div>
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
        <v-img
          src="https://picsum.photos/500/300"
          style="width:100%;height:100%"
        />
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
