<template>
  <div>
    <div class="modal-header"><h5>Edit comment</h5></div>
    <div class="modal-body edit-comment-content">
      <div class="d-flex">
        <img
          class="avatar"
          src="../assets/img/person-icon.png"
          style="height: 40px; margin: 0 10px"
        />
        <strong>{{ this.targetComment.author }}</strong>
      </div>
      <textarea
        id="comment-input"
        type="text"
        rows="3"
        class="comment-text"
        v-bind:value="this.targetComment.content"
        v-on:input="onEditComment"
      />
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="cancelUpdateAction">Cancel</button>
        <button type="button" class="btn btn-success" @click="submitUpdateAction">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditComment',
  components: {},
  data () {
    return {
    }
  },
  methods: {
  },
  props: {
    targetComment: Object,
    cancelUpdateAction: Function,
    submitUpdateAction: Function,
    onEditComment: Function
  },
  watch: {

  }
}
</script>
