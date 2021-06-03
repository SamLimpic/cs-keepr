<template>
  <div class="card px-md-2 px-1 pb-md-4 pb-2" v-if="cardProp.creatorId === profileProp">
    <div class="position-relative" data-toggle="modal" data-target="#keepModal" @click="setActiveKeep(cardProp.id)">
      <img class="w-100 box-shadow" alt="Keep Image" :src="cardProp.img">
      <h4 class="text-overlay text-shadow text-light font-lg">
        {{ cardProp.name }}
      </h4>
    </div>
    <Modal v-if="state.activeKeep.creatorId !== undefined" />
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { keepsService } from '../services/KeepsService'

export default {
  name: 'KeepCard',
  props: {
    cardProp: {
      type: Object,
      required: true
    },
    profileProp: {
      type: String,
      required: true
    }
  },
  setup() {
    const state = reactive({
      account: computed(() => AppState.account),
      activeKeep: computed(() => AppState.activeKeep)
    })
    return {
      state,
      async setActiveKeep(id) {
        try {
          AppState.loading = true
          setTimeout(function() { AppState.loading = false }, 1100)
          keepsService.setActiveKeep(id)
          await keepsService.getKeepTags(id)
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
.box-shadow {
  box-shadow: 7.5px 7.5px 15px  var(--dark);
  -moz-box-shadow: 7.5px 7.5px 15px  var(--dark);
  -webkit-box-shadow: 7.5px 7.5px 15px  var(--dark);
  -o-box-shadow: 7.5px 7.5px 15px  var(--dark);
  object-fit: cover;
  min-height: 7rem;

}
img{
  border-radius: 15px;
  cursor: pointer;
}
.text-overlay{
  position: absolute;
  left: 13px;
  bottom: 0px;
}
</style>
