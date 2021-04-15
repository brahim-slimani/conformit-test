<template>
  <div class="card m-3 event-item" v-on:click="onEventClick(eventObject)">
    <div class="card-body shadow">
      {{ this.eventObject.title }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'EventItem',
  props: {
    eventObject: Object
  },
  data: function () {
    return {
    }
  },
  methods: {
    onEventClick: (target) => {
      alert(target.id)
    }
  }
}

</script>
