<template>
  <div class="comment-list-container">
  <div v-for="item in this.comments" :key="item.creationDate">
       <CommentItem v-bind:comment="item" @callbackDeleteComment="deleteComment"/>
  </div>
  </div>
</template>

<script>

import CommentItem from './comment-item.vue'

export default {
  components: { CommentItem },
  name: 'CommentList',
  data () {
    return {
    }
  },
  methods: {
    deleteComment (comment) {
      this.$emit('callbackDeleteComment', comment)
    }
  },
  props: {
    comments: Array
  }
}

</script>
