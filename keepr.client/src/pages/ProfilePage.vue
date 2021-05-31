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
        <h3>Vaults: {{ state.vaults.length }}</h3>
        <h3>Keeps: {{ state.keeps.length }}</h3>
      </div>
    </div>
    <div id="add-vault" class="row justify-content-start pt-md-5 pt-3 pl-2">
      <div class="col">
        <h4>
          Vaults
          <span>
            <button type="button" label="Add Vault" class="btn btn-outline-info bg-transparent border-0 font-sm py-0 px-2 ml-3" @click="createVault">
              <i class="fas fa-plus"></i>
            </button>
          </span>
        </h4>
      </div>
    </div>
    <div id="vaults" class="row justify-content-start">
      <VaultCard v-for="v in state.vaults" :key="v.id" :card-prop="v" />
    </div>
    <div id="add-keep" class="row justify-content-start pt-5 pl-2">
      <div class="col">
        <h4>
          Keeps
          <span>
            <button type="button" label="Add Keep" class="btn btn-outline-info bg-transparent border-0 font-sm py-0 px-2 ml-3" @click="createKeep">
              <i class="fas fa-plus"></i>
            </button>
          </span>
        </h4>
      </div>
    </div>
    <div id="keeps" class="row justify-content-start">
      <KeepCard v-for="k in state.keeps" :key="k.id" :card-prop="k" />
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
import { vaultsService } from '../services/VaultsService'
import { keepsService } from '../services/KeepsService'
import { accountService } from '../services/AccountService'
import Notification from '../utils/Notification'
import { useRoute } from 'vue-router'

export default {
  name: 'Profile',
  setup() {
    const route = useRoute()
    const state = reactive({
      loading: true,
      profile: computed(() => AppState.profile),
      keeps: computed(() => AppState.keeps),
      vaults: computed(() => AppState.vaults)
    })
    onMounted(async() => {
      try {
        await accountService.getProfile(route.params.id)
        await keepsService.getProfileKeeps(route.params.id)
        await vaultsService.getProfileVaults(route.params.id)
        state.loading = false
      } catch (error) {
        Notification.toast('Error: ' + error, 'error')
      }
    })
    return {
      route,
      state,
      async createVault() {
        try {
          await Notification.multiModal('Vault')
          await Notification.isPrivate()
          await vaultsService.createVault()
          Notification.toast(`Your new Vault, ${AppState.newVault.name}, was created!`, 'success')
          await vaultsService.getProfileVaults(route.params.id)
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      },
      async createKeep() {
        try {
          await Notification.multiModal('Keep')
          await keepsService.createKeep()
          Notification.toast(`Your new Keep, ${AppState.newKeep.name}, was created!`, 'success')
          await keepsService.getProfileKeeps(route.params.id)
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      }
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
h5{
  font-size: 2rem;
}
.text-overlay{
  position: absolute;
  left: 13px;
  bottom: 0px;
  color: var(--light);
  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
}
.btn-overlay{
  position: absolute;
  right: 3px;
  top: -3px;
  font-size: 2rem;
}
</style>
