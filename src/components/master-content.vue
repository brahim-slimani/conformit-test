<template>
  <div id="content">
    <div class="text-left m-2"><h2>Mes évènements</h2></div>
    <div class="content-body">
      <div class="events-section">
        <EventList />
      </div>
       <div class="detail-section">
        <EventDetail />
      </div>
    </div>
  </div>
</template>

<script>

import EventList from './event-list'
import EventDetail from './event-detail'

export default {
  components: {EventList, EventDetail},
  name: 'MasterContent',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
