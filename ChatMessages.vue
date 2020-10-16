<script>
export default {
  filters: {
    format (date = new Date()) {
      var today = new Date()

      const diff = today.getTime() - date.getTime()
      const dayDiff = diff / 86400000

      return dayDiff > 5
        ? new Intl.DateTimeFormat('default', {}).format(new Date(date))
        : new Intl.DateTimeFormat('default', {
          weekday: 'long'
        }).format(new Date(date))
    }
  },

  props: {
    items: {
      type: Array,
      default: () => [
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
    authorId: {
      type: Number,
      default: 0
    }
  },

  computed: {
    _items () {
      return this.items.map((item, index) => {
        const previous = this.items[index - 1]
        const compareDate = (_d1, _d2) => {
          // Clone
          const d1 = new Date(_d1)
          const d2 = new Date(_d2)
          return (
            new Date(d1.setHours(0, 0, 0, 0)) ===
            new Date(d2.setHours(0, 0, 0, 0))
          )
        }

        return {
          ...item,
          isNewDay: index > 0 ? compareDate(previous.date, item.date) : true
        }
      })
    }
  }
}
</script>

<template>
  <div class="ChatMessages">
    <div
      v-for="(item, index) in _items"
      :key="index"
      class="ChatMessages__item"
    >
      <!-- New Day seperator -->
      <div
        v-if="item.isNewDay"
        class="ChatMessages__date"
      >
        <div class="ChatMessages__tooltip">
          {{ item.date | format }}
          <span class="tooltiptext">{{ item.date }}</span>
        </div>
      </div>

      <!-- The chat message -->
      <div
        class="ChatMessages__message"
        :class="`ChatMessages--${item.send ? 'left' : 'right'}`"
      >
        <ChatMessage
          class="ChatMessages__messagewidth"
          v-bind="item"
          :send="item.send"
        />
      </div>
    </div>
  </div>
</template>

<style>
.ChatMessages__message {
  display: flex;
}

.ChatMessages--left {
  justify-content: flex-end;
}
.ChatMessages--right {
  justify-content: flex-start;
}

.ChatMessages__messagewidth {
  max-width: 75%;
}

.ChatMessages__date {
  text-align: center;
  background: #e1f4fb;
  max-width: 200px;
  margin: auto;
  border-radius: 6px;
}

/* Tooltip container */
.ChatMessages__tooltip {
  position: relative;
  display: inline-block;
  /* border-bottom: 1px dotted black;  */
  /* If you want dots under the hoverable text */
}

/* Tooltip text */
.ChatMessages__tooltip .tooltiptext {
  visibility: hidden;
  width: 200px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px;
  border-radius: 6px;
  font-size: 12px;
  opacity: 0.6;
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.ChatMessages__tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
