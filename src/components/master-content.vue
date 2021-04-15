<template>
  <div id="content" class="content-body">
    <div class="text-left m-2"><h2>Mes événements</h2></div>
    <div>
      <div class="events-section">
        <EventList />
      </div>
    </div>
  </div>
</template>

<script>

import EventList from './event-list'

export default {
  components: {EventList},
  name: 'MasterContent',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
