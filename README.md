> Simple Vue Chat components

# Installation
Add the plugin: 
```js
import VueChat from "vue-chat"
Vue.use(VueChat)
```

# Usage
```html
<script>

</script>

<template>
    <ChatList :items="_items" class="chatlist" />
</template>
```

For more see `ChatExample.vue`


# Alternative design
```html
<div style="height: calc( 100vh - 50px );">
    <ChatWindow />
</div>
```