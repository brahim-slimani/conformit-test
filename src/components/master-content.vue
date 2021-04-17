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
import CommentList from './comment-list'

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
    onSelectEventItem (targetEvent) {
      this.eventDetail = targetEvent
    },
    onUpdateEvent (updatedEvent) {
      this.$set(this.eventDetail, updatedEvent.key, updatedEvent.value)
    },
    onDeleteWitness (witness) {
      let updatedSet = this.eventDetail.Témoins.filter((x) => x !== witness)
      this.$set(this.eventDetail, 'Témoins', updatedSet)
    },
    onDeleteComment (comment) {
      let updatedSet = this.eventDetail.comments.filter((x) => x.creationDate !== comment.creationDate)
      this.$set(this.eventDetail, 'comments', updatedSet)
      this.childCommentsKey = comment
    },
    onUpdateComment (comment) {
      let updatedSet = this.eventDetail.comments.map((item) => {
        if (item.creationDate === comment.creationDate) item['content'] = comment.content
        return item
      })
      this.$set(this.eventDetail, 'comments', updatedSet)
      this.childCommentsKey = comment
    },
    onAppendComment (comment) {
      this.eventDetail.comments.push(comment)
      this.childCommentsKey = comment
    }
  },
  watch: {
  }
}
</script>
