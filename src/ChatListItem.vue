<script>
export default {
  filters: {
    // TODO similar date format as whatsapp
    date (value, format = { year: 'numeric', month: 'short', day: '2-digit' }) {
      // More info https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
      if (value) {
        const d = new Date(value)
        const dtf = new Intl.DateTimeFormat('en', {
          year: 'numeric',
          month: 'short',
          day: '2-digit'
        })
        const [
          { value: mo },
          ,
          { value: da },
          ,
          { value: ye }
        ] = dtf.formatToParts(d)
        // TODO Chicho Fix correct date format / time format

        return `${da}-${mo}-${ye}`
      }
    }
  },

  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<template>
  <div
    class="ChatListItem"
    :to="item.to || '#'"
    v-on="$listeners"
  >
    <div class="ChatListItem__avatar">
      <img :src="item.avatar">
    </div>

    <div class="ChatListItem__content">
      <div class="ChatListItem__column ChatListItem__text">
        <div class="ChatListItem__title">
          {{ item.title || "?" }}
        </div>
        <slot
          name="subtitle"
          :item="item"
        >
          <!-- <v-list-item-subtitle v-html="item.subtitle" /> -->
          <div class="ChatListItem__subtitle">
            {{ item.subtitle }}
          </div>
        </slot>
      </div>
      <!-- <v-spacer /> -->
      <div class="ChatListItem__column">
        <div class="ChatListItem__meta">
          <div class="ChatListItem__date">
            {{ item.time | date }}
          </div>
          <div>
            <div
              v-if="!item.seen"
              class="ChatListItem__chip"
              dark
              small
              color="#06d755"
            >
              {{ item.new }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.ChatListItem__meta {
  flex-direction: column;
  text-align: right;
}

.ChatListItem__text {
  flex-grow: 1;
}
.ChatListItem__title {
  align-self: center;
  font-size: 1rem;
}

.ChatListItem__subtitle {
  font-size: 0.875rem;
}

.ChatListItem__chip {
  background-color: rgb(6, 215, 85);
  border-color: rgb(6, 215, 85);
  border-radius: 12px;
  font-size: 12px;
  height: 24px;
  color: #fff;

  align-items: center;
  cursor: default;
  display: inline-flex;
  line-height: 20px;
  max-width: 100%;
  outline: none;
  overflow: hidden;
  padding: 0 12px;
  position: relative;
  text-decoration: none;
  transition-duration: 0.28s;
  transition-property: box-shadow, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  vertical-align: middle;
  white-space: nowrap;
}

.ChatListItem {
  cursor: pointer;

  display: flex;
  text-decoration: none;
  padding: 10px;
  align-items: center;
}

.ChatListItem__avatar {
  border-radius: 50%;
  height: 48px;
  min-width: 48px;
  width: 48px;
  overflow: hidden;
  margin-right: 10px;
}

.ChatListItem__content {
  align-items: center;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1;
  overflow: hidden;
  padding: 12px 0;
}

a.ChatListItem {
  color: rgba(0, 0, 0, 0.87);
}

.ChatListItem:hover {
  background: #ebebeb;
}

.ChatListItem__date {
  color: grey;
  font-size: 12px;
}
</style>
