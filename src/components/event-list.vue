<template>
  <div class="event-list-container">
     <div v-for="item in events" :key="item.id">
       <EventItem v-bind:eventObject="item" @onEventClick="callback" />
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
    callback (target) {
      this.$emit('callback', target)
    }
  }
}

</script>
