<template>
  <div class="col-md-3 col-6 p-md-4 p-2">
    <div class="position-relative">
      <img class="w-100" :src="keepProp.img" data-toggle="modal" data-target="#keepModal" @click="setActiveKeep(keepProp.id)">
      <h2 class="text-overlay text-light">
        {{ keepProp.name }}
      </h2>
      <router-link :to="{name: 'Profile', params: {id: keepProp.creatorId}}">
        <img class="icon-overlay" :src="keepProp.creator.picture" @click="goToProfile">
      </router-link>
    </div>
  </div>
  <ModalComponent />
</template>

<script>
import { keepsService } from '../services/KeepsService'
import Notification from '../utils/Notification'

export default {
  name: 'KeepComponent',
  props: {
    keepProp: {
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
.icon-overlay{
  position: absolute;
  right: 13px;
  bottom: 10px;
  height: 2rem;
  width: 2rem
}
</style>
