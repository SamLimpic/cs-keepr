import { AppState } from '../AppState'
import { api } from './AxiosService'

class VaultsService {
  async getMyVaults(id) {
    const res = await api.get(`api/profiles/${id}/vaults`)
    AppState.myVaults = res.data
  }

  async getProfileVaults(id) {
    const res = await api.get(`api/profiles/${id}/vaults`)
    AppState.vaults = res.data
  }

  async getVaultKeeps(vaultId) {
    const res = await api.get(`api/vaults/${vaultId}/keeps`)
    AppState.vaultKeeps = res.data
  }

  async addToVault(vaultId, keep) {
    const vaultKeep = {
      vaultId: vaultId,
      keepId: keep.id
    }
    await api.post('api/vaultkeeps', vaultKeep)
  }

  async createVault() {
    await api.post('api/vaults', AppState.newVault)
  }

  async createVaultAndAdd(keep) {
    const vaultKeep = {
      vaultId: AppState.newVault.id,
      keepId: keep.id
    }
    await api.post('api/vaultkeeps', vaultKeep)
  }

  setActiveVault(vaultId) {
    AppState.activeVault = AppState.vaults.find(v => v.id === vaultId)
  }
}

export const vaultsService = new VaultsService()
