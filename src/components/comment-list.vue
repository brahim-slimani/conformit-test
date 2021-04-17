<template>
  <div class="comment-list-container">
    <button
      type="button"
      class="btn btn-secondary"
      :disabled="this.comments ? false: true"
      @click="fireAppendModal">
        <i class="bi bi-plus-circle"/> add comment
    </button>
    <div v-for="item in comments" :key="item.creationDate">
      <CommentItem
        v-bind:comment="item"
        @callbackAppendComment="fireAppendModal"
        @callbackEditComment="fireEditModal"
        @callbackDeleteComment="deleteComment"
      />
    </div>
    <Popup name="append-modal">
      <ApppendComment
        v-bind:cancelAction="this.cancelAppendAction"
        v-bind:submitAction="this.submitAppendAction"
        v-bind:setAuthor="this.setAuthor"
        v-bind:setComment="this.setComment"
         />
    </Popup>
    <Popup name="edit-modal">
      <EditComment
        v-bind:targetComment="this.targetComment"
        v-bind:cancelUpdateAction="this.cancelUpdateAction"
        v-bind:submitUpdateAction="this.submitUpdateAction"
        v-bind:onEditComment="this.onEditComment"
         />
    </Popup>
  </div>
</template>

<script>

import CommentItem from './comment-item.vue'
import EditComment from './edit-comment.vue'
import ApppendComment from './append-comment.vue'
import VModal from 'vue-js-modal'
import Vue from 'vue'

Vue.use(VModal, {componentName: 'Popup'})

export default {
  components: { CommentItem, VModal, EditComment, ApppendComment },
  name: 'CommentList',
  data () {
    return {
      targetComment: {
        author: null,
        content: null,
        creationDate: null
      },
      author: null,
      content: null
    }
  },
  methods: {
    deleteComment (comment) {
      this.$emit('callbackDeleteComment', comment)
    },
    fireEditModal (comment) {
      this.targetComment['creationDate'] = comment.creationDate
      this.targetComment['content'] = comment.content
      this.targetComment['author'] = comment.author
      this.$modal.show('edit-modal')
    },
    onEditComment (e) {
      this.targetComment['content'] = e.target.value
    },
    cancelUpdateAction () {
      this.$modal.hide('edit-modal')
    },
    submitUpdateAction () {
      this.$emit('callbackUpdateComment', this.targetComment)
      this.$modal.hide('edit-modal')
    },
    fireAppendModal () {
      this.$modal.show('append-modal')
    },
    cancelAppendAction () {
      this.$modal.hide('append-modal')
    },
    setAuthor (e) {
      this.author = e.target.value
    },
    setComment (e) {
      this.content = e.target.value
    },
    submitAppendAction () {
      if (this.author && this.content) {
        this.$emit('callbackAppendComment', {author: this.author, content: this.content, creationDate: new Date()})
        this.$modal.hide('append-modal')
        this.author = null
        this.content = null
      } else {
        alert('Please to fill the comment fields !')
      }
    }
  },
  props: {
    comments: Array
  }
}

</script>
