<template>
  <div id="content">
    <div class="text-left m-2"><h2>Mes évènements</h2></div>
    <div class="content-body">
      <div class="events-section">
        <EventList @callbackSelectEvent="onSelectEventItem" />
      </div>
       <div class="detail-section">
        <EventDetail
          v-bind:eventDetail="this.eventDetail"
          @callbackUpdateEvent="onUpdateEvent"
          @callbackDeleteWitness="onDeleteWitness"/>
      </div>
       <div class="comments-section">
        <h5 class="comment-title">Commentaires</h5>
        <CommentList v-bind:comments="this.eventDetail ? this.eventDetail.comments : []" @callbackDeleteComment="onDeleteComment"/>
      </div>
    </div>
  </div>
</template>

<script>

import EventList from './event-list'
import EventDetail from './event-detail'
import CommentList from './comment-list'
import dataServiceWorker from '../service/data-service-worker'

export default {
  components: {EventList, EventDetail, CommentList},
  name: 'MasterContent',
  data () {
    return {
      eventDetail: null
    }
  },
  methods: {
    onSelectEventItem (targetEvent) {
      this.eventDetail = targetEvent
      !this.eventDetail.comments && this.$set(this.eventDetail, 'comments', dataServiceWorker.getEventComments(targetEvent.id))
    },
    onUpdateEvent (updatedEvent) {
      this.$set(this.eventDetail, updatedEvent.key, updatedEvent.value)
    },
    onDeleteWitness (witness) {
      let updatedSet = this.eventDetail.Témoins.filter((x) => x !== witness)
      this.$set(this.eventDetail, 'Témoins', updatedSet)
    },
    onDeleteComment (comment) {
      let updatedSet = this.eventDetail.comments.filter((x) => x !== comment)
      this.$set(this.eventDetail, 'comments', updatedSet)
    }
  }
}
</script>
