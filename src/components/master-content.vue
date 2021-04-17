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
        <CommentList
          v-bind:comments="this.eventDetail ? this.eventDetail.comments : null"
          @callbackAppendComment="onAppendComment"
          @callbackDeleteComment="onDeleteComment"
          @callbackUpdateComment="onUpdateComment"
          :key="this.childCommentsKey" />
      </div>
    </div>
  </div>
</template>

<script>

import EventList from './event-list'
import EventDetail from './event-detail'
import CommentList from './comments-section'

export default {
  components: {EventList, EventDetail, CommentList},
  name: 'MasterContent',
  data () {
    return {
      eventDetail: null,
      childCommentsKey: null
    }
  },
  methods: {
    // POPULATE SELECTED EVENT
    onSelectEventItem (targetEvent) {
      this.eventDetail = targetEvent
    },
    // CALLBACK MODIFY EVENT PROPERTIES
    onUpdateEvent (updatedEvent) {
      this.$set(this.eventDetail, updatedEvent.key, updatedEvent.value)
    },
    // CALLBACK DELETE WITNESS ITEM
    onDeleteWitness (witness) {
      let updatedSet = this.eventDetail.Témoins.filter((x) => x !== witness)
      this.$set(this.eventDetail, 'Témoins', updatedSet)
    },
    // CALLBACK DELETE COMMENT ACTION
    onDeleteComment (comment) {
      let updatedSet = this.eventDetail.comments.filter((x) => x.creationDate !== comment.creationDate)
      this.$set(this.eventDetail, 'comments', updatedSet)
      this.childCommentsKey = comment
    },
    // CALLBACK UPDATE COMMENT
    onUpdateComment (comment) {
      let updatedSet = this.eventDetail.comments.map((item) => {
        if (item.creationDate === comment.creationDate) item['content'] = comment.content
        return item
      })
      this.$set(this.eventDetail, 'comments', updatedSet)
      this.childCommentsKey = comment
    },
    // CALLBACK APPEND COMMENT
    onAppendComment (comment) {
      this.eventDetail.comments.push(comment)
      this.childCommentsKey = comment
    }
  }
}
</script>
