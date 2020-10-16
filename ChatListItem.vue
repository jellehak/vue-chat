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
      <v-img :src="item.avatar" />
    </div>

    <div class="ChatListItem__content">
      <v-row no-gutters="">
        <v-col>
          <v-list-item-title>
            {{ item.title || "?" }}
          </v-list-item-title>
          <slot
            name="subtitle"
            :item="item"
          >
            <!-- <v-list-item-subtitle v-html="item.subtitle" /> -->
            <v-list-item-subtitle>
              {{ item.subtitle }}
            </v-list-item-subtitle>
          </slot>
        </v-col>
        <!-- <v-spacer /> -->
        <v-col>
          <div class="flex-column text-right">
            <div class="ChatListItem__date">
              {{ item.time | date }}
            </div>
            <div>
              <v-chip
                v-if="!item.seen"
                dark
                small
                color="#06d755"
              >
                {{ item.new }}
              </v-chip>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style>
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
