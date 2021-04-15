<template>
  <div class="card m-3 comment-item">
    <div class="card-body">
      <div class="header-actions">
        <i class="bi bi-pencil-fill edit-action" />
        <i class="bi bi-trash-fill delete-action"/>
      </div>
      <div class="d-flex">
        <img class="avatar" src="../assets/img/person-icon.png" />
        <div class="content">
          <strong>Jean Valjean</strong>
          <p>Océane est arrivée il y a seulement 3 mois</p>
        </div>
      </div>
      <small class="footer"> 10 Janvier 2017 </small>
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
  }
}
</script>
