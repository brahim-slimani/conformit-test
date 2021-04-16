<template>
  <div class="card m-3 event-item" @click="onClickEvent(eventObject)">
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
    onClickEvent (selectedEvent) {
      this.$emit('callbackClickEvent', selectedEvent)
    }
  }
}

</script>
