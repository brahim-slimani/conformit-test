<template>
  <div>
    <div class="modal-header"><h5>Add new comment</h5></div>
    <div class="modal-body edit-comment-content">
      <div class="d-flex">
        <input
          id="author-input"
          type="text"
          placeholder="Author"
          v-on:input="setAuthor"
        />
      </div>
      <textarea
        id="comment-input"
        type="text"
        rows="3"
        class="comment-text"
        placeholder="Comment"
        v-on:input="setComment"
      />
      <div class="modal-footer">
        <button type="button" @click="cancelAction">Cancel</button>
        <button type="button" @click="submitAction">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppendComment',
  components: {},
  data () {
    return {
    }
  },
  methods: {
  },
  props: {
    cancelAction: Function,
    submitAction: Function,
    setAuthor: Function,
    setComment: Function
  }
}
</script>
