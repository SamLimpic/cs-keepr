<template>
  <!-- ANCHOR Simple Component to display user's personal Vaults when adding a Keep to a user Vault -->
  <li class="dropdown-item" data-dismiss="modal" @click="addToVault(vaultProp, keepProp)" v-if="vaultProp.creatorId === state.account.id">
    <span class="text-danger" v-if="vaultProp.isPrivate">{{ vaultProp.name }}</span>
    <span v-else>{{ vaultProp.name }}</span>
  </li>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { vaultsService } from '../services/VaultsService'
import Notification from '../utils/Notification'

export default {
  name: 'Dropdown',
  props: {
    vaultProp: {
      type: Object,
      required: true
    },
    keepProp: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      contains: false,
      account: computed(() => AppState.account),
      activeKeep: computed(() => AppState.activeKeep)
    })
    onMounted(async() => {

    })
    return {
      state,
      async addToVault(vault, keep) {
        try {
          await vaultsService.getVaultKeeps(vault.id)
          AppState.vaultKeeps.forEach(vk => {
            // NOTE Checks if the selected Keep was already added to the selected Vault
            if (vk.keepId === keep.id) {
              Notification.toast(`${keep.name} was already added to ${vault.name}!`, 'error')
              state.contains = true
            }
          })
          if (state.contains === false) {
            await vaultsService.addToVault(vault.id, keep)
            Notification.toast(`Added ${keep.name} to ${vault.name}!`, 'success')
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
.dropdown-item {
  cursor: pointer;
}
</style>
