<template>
  <div class="event-detail-container">
    <div class="header-detail">
      <h3>{{ this.eventDetail.title }}</h3>
      <span
        >Créé le
        {{ new Date(this.eventDetail.creationDate).toLocaleString() }} par
        {{ this.eventDetail.createdBy }}</span
      >
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
        v-on:change="onUpdateTitle"
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
          v-bind:value="getDate(this.eventDetail.creationDate)"
        />
      </div>
      <div>
        <div class="label">Heure</div>
        <input
          id="houre"
          type="time"
          class="form-control"
          placeholder="heure"
          v-bind:value="getTime(this.eventDetail.creationDate)"
        />
      </div>
    </div>
    <div class="item-detail">
      <div class="label">Nom du statut</div>
      <select
        id="status"
        class="custom-input"
        aria-placeholder="Nom du statut"
        v-model="this.eventDetail.statusName">
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
        v-model="this.eventDetail.involvedEmployeeId">
        <option v-for="option in this.employeesOptions" :key="option.key" v-bind:value="option.key">
          {{ option.value }}
        </option>
      </select>
    </div>
    <div class="item-detail">
      <div class="label">Témoins</div>
      <div class="witness-container">
        <div v-for="item in this.eventDetail.Témoins" :key="item" class="witness-item">
          <span class="witness-text">{{ item }}</span>
          <i class="bi bi-x delete-action" @click="onDeleteWitness(item)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import dataServiceWorker from '../service/data-service-worker'
import Utils from '../helper'

export default {
  name: 'EventDetail',
  data () {
    return {
      statusOptions: dataServiceWorker.getEventStatusValues(),
      employeesOptions: dataServiceWorker.getEmployees()
    }
  },
  methods: {
    onDeleteWitness (item) {
    },
    onUpdateTitle () {
    },
    getTime (datetime) {
      return Utils.getTimeFromDateTime(datetime)
    },
    getDate (datetime) {
      return Utils.getDateFromDateTime(datetime)
    }
  },
  props: {
    eventDetail: Object
  }
}

</script>
