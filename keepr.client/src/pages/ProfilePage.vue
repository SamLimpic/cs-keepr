<template>
  <div class="profile container-fluid py-md-4 py-2 px-md-5 px-4" v-if="!state.loading">
    <div id="profile-info" class="row justify-content-center">
      <div class="col-md-2 col-5 pt-md-4 pt-3">
        <button type="button" class="btn btn-outline-info btn-overlay font-md" aria-label="Edit Profile" @click="editProfile" v-if="state.profile.id === state.account.id">
          <i class="fas fa-edit"></i>
        </button>
        <img class="rounded-circle profile" :src="state.profile.picture" alt="" />
      </div>
      <div class="col-md-10 col-7 pt-md-5">
        <div v-if="state.profile.name = 'Smeagol'">
          <h2 class="font-xxl" v-if="state.smeagol === 'Smeagol'">
            <u>{{ state.smeagol }}</u>
          </h2>
          <h2 class="font-xxl text-danger" v-if="state.smeagol === 'Gollum'">
            <u><i>{{ state.smeagol }}</i></u>
          </h2>
        </div>
        <h2 class="font-xxl" v-else>
          <u>{{ state.profile.name.split('@')[0] }}</u>
        </h2>
        <h3 class="font-lg">
          Vaults: {{ state.allVaults.length }}
        </h3>
        <h3 class="font-lg">
          Keeps: {{ state.keeps.length }}
        </h3>
      </div>
    </div>
    <div id="add-vault" class="row justify-content-start pt-md-5 pt-3 pl-2">
      <div class="col">
        <h4 class="font-xl">
          <span v-if="state.profile.id === state.account.id && state.private === false">
            <button type="button" aria-label="Public or Private" class="btn btn-outline-info bg-transparent border-0 font-lg pt-0 px-2 mr-4" @click="showPrivates(true)">
              <i class="fas fa-shield-alt"></i>
            </button>
            <u>Public Vaults</u>
          </span>
          <span v-if="state.profile.id === state.account.id && state.private === true">
            <button type="button" aria-label="Public or Private" class="btn btn-outline-danger bg-transparent border-0 font-lg pt-0 px-2 mr-4" @click="showPrivates(false)">
              <i class="fas fa-shield-alt"></i>
            </button>
            <u>Private Vaults</u>
          </span>
          <span v-else-if="state.profile.id !== state.account.id">
            <u>Vaults</u>
          </span>
          <span>
            <button type="button" aria-label="Add Vault" class="btn btn-outline-info bg-transparent border-0 font-lg pt-0 px-2 ml-4" @click="createVault" v-if="state.profile.id === state.account.id">
              <i class="fas fa-plus"></i>
            </button>
          </span>
        </h4>
      </div>
    </div>
    <div id="vaults" class="card-columns">
      <VaultCard v-for="v in state.vaults" :key="v.id" :card-prop="v" :profile-prop="route.params.id" />
    </div>
    <div id="add-keep" class="row justify-content-start pt-md-4 pt-3 pl-2">
      <div class="col">
        <h4 class="font-xl">
          <u>Keeps</u>
          <span>
            <button type="button" aria-label="Add Keep" class="btn btn-outline-info bg-transparent border-0 font-lg py-0 px-2 ml-3" @click="createKeep" v-if="state.profile.id === state.account.id">
              <i class="fas fa-plus"></i>
            </button>
          </span>
        </h4>
      </div>
    </div>
    <div id="keeps" class="card-columns">
      <KeepCard v-for="k in state.keeps" :key="k.id" :card-prop="k" :profile-prop="route.params.id" />
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
import { vaultsService } from '../services/VaultsService'
import { keepsService } from '../services/KeepsService'
import { tagsService } from '../services/TagsService'
import { accountService } from '../services/AccountService'
import Notification from '../utils/Notification'
import { useRoute } from 'vue-router'

export default {
  name: 'Profile',
  setup() {
    const route = useRoute()
    const state = reactive({
      loading: true,
      private: false,
      smeagol: 'Smeagol',
      profile: computed(() => AppState.profile),
      account: computed(() => AppState.account),
      keeps: computed(() => AppState.keeps),
      vaults: computed(() => AppState.vaults),
      allVaults: computed(() => AppState.allVaults)
    })
    onMounted(async() => {
      try {
        setTimeout(function() { state.loading = false }, 900)
        await accountService.getProfile(route.params.id)
        await keepsService.getProfileKeeps(route.params.id)
        await vaultsService.getAllVaults(route.params.id)
        await vaultsService.getProfileVaults(route.params.id)
        AppState.vaults = state.vaults.filter(v => !v.isPrivate)
        if (state.profile.name === 'Smeagol') {
          setTimeout(function() {
            state.smeagol = 'Gollum'
            setTimeout(function() {
              state.smeagol = 'Smeagol'
            }, 1000)
          }, 1200)
          setInterval(() => {
            setTimeout(function() {
              state.smeagol = 'Gollum'
              setTimeout(function() {
                state.smeagol = 'Smeagol'
              }, 1000)
            }, 1200)
          }, 3360)
        }
      } catch (error) {
        Notification.toast('Error: ' + error, 'error')
      }
    })
    return {
      route,
      state,
      async createVault() {
        try {
          await Notification.vaultModal()
          await Notification.isPrivate(AppState.newVault)
          await vaultsService.createVault()
          Notification.toast(`Your new Vault, ${AppState.newVault.name}, was created!`, 'success')
          await vaultsService.getProfileVaults(route.params.id)
          AppState.vaults = state.vaults.filter(v => !v.isPrivate)
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      },
      async createKeep() {
        try {
          await Notification.keepModal()
          await keepsService.createKeep()
          if (AppState.rawTags[0]) {
            await tagsService.createTags()
            await tagsService.createKeepTags(AppState.newKeep)
          }
          Notification.toast(`Your new Keep, ${AppState.newKeep.name}, was created!`, 'success')
          await keepsService.getProfileKeeps(route.params.id)
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      },
      async editProfile() {
        await Notification.editAccount()
        await accountService.editAccount(AppState.account)
        Notification.toast('Your profile was updated!', 'success')
      },
      async showPrivates(bool) {
        await vaultsService.getProfileVaults(state.account.id)
        if (bool) {
          AppState.vaults = state.vaults.filter(v => v.isPrivate)
          Notification.toast('Now showing your Private Vaults', 'warning')
        } else {
          AppState.vaults = state.vaults.filter(v => !v.isPrivate)
          Notification.toast('Now showing your Public Vaults', 'info')
        }
        state.private = bool
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
.profile {
  height: auto;
  object-fit: cover;
}
.card {
  background: transparent;
  border: none;
}
.btn-overlay{
  position: absolute;
  border: none;
  background: transparent;
  transform: scaleX(-1);
  left: -10px;
  top: -5px;
}

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
    -webkit-column-count: 4;
    -moz-column-count: 4;
    column-count: 4;
  }
}

@media (min-width: 992px) {
  .card-columns {
    -webkit-column-count: 5;
    -moz-column-count: 5;
    column-count: 5;
  }
}

@media (min-width: 1200px) {
  .card-columns {
    -webkit-column-count: 6;
    -moz-column-count: 6;
    column-count: 6;
  }
}

</style>
