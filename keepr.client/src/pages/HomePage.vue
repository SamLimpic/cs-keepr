<template>
  <div class="home container-fluid pt-md-5 pt-4 pb-md-4 pb-2 px-md-5 px-3" v-if="!state.loading">
    <div class="card-columns">
      <Keep v-for="k in state.keeps" :key="k.id" :keep-prop="k" />
    </div>
  </div>
  <div class="loading container-fluid pt-5" v-else>
    <div class="row justify-content-center">
      <div class="col text-center pt-5">
        <i class="fas fa-cog text-info fa-spin font-xxl"></i>
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
@media (min-width: 0) {
  .card-columns {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }
}

@media (min-width: 576px) {
  .card-columns {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
  }
}

@media (min-width: 768px) {
  .card-columns {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
  }
}

@media (min-width: 992px) {
  .card-columns {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
  }
}

@media (min-width: 1200px) {
  .card-columns {
    -webkit-column-count: 4;
    -moz-column-count: 4;
    column-count: 4;
  }
}
</style>
