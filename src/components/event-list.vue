<template>
  <div class="event-list-container">
     <div v-for="item in events" :key="item.id">
       <EventItem v-bind:eventObject="item" @callbackClickEvent="onSelectEvent" />
     </div>
  </div>
</template>

<script>

import dataServiceWorker from '../service/data-service-worker'
import EventItem from './event-item.vue'

export default {
  components: { EventItem },
  name: 'EventList',
  data () {
    return {
      events: dataServiceWorker.getEvents
    }
  },
  methods: {
    onSelectEvent (selectedEvent) {
      this.$emit('callbackSelectEvent', selectedEvent)
    }
  }
}

</script>
