<template>
  <div class="comment-list-container">
  <div v-for="item in getEventComments(this.eventId)" :key="item.creationDate">
       <CommentItem v-bind:comment="item" />
  </div>
  </div>
</template>

<script>
import CommentItem from './comment-item.vue'
import dataServiceWorker from '../service/data-service-worker'

export default {
  components: { CommentItem },
  name: 'CommentList',
  data () {
    return {
    }
  },
  methods: {
    getEventComments (id) {
      return id ? dataServiceWorker.getEventComments(id) : null
    }
  },
  props: {
    eventId: Number
  }
}

</script>
