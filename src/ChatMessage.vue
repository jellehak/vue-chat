<script>
export default {
  filters: {
    format (date = new Date()) {
      return date
        ? new Intl.DateTimeFormat('default', {
          hour: 'numeric',
          minute: 'numeric'
          // second: 'numeric'
        }).format(new Date(date))
        : ''
    }
  },

  props: {
    send: {
      type: Boolean,
      default: false
    },
    received: {
      type: Boolean,
      default: false
    },
    date: {
      type: Date,
      default: () => new Date(),
      required: false
    },
    message: {
      type: String,
      default: '',
      required: false
    }
  },

  computed: {
    _direction: (vm) => (vm.send ? 'own' : 'foreign')
  }
}
</script>

<template>
  <div
    class="ChatMessage"
    :class="`ChatMessage--${_direction}`"
  >
    <div class="ChatMessage__message">
      <slot>
        {{ message }}
      </slot>

      <div class="ChatMessage__info">
        <small class="ChatMessage__time">
          {{ date | format }}
        </small>

        <template v-if="received">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
            width="18"
            height="18"
          >
            <path
              fill="currentColor"
              d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"
            />
          </svg>
        </template>
      </div>
    </div>
  </div>
</template>

<style>
.ChatMessage {
  background: white;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
}
.ChatMessage--own {
  background: #dcf8c6;
}
.ChatMessage--foreign {
  background: #fff;
}
.ChatMessage__info {
  margin-left: 10px;
  float: right;
}

.ChatMessage__time {
  color: rgba(0, 0, 0, 0.45);
}
</style>
