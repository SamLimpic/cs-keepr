<template>
  <div class="search container-fluid pt-md-4 pb-md-4 pb-2 px-md-5 px-3" v-if="!state.loading">
    <div class="row justify-content-start pt-2">
      <div class="col px-4 position-relative">
        <h2 class="font-xl mt-1">
          <u> Tag: {{ state.activeTag.name }}</u>
        </h2>
        <h2 class="font-lg">
          Keeps: {{ state.keeps.length }}
        </h2>
      </div>
    </div>
    <div class="card-columns pt-md-2">
      <Keep v-for="k in state.keeps" :key="k.id" :keep-prop="k" />
    </div>
  </div>
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

export default {
  name: 'Search',
  setup() {
    const state = reactive({
      loading: true,
      account: computed(() => AppState.account),
      activeTag: computed(() => AppState.activeTag),
      keeps: computed(() => AppState.keeps)
    })
    onMounted(async() => {
      try {
        // NOTE This timeout ensures consistent loading time across all pages
        setTimeout(function() { state.loading = false }, 900)
        await keepsService.getKeepsByTag(state.activeTag.id)
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

/* NOTE Home Page & Profile Page need separate Card Column media queries to fit the model */
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
