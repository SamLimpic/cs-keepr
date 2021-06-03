<template>
  <div class="vault container-fluid pt-md-4 pb-md-4 pb-2 px-md-5 px-3" v-if="!state.loading">
    <div class="row justify-content-start pt-2">
      <div class="col px-4 position-relative">
        <div class="row justify-content-start">
          <h2 class="font-xl ml-3 mt-1 edit"
              @click.stop=""
              spellcheck="false"
              contenteditable="true"
              @blur="editName"
              v-if="state.activeVault.creatorId === state.account.id"
          >
            <u> {{ state.activeVault.name }}</u>
          </h2>
          <h2 class="font-xl ml-3 mt-1" v-else>
            <u> {{ state.activeVault.name }}</u>
          </h2>
          <button type="button"
                  aria-label="Delete Vault"
                  class="btn btn-outline-danger bg-transparent border-0 font-lg ml-md-3 ml-2"
                  data-dismiss="modal"
                  @click="deleteVault(state.activeVault)"
                  v-if="state.activeVault.creatorId === state.account.id"
          >
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
        <h2 class="font-lg">
          Keeps: {{ state.vaultKeeps.length }}
        </h2>
      </div>
    </div>
    <div class="card-columns pt-md-2" v-if="state.vaultKeeps[0]">
      <Keep v-for="(k, index) in state.vaultKeeps" :key="k.keepId" :keep-prop="k" :vault-keep-prop="state.vaultKeeps[index]" />
    </div>
    <div class="row justify-content-center pt-5" v-else>
      <div class="col text-center pt-md-4 pt-2 px-4">
        <h3 class="font-xl">
          <i>This Vault has no Keeps!</i>
        </h3>
      </div>
    </div>
  </div>
  <div class="loading container-fluid pt-5" v-else>
    <div class="row justify-content-center">
      <div class="col text-center pt-5">
        <i class="fas fa-ring text-warning fa-spin font-xxl"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { vaultsService } from '../services/VaultsService'
import Notification from '../utils/Notification'
import router from '../router'
import { useRoute } from 'vue-router'

export default {
  name: 'Vault',
  setup() {
    const route = useRoute()
    const state = reactive({
      loading: true,
      account: computed(() => AppState.account),
      activeVault: computed(() => AppState.activeVault),
      vaultKeeps: computed(() => AppState.vaultKeeps)
    })
    onMounted(async() => {
      try {
        setTimeout(function() { state.loading = false }, 900)
        vaultsService.setActiveVault(route.params.id)
        await vaultsService.getVaultKeeps(route.params.id)
      } catch (error) {
        Notification.toast('Error: ' + error, 'error')
      }
    })
    return {
      state,
      async deleteVault(vault) {
        try {
          if (await Notification.confirmAction('Are you sure?', `${vault.name} will be gone for good!`, 'warning', `Delete ${vault.name}`)) {
            await vaultsService.deleteVault(vault.id)
            router.push({ name: 'Profile', params: { id: vault.creatorId } })
            Notification.toast(`${vault.name} was deleted!`, 'success')
          } else {
            Notification.toast(`No worries! ${vault.name} is still here!`, 'info')
          }
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      },
      async editName(event) {
        try {
          state.activeVault.name = event.target.innerText
          await vaultsService.editVault(state.activeVault)
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.edit{
  min-width: 2rem;
}
.edit:hover{
  border: 1px dashed var(--primary);
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
