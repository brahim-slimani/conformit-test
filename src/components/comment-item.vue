<template>
  <div class="card m-3 comment-item">
    <div class="card-body">
      <div class="header-actions">
        <i class="bi bi-pencil-fill comment-action edit-comment" title="Edit comment" @click="updateCommentAction(comment)"/>
        <i class="bi bi-trash-fill comment-action delete-comment" title="Delete comment" @click="deleteCommentAction(comment)"/>
      </div>
      <div class="d-flex">
        <img class="avatar" src="../assets/img/person-icon.png" />
        <div class="content">
          <strong>{{ comment.author }}</strong>
          <p>{{ comment.content }}</p>
        </div>
      </div>
      <small class="footer"> {{ new Date(comment.creationDate).toLocaleString() }} </small>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CommentItem',
  data () {
    return {
    }
  },
  methods: {
    appendCommentAction () {
      this.$emit('callbackAppendComment')
    },
    deleteCommentAction (comment) {
      this.$emit('callbackDeleteComment', comment)
    },
    updateCommentAction (comment) {
      this.$emit('callbackEditComment', comment)
    }
  },
  props: {
    comment: Object
  }
}
</script>
