<template>
  <li class="dropdown-item" data-dismiss="modal" @click="addToVault(vaultProp, state.activeKeep)" v-if="state.contains === false">
    {{ vaultProp.name }}
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
    }
  },
  setup(props) {
    const state = reactive({
      contains: false,
      activeKeep: computed(() => AppState.activeKeep)
    })
    onMounted(async() => {
      try {
        await vaultsService.getVaultKeeps(props.vaultProp.id)
        AppState.vaultKeeps.forEach(vk => {
          if (vk.vaultId === props.vaultProp.id && vk.keepId === state.activeKeep.id) {
            state.contains = true
          }
        })
      } catch (error) {
        Notification.toast('Error: ' + error, 'error')
      }
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
