import { AppState } from '../AppState'
import { api } from './AxiosService'

class VaultsService {
  async getVaults() {
    const res = await api.get('api/vaults')
    AppState.vaults = res.data
  }

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
    await api.post('api/vaults', AppState.newVault)
  }

  async createVaultAndAdd(keep) {
    const vaultKeep = {
      vaultId: AppState.newVault.id,
      keepId: keep.id
    }
    await api.post('api/vaultkeeps', vaultKeep)
  }
}

export const vaultsService = new VaultsService()
