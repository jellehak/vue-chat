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
  <v-form @submit.prevent="submit(form)">
    <div class="chatinput">
      <v-text-field
        v-model="form.message"
        placeholder="Type a message"
        flat
        solo
        hide-details
      />
    </div>
  </v-form>
</template>

<style >
.chatinput {
  background: #F0F0F0;
  padding: 10px;
}
</style>
