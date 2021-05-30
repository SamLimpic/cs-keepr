<template>
  <div class="vault container-fluid py-md-4 py-2 px-md-5 px-4" v-if="!state.loading">
    <div class="row justify-content-start">
      <div class="col pt-md-4 pt-2 px-md-4 px-2">
        <h2 class="font-lg">
          Vault Title
        </h2>
        <h2>
          Keeps:
        </h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-3 col-6 p-md-4 p-2">
        <div class="position-relative">
          <img class="w-100" src="http://www.fillmurray.com/250/300" alt="">
          <h2 class="text-overlay text-light">
            Title
          </h2>
          <img class="icon-overlay" src="http://www.fillmurray.com/100/100" alt="">
        </div>
      </div>
      <div class="col-md-3 col-6 p-md-4 p-2">
        <div class="position-relative">
          <img class="w-100" src="http://www.fillmurray.com/150/250" alt="">
          <h2 class="text-overlay text-light">
            Title
          </h2>
          <img class="icon-overlay" src="http://www.fillmurray.com/80/80" alt="">
        </div>
      </div>
      <div class="col-md-3 col-6 p-md-4 p-2">
        <div class="position-relative">
          <img class="w-100" src="http://www.fillmurray.com/200/300" alt="">
          <h2 class="text-overlay text-light">
            Title
          </h2>
          <img class="icon-overlay" src="http://www.fillmurray.com/70/70" alt="">
        </div>
      </div>
      <div class="col-md-3 col-6 p-md-4 p-2">
        <div class="position-relative">
          <img class="w-100" src="http://www.fillmurray.com/250/250" alt="">
          <h2 class="text-overlay text-light">
            Title
          </h2>
          <img class="icon-overlay" src="http://www.fillmurray.com/60/60" alt="">
        </div>
      </div>
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
export default {
  name: 'Vault',
  setup() {
    const state = reactive({
      loading: false,
      account: computed(() => AppState.account)
    })
    onMounted(() => {

    })
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">
img{
  border-radius: 15px;
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
