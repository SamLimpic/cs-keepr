<template>
  <div class="home container-fluid py-md-4 py-2 px-md-5 px-4" v-if="!state.loading">
    <div class="row justify-content-center">
      <KeepComponent v-for="k in state.keeps" :key="k.id" :keep-prop="k" />
    </div>
  </div>
  <div class="loading container-fluid pt-5" v-else>
    <div class="row justify-content-center">
      <div class="col text-center pt-5">
        <i class="fas fa-cog text-info fa-spin font-lg"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { keepsService } from '../services/KeepsService'
import Notification from '../utils/Notification'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      loading: true,
      account: computed(() => AppState.account),
      keeps: computed(() => AppState.keeps),
      activeKeep: computed(() => AppState.activeKeep)
    })
    onMounted(async() => {
      state.activeKeep = null
      try {
        await keepsService.getKeeps()
        state.loading = false
      } catch (error) {
        Notification.toast('Error: ' + error, 'error')
      }
    })
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">

</style>
