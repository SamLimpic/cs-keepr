<template>
  <div class="card px-md-2 px-2 pb-md-3 pb-3">
    <div class="position-relative">
      <img class="w-100 box-shadow"
           :src="keepProp.img"
           alt="Keep Image"
           data-toggle="modal"
           data-target="#keepModal"
           @click="setActiveKeep(keepProp.id)"
      >
      <h2 class="text-overlay text-shadow text-light font-lg">
        {{ keepProp.name }}
      </h2>
      <router-link :to="{name: 'Profile', params: {id: keepProp.creatorId}}">
        <img class="icon icon-overlay rounded-circle" :src="keepProp.creator.picture" alt="Profile Icon" @click="goToProfile">
      </router-link>
    </div>
  </div>
  <Modal />
</template>

<script>
import { keepsService } from '../services/KeepsService'
import Notification from '../utils/Notification'

export default {
  name: 'Keep',
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
.box-shadow {
  box-shadow: 7.5px 7.5px 15px  var(--dark);
  -moz-box-shadow: 7.5px 7.5px 15px  var(--dark);
  -webkit-box-shadow: 7.5px 7.5px 15px  var(--dark);
  -o-box-shadow: 7.5px 7.5px 15px  var(--dark);
}
.card {
  background: transparent;
  border: none;
}
.text-overlay{
  position: absolute;
  left: 13px;
  bottom: 0px;
}
.icon-overlay{
  position: absolute;
  right: 13px;
  top: 10px;
}
</style>
