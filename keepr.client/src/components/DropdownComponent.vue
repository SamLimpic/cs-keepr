<template>
  <li class="dropdown-item" data-dismiss="modal" @click="addToVault(vaultProp, state.activeKeep)">
    {{ vaultProp.name }}
  </li>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { vaultsService } from '../services/VaultsService'
import Notification from '../utils/Notification'

export default {
  name: 'Dropdown',
  props: {
    vaultProp: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      activeKeep: computed(() => AppState.activeKeep)
    })
    return {
      state,
      async addToVault(vault, keep) {
        try {
          await vaultsService.addToVault(vault.id, keep)
          Notification.toast(`Added ${keep.name} to ${vault.name}!`, 'success')
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
</style>
