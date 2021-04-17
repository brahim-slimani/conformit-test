<template>
  <div>
    <div v-if="this.eventDetail" class="event-detail-container">
      <div class="header-detail">
        <h3>{{ this.eventDetail.title }}</h3>
        <span>
          Créé le
          {{ new Date(this.eventDetail.creationDate).toLocaleString() }} par
          {{ this.eventDetail.createdBy }}
        </span>
      </div>
      <!-- <br/> -->
      <div class="item-detail">
        <div class="label">Titre</div>
        <input
          id="title"
          class="custom-input"
          type="text"
          placeholder="Titre d'accident"
          v-model="this.eventDetail.title"
          v-on:input="onUpdateEventProperty($event, 'title')"
        />
      </div>
      <div class="item-detail">
        <div class="label">Description</div>
        <textarea
          id="description"
          type="text"
          class="custom-input-area"
          placeholder="Description"
          rows="4"
          v-model="this.eventDetail.description"
          v-on:input="onUpdateEventProperty($event, 'description')"
        />
      </div>
      <div class="item-detail d-flex justify-content-between">
        <div>
          <div class="label">Date</div>
          <input
            id="date"
            type="date"
            class="form-control"
            placeholder="date"
            v-bind:value="getDateFromDateTime(this.eventDetail.creationDate)"
          />
        </div>
        <div>
          <div class="label">Heure</div>
          <input
            id="houre"
            type="time"
            class="form-control"
            placeholder="heure"
            v-bind:value="getTimeFromDateTime(this.eventDetail.creationDate)"
          />
        </div>
      </div>
      <div class="item-detail">
        <div class="label">Nom du statut</div>
        <select
          id="status"
          class="custom-input"
          aria-placeholder="Nom du statut"
          v-model="this.eventDetail.statusName"
          v-on:input="onUpdateEventProperty($event, 'statusName')"
        >
          <option v-for="item in this.statusOptions" :key="item">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="item-detail">
        <div class="label">Employé impliqué</div>
        <select
          id="employees"
          class="custom-input"
          aria-placeholder="Employé impliqué"
          v-model="this.eventDetail.involvedEmployeeId"
          v-on:input="onUpdateEventProperty($event, 'involvedEmployeeId')"
        >
          <option
            v-for="option in this.employeesOptions"
            :key="option.key"
            v-bind:value="option.key"
          >
            {{ option.value }}
          </option>
        </select>
      </div>
      <div class="item-detail">
        <div class="label">Témoins</div>
        <div class="witness-container">
          <div
            v-for="item in this.eventDetail.Témoins"
            :key="item"
            class="witness-item"
          >
            <span class="witness-text">{{ item }}</span>
            <i class="bi bi-x delete-action" @click="onDeleteWitness(item)" />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="event-detail-message">
      <h4>
        Prière de sélectionner un évènement !
      </h4>
    </div>
  </div>
</template>

<script>

import dataServiceWorker from '../service/data-service-worker'

export default {
  name: 'EventDetail',
  data () {
    return {
      statusOptions: dataServiceWorker.getEventStatusValues(),
      employeesOptions: dataServiceWorker.getEmployees()
    }
  },
  methods: {
    // ON MODIFY EVENT PROPERTIES
    onUpdateEventProperty (e, property) {
      this.$emit('callbackUpdateEvent', {key: property, value: e.target.value})
    },
    // ON DELETE WITNESS ITEM
    onDeleteWitness (item) {
      this.$emit('callbackDeleteWitness', item)
    }
  },
  props: {
    eventDetail: Object
  },
  computed: {
    getDateFromDateTime () {
      return datetime => datetime.slice(0, 10)
    },
    getTimeFromDateTime () {
      return datetime => datetime.slice(11, datetime.length - 1)
    }
  }
}

</script>
