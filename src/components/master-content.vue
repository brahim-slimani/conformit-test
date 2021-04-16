<template>
  <div id="content">
    <div class="text-left m-2"><h2>Mes évènements</h2></div>
    <div class="content-body">
      <div class="events-section">
        <EventList @callback="handleEvent" />
      </div>
       <div class="detail-section">
        <EventDetail v-bind:eventDetail="this.eventDetail" />
      </div>
       <div class="comments-section">
         <h5 class="comment-title">Commentaires</h5>
        <CommentList v-bind:eventId="this.eventDetail ? this.eventDetail.id : null" />
      </div>
    </div>
  </div>
</template>

<script>

import EventList from './event-list'
import EventDetail from './event-detail'
import CommentList from './comment-list'

export default {
  components: {EventList, EventDetail, CommentList},
  name: 'MasterContent',
  data () {
    return {
      eventDetail: null
    }
  },
  methods: {
    handleEvent (target) {
      this.eventDetail = target
    }
  }
}
</script>
