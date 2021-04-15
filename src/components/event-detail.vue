<template>
  <div class="event-detail-container">
      <div class="header-detail">
        <h3>Accident avec Adelle</h3>
        <span>Crée le 2008-03-30.....</span>
      </div>
      <!-- <br/> -->
      <div class="item-detail">
        <div class="label">Titre</div>
        <input
          id="title"
          class="custom-input"
          type="text"
          placeholder="Titre d'accident"
          value="Accident avec Adelle"
        />
      </div>
      <div class="item-detail">
        <div class="label">Description</div>
        <textarea id="description" type="text" class="custom-input-area" placeholder="Description" rows="4" />
      </div>
      <div class="item-detail d-flex justify-content-between">
        <div>
          <div class="label">Date</div>
          <input id="date" type="date" placeholder="date" />
        </div>
        <div>
          <div class="label">Heure</div>
          <input id="houre" type="time" placeholder="heure" />
        </div>
      </div>
      <div class="item-detail">
        <div class="label">Nom du statut</div>
        <select id="status" class="custom-input" aria-placeholder="Nom du statut"></select>
      </div>
      <div class="item-detail">
        <div class="label">Employé impliqué</div>
        <select id="employees" class="custom-input" aria-placeholder="Employé impliqué"></select>
      </div>
      <div class="item-detail">
        <div class="label">Témoins</div>
        <div class="witness-container">

        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'EventDetail',
  data () {
    return {
    }
  },
  methods: {}
}
</script>
