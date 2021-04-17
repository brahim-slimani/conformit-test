<template>
  <div class="comment-item">
    <div class="card-bod">
      <div class="header-actions">
        <i class="bi bi-pencil-fill comment-action edit-comment" title="Edit comment" @click="updateCommentAction(comment)"/>
        <i class="bi bi-trash-fill comment-action delete-comment" title="Delete comment" @click="deleteCommentAction(comment)"/>
      </div>
      <div class="comment-content">
        <img class="avatar" src="../assets/img/person-icon.png" />
        <div class="content">
          <strong>{{ comment.author }}</strong>
          <p>{{ comment.content }}</p>
        </div>
      </div>
      <small class="footer"> {{ resolveDateToLocalFrench(comment.creationDate) }} </small>
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
    // ON DELETE ACTION
    deleteCommentAction (comment) {
      this.$emit('callbackDeleteComment', comment)
    },
    // ON EDIT ACTION
    updateCommentAction (comment) {
      this.$emit('callbackEditComment', comment)
    }
  },
  props: {
    comment: Object
  },
  computed: {
    resolveDateToLocalFrench () {
      return date => new Date(date).toLocaleString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    }
  }
}
</script>
