<template>
  <div class="modal"
       id="keepModal"
       tabindex="-1"
       aria-labelledby="keepModalLabel"
       aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
      <div class="modal-content">
        <div class="row justify-content-center">
          <div class="col-md-6 col-12 order-md-1 order-2 position-relative">
            <button type="button"
                    aria-label="Delete Keep"
                    class="btn btn-outline-danger bg-transparent border-0 btn-overlay font-xl"
                    data-dismiss="modal"
                    @click="deleteKeep(state.activeKeep)"
                    v-if="state.activeKeep.creatorId === state.account.id"
            >
              <i class="fas fa-minus-circle font-lg"></i>
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
            <div class="modal-body position-relative" v-if="state.activeKeep.creatorId === state.account.id">
              <button type="button" class="btn btn-outline-primary edit-overlay border-0 font-xl" aria-label="Edit Keep" @click="editKeep" v-if="state.activeKeep.creatorId === state.account.id && state.edit === true">
                <i class="fas fa-edit"></i>
              </button>
              <h2 class="modal-title edit w-75"
                  @click.stop=""
                  spellcheck="false"
                  contenteditable="true"
                  @blur="editName"
              >
                <u>{{ state.activeKeep.name }}</u>
              </h2>
              <h3 class="edit w-75"
                  @click.stop=""
                  spellcheck="false"
                  contenteditable="true"
                  @blur="editDescription"
              >
                {{ state.activeKeep.description }}
              </h3>
            </div>
            <div class="modal-body" v-else>
              <h2 class="modal-title">
                <u>{{ state.activeKeep.name }}</u>
              </h2>
              <h3>
                {{ state.activeKeep.description }}
              </h3>
            </div>
            <div class="modal-footer row justify-content-between px-4 pb-md-3 pb-0">
              <div class="btn-group dropup m-0 pl-md-0 pl-2" v-if="state.user.isAuthenticated">
                <button type="button"
                        class="btn btn-lg btn-outline-primary d-md-block d-none dropdown-toggle"
                        data-toggle="dropdown"
                        aria-label="Dropdown Vault List"
                        aria-haspopup="true"
                        aria-expanded="false"
                >
                  Add to Vault
                </button>
                <button type="button"
                        class="btn btn-outline-primary d-md-none d-block dropdown-toggle"
                        data-toggle="dropdown"
                        aria-label="Dropdown Vault List"
                        aria-haspopup="true"
                        aria-expanded="false"
                >
                  Add to Vault
                </button>
                <div class="dropdown-menu" v-if="state.account.id !== undefined">
                  <li class="dropdown-item" data-dismiss="modal" @click="createVault(state.activeKeep)">
                    <b>Add to New Vault</b>
                  </li>
                  <div class="dropdown-divider"></div>
                  <Dropdown v-for="v in state.vaults" :key="v.id" :vault-prop="v" :keep-prop="state.activeKeep" />
                </div>
              </div>
              <router-link :to="{name: 'Profile', params: {id: state.activeKeep.creatorId}}">
                <h4 class="text-right p-0 m-0 pr-md-0 pr-1" data-dismiss="modal" v-if="state.activeKeep.creator.picture !== null">
                  {{ state.activeKeep.creator.name.split('@')[0] }}
                  <span><img class="rounded-circle icon mr-md-3 mr-0 ml-2" :src="state.activeKeep.creator.picture" alt="" /></span>
                </h4>
              </router-link>
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
      edit: false,
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      vaults: computed(() => AppState.vaults),
      activeKeep: computed(() => AppState.activeKeep)
    })
    return {
      state,
      async createVault(keep) {
        try {
          await Notification.multiModal('Vault')
          await Notification.isPrivate(AppState.newVault)
          await vaultsService.createVault()
          await vaultsService.addToVault(AppState.newVault.id, keep)
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
      },
      editName(event) {
        try {
          state.activeKeep.name = event.target.innerText
          state.edit = true
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      },
      editDescription(event) {
        try {
          state.activeKeep.description = event.target.innerText
          state.edit = true
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      },
      async editKeep() {
        try {
          await keepsService.editKeep(state.activeKeep)
          location.reload()
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
  right: 40px;
  top: 20px;
}
.edit-overlay{
  position: absolute;
  right: 20px;
  top: 20px;
}
.modal-body {
  margin-bottom: 70px;
}
.modal-footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
}
.edit{
  min-width: 2rem;
}
.edit:hover{
  border: 1px dashed var(--primary);
}
.dropdown-menu {
  max-height: 25vh;
  overflow: auto;
}
.modal-content {
  overflow-y: auto;
}
</style>
