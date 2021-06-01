<template>
  <div class="modal"
       id="keepModal"
       tabindex="-1"
       aria-labelledby="keepModalLabel"
       aria-hidden="true"
       v-if="state.activeKeep.name !== undefined"
  >
    <div class="modal-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
      <div class="modal-content">
        <div class="row justify-content-center">
          <div class="col-md-6 col-12 order-md-1 order-2 position-relative">
            <button type="button"
                    aria-label="Delete Keep"
                    class="btn btn-outline-danger bg-transparent border-0 btn-overlay"
                    data-dismiss="modal"
                    @click="deleteKeep(state.activeKeep)"
                    v-if="state.activeKeep.creatorId === state.account.id"
            >
              <i class="fas fa-times"></i>
            </button>
            <img class="w-100 p-3" :src="state.activeKeep.img" alt="">
          </div>
          <div class="col-md-6 col-12 order-md-2 order-1 position-relative">
            <div class="modal-header row justify-content-center position-relative pt-5">
              <div class="col-md-3 col-4 text-center">
                <h4><span><i class="far fa-eye text-primary pr-3"></i></span>{{ state.activeKeep.views }}</h4>
              </div>
              <div class="col-md-3 col-4 text-center">
                <h4><span><i class="fab fa-kaggle text-primary pr-3"></i></span>{{ state.activeKeep.keeps }}</h4>
              </div>
              <div class="col-md-3 col-4 text-center">
                <h4><span><i class="fas fa-share-alt text-primary pr-3"></i></span>{{ state.activeKeep.shares }}</h4>
              </div>
            </div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close Modal">
              <span class="text-danger" aria-hidden="true"><i class="fas fa-times"></i></span>
            </button>
            <div class="modal-body">
              <h2 class="modal-title">
                <u>{{ state.activeKeep.name }}</u>
              </h2>
              <h3>{{ state.activeKeep.description }}</h3>
            </div>
            <div class="modal-footer row justify-content-between">
              <div class="col-md-5 col-4">
                <div class="btn-group dropup">
                  <button type="button"
                          class="btn btn-lg btn-outline-primary dropdown-toggle"
                          data-toggle="dropdown"
                          aria-label="Dropdown Vault List"
                          aria-haspopup="true"
                          aria-expanded="false"
                  >
                    Add to Vault
                  </button>
                  <div class="dropdown-menu">
                    <Dropdown v-for="v in state.vaults" :key="v.id" :vault-prop="v" :account-prop="state.account.id" />
                    <div class="dropdown-divider"></div>
                    <li class="dropdown-item" data-dismiss="modal" @click="createVault(state.activeKeep)">
                      Add to New Vault
                    </li>
                  </div>
                </div>
              </div>
              <div class="col-md-5 col-6">
                <router-link :to="{name: 'Profile', params: {id: state.activeKeep.creatorId}}">
                  <h4 class="p-0 m-0" data-dismiss="modal">
                    <span><img class="rounded-circle icon mr-3" :src="state.activeKeep.creator.picture" alt="" /></span>{{ state.activeKeep.creator.name.split('@')[0] }}
                  </h4>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { vaultsService } from '../services/VaultsService'
import { keepsService } from '../services/KeepsService'
import Notification from '../utils/Notification'

export default {
  name: 'Modal',
  setup() {
    const state = reactive({
      account: computed(() => AppState.account),
      activeKeep: computed(() => AppState.activeKeep)
    })
    return {
      state,
      async createVault(keep) {
        try {
          await Notification.multiModal('Vault')
          await Notification.isPrivate()
          await vaultsService.createVaultAndAdd(keep)
          Notification.toast(`Added ${keep.name} to your new Vault, ${AppState.newVault.name}!`, 'success')
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      },
      async deleteKeep(keep) {
        try {
          if (await Notification.confirmAction('Are you sure?', `${keep.name} will be gone for good!`, 'warning', `Delete ${keep.name}`)) {
            await keepsService.deleteKeep(keep.id)
            await keepsService.getKeeps(keep.id)
            Notification.toast(`${keep.name} was deleted!`, 'error')
          } else {
            Notification.toast(`No worries! ${keep.name} is still here!`, 'info')
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
  border-radius: 35px;
}
.close{
  position: absolute;
  right: 30px;
  top: 10px;
}
.icon{
  height: 2.5rem;
  width: 2.5rem
}
.btn-overlay{
  position: absolute;
  right: 35px;
  top: 10px;
  font-size: 2.5rem;
}
.modal-body {
  margin-bottom: 100px;
}
.modal-footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
}
</style>
