<template>
  <div class="comment-list-container">
    <button
      type="button"
      class="btn btn-secondary"
      :disabled="this.comments ? false : true"
      @click="displayAppendModal"
    >
      <i class="bi bi-plus-circle" /> add comment
    </button>
    <div v-for="item in comments" :key="item.creationDate">
      <CommentItem
        v-bind:comment="item"
        @callbackEditComment="displayEditModal"
        @callbackDeleteComment="deleteComment"
      />
    </div>
    <Popup name="custom-modal">
      <div v-if="this.modalFor === 'append'">
        <ApppendComment
          v-bind:cancelAction="this.cancelAppendAction"
          v-bind:submitAction="this.submitAppendAction"
          v-bind:setAuthor="this.setAuthor"
          v-bind:setComment="this.setComment"
        />
      </div>
      <div v-else>
        <EditComment
          v-bind:targetComment="this.commentToEdit"
          v-bind:cancelUpdateAction="this.cancelUpdateAction"
          v-bind:submitUpdateAction="this.submitUpdateAction"
          v-bind:onEditComment="this.onEditComment"
        />
      </div>
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
      commentToEdit: {
        author: null,
        content: null,
        creationDate: null
      },
      author: null,
      content: null,
      modalFor: null
    }
  },
  methods: {
    // DISPATCH CALLBACK DELETE Fn TO PARENT
    deleteComment (comment) {
      this.$emit('callbackDeleteComment', comment)
    },
    // SHOW EDIT MODAL
    displayEditModal (comment) {
      this.modalFor = 'edit'
      this.commentToEdit['creationDate'] = comment.creationDate
      this.commentToEdit['content'] = comment.content
      this.commentToEdit['author'] = comment.author
      this.showModal()
    },
    // ON EDIT COMMENT CONTENT
    onEditComment (e) {
      this.commentToEdit['content'] = e.target.value
    },
    // ON CANCEL EDITING COMMENT
    cancelUpdateAction () {
      this.hideModal()
    },
    // ON CONFIRM EDITING COMMENT
    submitUpdateAction () {
      this.$emit('callbackUpdateComment', this.commentToEdit)
      this.hideModal()
    },
    // SHOW APPEND MODAL
    displayAppendModal () {
      this.modalFor = 'append'
      this.showModal()
    },
    // ON CANCEL APPENDING COMMENT
    cancelAppendAction () {
      this.hideModal()
    },
    // SETTING COMMENT AUHTOR
    setAuthor (e) {
      this.author = e.target.value
    },
    // SETTING COMMENT CONTENT
    setComment (e) {
      this.content = e.target.value
    },
    // ON CONFIRM APPENDING CONTENT
    submitAppendAction () {
      if (this.author && this.content) {
        this.$emit('callbackAppendComment', {author: this.author, content: this.content, creationDate: new Date()})
        this.hideModal()
        this.author = null
        this.content = null
      } else {
        alert('Please to fill the comment fields !')
      }
    },
    // DISPLAYING COMMON MODAL
    showModal () {
      this.$modal.show('custom-modal')
    },
    // HIDING COMMON MODAL
    hideModal () {
      this.$modal.hide('custom-modal')
    }
  },
  props: {
    comments: Array
  }
}

</script>
