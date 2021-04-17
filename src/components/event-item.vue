<template>
  <div class="event-item" @click="onClickEvent(eventObject)">
      {{ this.eventObject.title }}
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
