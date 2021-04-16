<template>
  <div class="card m-3 comment-item">
    <div class="card-body">
      <div class="header-actions">
        <i class="bi bi-pencil-fill edit-action" />
        <i class="bi bi-trash-fill delete-action" @click="deleteCommentAction(comment)"/>
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
    deleteCommentAction (comment) {
      this.$emit('callbackDeleteComment', comment)
    }
  },
  props: {
    comment: Object
  }
}
</script>
