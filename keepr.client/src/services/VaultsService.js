import { AppState } from '../AppState'
import { api } from './AxiosService'

class VaultsService {
  async getProfileVaults(id) {
    const res = await api.get(`api/profiles/${id}/vaults`)
    AppState.vaults = res.data
  }

  async getVaultKeeps(vaultId) {
    const res = await api.get(`api/vaults/${vaultId}/keeps`)
    AppState.vaultKeeps = res.data
  }

  async setActiveVault(vaultId) {
    const res = await api.get(`api/vaults/${vaultId}`)
    AppState.activeVault = res.data
  }

  async addToVault(vaultId, keep) {
    const vaultKeep = {
      vaultId: vaultId,
      keepId: keep.id
    }
    await api.post('api/vaultkeeps', vaultKeep)
  }

  async createVault() {
    const res = await api.post('api/vaults', AppState.newVault)
    AppState.newVault = res.data
  }

  async editVault(edit) {
    const res = await api.put(`api/vaults/${edit.id}`, edit)
    AppState.activeVault = res.data
  }

  async deleteVault(vaultId) {
    await api.delete(`api/vaults/${vaultId}`)
  }

  async removeFromVault(id) {
    await api.delete(`api/vaultkeeps/${id}`)
  }
}

export const vaultsService = new VaultsService()
