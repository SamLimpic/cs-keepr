<template>
  <div class="home container-fluid pt-md-5 pt-4 pb-md-4 pb-2 px-md-5 px-3" v-if="!state.loading">
    <div class="card-columns">
      <Keep v-for="k in state.keeps" :key="k.id" :keep-prop="k" />
    </div>
  </div>

  <!-- NOTE state.loading: A quick & dirty visual trick to show the user that their content is loading -->
  <div class="loading container-fluid pt-5" v-else>
    <div class="row justify-content-center">
      <div class="col text-center pt-5">
        <i class="fas fa-ring fa-spin font-xxl"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { keepsService } from '../services/KeepsService'
import Notification from '../utils/Notification'
import { tagsService } from '../services/TagsService'

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
        // NOTE This timeout ensures consistent loading time across all pages
        // It's also the perfect amount of time for the Ring icon to make one full rotation
        setTimeout(function() { state.loading = false }, 900)
        await tagsService.getTags()
        await keepsService.getKeeps()
        keepsService.shuffleKeeps()
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
// NOTE Home Page & Profile Page need separate Card Column media queries to fit the model
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
