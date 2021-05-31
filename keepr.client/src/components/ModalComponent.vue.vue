<template>
  <div class="modal"
       id="keepModal"
       tabindex="-1"
       aria-labelledby="keepModalLabel"
       aria-hidden="true"
       v-if="state.activeKeep.name !== undefined"
  >
    <div class="modal-dialog modal-dialog-scrollable modal-xl">
      <div class="modal-content">
        <div class="row justify-content-center">
          <div class="col-md-6 col order-md-1 order-2">
            <img class="img-fluid p-3" :src="state.activeKeep.img" alt="">
          </div>
          <div class="col-md-6 col order-md-2 order-1">
            <div class="modal-header row justify-content-center position-relative pt-5">
              <div class="col-3">
                <h3><span><i class="far fa-eye text-primary px-3"></i></span>{{ state.activeKeep.views }}</h3>
              </div>
              <div class="col-3">
                <h3><span><i class="fab fa-kaggle text-primary px-3"></i></span>{{ state.activeKeep.keeps }}</h3>
              </div>
              <div class="col-3">
                <h3><span><i class="fas fa-share text-primary px-3"></i></span>{{ state.activeKeep.shares }}</h3>
              </div>
            </div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span class="text-danger" aria-hidden="true"><i class="fas fa-times"></i></span>
            </button>
            <div class="modal-body">
              <h2 class="modal-title">
                {{ state.activeKeep.Name }}
              </h2>
              <p>{{ state.activeKeep.Description }}</p>
            </div>
            <div class="modal-footer row justify-content-between">
              <div class="col-4">
                <div class="btn-group dropup">
                  <button type="button" class="btn btn-lg btn-outline-primary dropdown-toggle w-100" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Add to Vault
                  </button>
                  <div class="dropdown-menu">
                    <DropdownComponent v-for="v in state.myVaults" :key="v.id" :vault-prop="v" :keep-prop="keepProp" />
                    <div class="dropdown-divider"></div>
                    <li class="dropdown-item" data-dismiss="modal" @click="createVault(state.activeKeep)">
                      Add to New Vault
                    </li>
                  </div>
                </div>
              </div>
              <div class="col-4 text-center">
                <button type="button" label="Delete" class="btn btn-lg btn-outline-danger border-0" @click="deleteKeep(state.activeKeep)" v-if="state.activeKeep.creatorId == state.account.id">
                  <i class="far fa-trash-alt"></i>
                </button>
                <button type="button" label="Delete Disabled" class="btn btn-lg btn-outline-danger border-0" disabled v-else>
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
              <div class="col-4">
                <span><img class="rounded-circle" :src="state.activeKeep.creator.picture" alt="" @click="goToProfile(state.activeKeep.creatorId)" /><h4>{{ state.activeKeep.creator.name.split('@')[0] }}</h4></span>
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

export default {
  name: 'ModalComponent',
  setup() {
    const state = reactive({
      account: computed(() => AppState.account),
      activeKeep: computed(() => AppState.activeKeep),
      myVaults: computed(() => AppState.myVaults)
    })
    return {
      state,
      async createVault(keep) {
        try {
          await vaultsService.createVaultAndAdd(keep)
        } catch (error) {
          Notification.toast('Error: ', +error, 'error')
        }
      },
      async deleteKeep(keep) {
        try {
          if (await Notification.confirmAction('Are you sure?', `${keep.name} will be gone for good!`, 'warning', `Delete ${keep.name}`)) {
            await keepsService.deleteKeep(keep.id)
            Notification.toast(`${keep.name} was deleted!`, 'danger')
          } else {
            Notification.toast(`No worries! ${keep.name} is still here!`, 'info')
          }
        } catch (error) {
          Notification.toast('Error: ', +error, 'error')
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
img{
  border-radius: 15px;
}
.close{
  position: absolute;
  right: 30px;
  top: 10px;
}
</style>
