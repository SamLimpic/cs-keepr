<template>
  <div class="col-md-2 col-6 p-2">
    <div class="position-relative" data-toggle="modal" data-target="#keepModal" @click="setActiveKeep(cardProp.id)">
      <img class="w-100" :src="cardProp.img">
      <h2 class="text-overlay text-light">
        {{ cardProp.name }}
      </h2>
    </div>
    <Modal />
  </div>
</template>

<script>
import { keepsService } from '../services/KeepsService'

export default {
  name: 'KeepCard',
  props: {
    cardProp: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      setActiveKeep(id) {
        try {
          keepsService.setActiveKeep(id)
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      }
    }
  },
  components: {}
}
</script>

<style scoped lang="scss">
h2 {
  font-size: 1.5rem;
}
img{
  border-radius: 15px;
  cursor: pointer;
}
.text-overlay{
  position: absolute;
  left: 13px;
  bottom: 0px;
  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
}
.img-card {
  object-fit: cover;
  height: auto;
  position: center;
}
</style>
