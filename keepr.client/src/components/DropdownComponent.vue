<template>
  <li class="dropdown-item" data-dismiss="modal" @click="addToVault(vaultProp.id, keepProp)">
    {{ vaultProp.name }}
  </li>
</template>

<script>
import { vaultsService } from '../services/VaultsService'

export default {
  name: 'DropdownComponent',
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
    return {
      async addToVault(id, keep) {
        try {
          await vaultsService.addToVault(id, keep)
        } catch (error) {
          Notification.toast('Error: ', +error, 'error')
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
