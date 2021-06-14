<template>
  <div class="card position-relative px-md-2 px-2 pb-md-3 pb-3">
    <div class="position-relative">
      <img class="w-100 box-shadow"
           :src="keepProp.img"
           alt="Keep Image"
           data-toggle="modal"
           data-target="#keepModal"
           draggable="false"
           @click="setActiveKeep(keepProp.id)"
      >
      <h2 class="text-overlay text-shadow text-light font-lg">
        {{ keepProp.name }}
      </h2>
      <router-link :to="{name: 'Profile', params: {id: keepProp.creatorId}}">
        <img class="icon icon-overlay rounded-circle" :src="keepProp.creator.picture" alt="Profile Icon" draggable="false" @click="goToProfile">
      </router-link>
      <button type="button"
              aria-label="Remove Keep from Vault"
              class="btn btn-outline-danger bg-transparent border-0 p-0 m-0 btn-overlay"
              data-dismiss="modal"
              @click="removeFromVault(vaultKeepProp)"
              v-if="vaultKeepProp && state.activeVault.creatorId === state.account.id"
      >
        <i class="fas fa-minus-circle font-lg"></i>
      </button>
    </div>
  </div>
  <Modal />
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { keepsService } from '../services/KeepsService'
import { vaultsService } from '../services/VaultsService'
import Notification from '../utils/Notification'

export default {
  name: 'Keep',
  props: {
    keepProp: {
      type: Object,
      required: true
    },
    // eslint-disable-next-line vue/require-default-prop
    vaultKeepProp: {
      type: Object,
      required: false
    }
  },
  setup() {
    const state = reactive({
      account: computed(() => AppState.account),
      activeKeep: computed(() => AppState.activeKeep),
      activeVault: computed(() => AppState.activeVault),
      vaultKeeps: computed(() => AppState.vaultKeeps)
    })
    return {
      state,
      async setActiveKeep(id) {
        try {
          AppState.loading = true
          setTimeout(function() { AppState.loading = false }, 1100)
          keepsService.setActiveKeep(id)
          await keepsService.getKeepTags(id)
          if (state.account.id) {
            await vaultsService.getProfileVaults(state.account.id)
          }
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      },
      async removeFromVault(vaultKeep) {
        try {
          if (await Notification.confirmAction('Are you sure?', `Do you want to remove ${vaultKeep.name} from this Vault?`, 'warning', `Delete ${vaultKeep.name}`)) {
            await vaultsService.removeFromVault(vaultKeep.vaultKeepId)
            await vaultsService.getVaultKeeps(vaultKeep.vaultId)
            Notification.toast(`${vaultKeep.name} was deleted!`, 'success')
          } else {
            Notification.toast(`No worries! ${vaultKeep.name} is still here!`, 'info')
          }
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
  left: 15px;
  top: 12px;
}
.btn-overlay{
  position: absolute;
  right: 15px;
  top: 12px;
}
.loading {
  position: absolute;
  left: 5rem;
  bottom: 5rem;
}
</style>
