<template>
  <div class="profile container-fluid py-md-4 py-2 px-md-5 px-4" v-if="!state.loading">
    <div id="profile-info" class="row justify-content-center">
      <div class="col-md-2 col-5 pt-md-4 pt-3">
        <img class="rounded-circle" :src="state.profile.picture" alt="" />
      </div>
      <div class="col-md-10 col-7 pt-md-5">
        <h2>
          {{ state.profile.name.split('@')[0] }}
        </h2>
        <h3>Vaults:</h3>
        <h3>Keeps:</h3>
      </div>
    </div>
    <div id="add-vault" class="row justify-content-start pt-5 pl-2">
      <div class="col">
        <h4>
          Vaults
          <span>
            <button type="button" class="btn btn-outline-info border-0 font-sm py-0 px-2 ml-3">
              <i class="fas fa-plus"></i>
            </button>
          </span>
        </h4>
      </div>
    </div>
    <div id="vaults" class="row justify-content-start">
      <div class="col-md-2 col-4 px-md-4 mb-3">
        <img src="http://www.fillmurray.com/g/250/250" alt="">
      </div>
      <div class="col-md-2 col-4 px-md-4 mb-3">
        <img src="http://www.fillmurray.com/g/240/240" alt="">
      </div>
      <div class="col-md-2 col-4 px-md-4 mb-3">
        <img src="http://www.fillmurray.com/g/230/230" alt="">
      </div>
      <div class="col-md-2 col-4 px-md-4 mb-3">
        <img src="http://www.fillmurray.com/g/215/215" alt="">
      </div>
      <div class="col-md-2 col-4 px-md-4 mb-3">
        <img src="http://www.fillmurray.com/g/210/210" alt="">
      </div>
      <div class="col-md-2 col-4 px-md-4 mb-3">
        <img src="http://www.fillmurray.com/g/200/200" alt="">
      </div>
    </div>
    <div id="add-keep" class="row justify-content-start pt-5 pl-2">
      <div class="col">
        <h4>
          Keeps
          <span>
            <button type="button" class="btn btn-outline-info border-0 font-sm py-0 px-2 ml-3">
              <i class="fas fa-plus"></i>
            </button>
          </span>
        </h4>
      </div>
    </div>
    <div id="keeps" class="row justify-content-start">
      <div class="col-md-2 col-4 px-md-4 mb-3">
        <img src="http://www.fillmurray.com/250/270" alt="">
      </div>
      <div class="col-md-2 col-4 px-md-4 mb-3">
        <img src="http://www.fillmurray.com/225/250" alt="">
      </div>
      <div class="col-md-2 col-4 px-md-4 mb-3">
        <img src="http://www.fillmurray.com/230/245" alt="">
      </div>
      <div class="col-md-2 col-4 px-md-4 mb-3">
        <img src="http://www.fillmurray.com/220/250" alt="">
      </div>
      <div class="col-md-2 col-4 px-md-4 mb-3">
        <img src="http://www.fillmurray.com/210/230" alt="">
      </div>
      <div class="col-md-2 col-4 px-md-4 mb-3">
        <img src="http://www.fillmurray.com/200/225" alt="">
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
  name: 'Profile',
  setup() {
    const state = reactive({
      // NOTE loading should equal TRUE to start, fix before run
      loading: false,
      profile: computed(() => AppState.profile)
    })
    onMounted(() => {

    })
    return {
      state
    }
  }
}
</script>

<style scoped>
img{
  border-radius: 10px;
  width: 100%;
}
h2{
  font-size: 3.5rem;
}
h3{
  font-size: 2rem;
}
h4{
  font-size: 2.5rem;
}
</style>
