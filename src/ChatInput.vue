<script>
const FORM = () => ({
  message: '',
  send: true
})

export default {
  props: {
  },

  data: vm => ({
    form: FORM(),
    loading: false
  }),

  methods: {
    submit (form) {
      this.$emit('submit', form)

      // Clear
      this.form = FORM()
    }
  }
}
</script>

<template>
  <form @submit.prevent="submit(form)">
    <div class="ChatInput">
      <input
        v-model="form.message"
        class="ChatInput__input"
        placeholder="Type a message"
        flat
        solo
        hide-details
      >
    </div>
  </form>
</template>

<style >
.ChatInput {
  background: #F0F0F0;
  padding: 10px;
  display: flex;
}
.ChatInput__input {
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  padding: 0 12px;
}
</style>
