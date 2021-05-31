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

  async addToVault(vaultId, keep) {
    const vault = AppState.Vaults.find(v => v.id === vaultId)
    await api.post(`api/vaults/${vaultId}/keeps`, keep)
    Notification.toast(`Added ${keep.name} to ${vault.name}!`, 'success')
  }

  async CreateVault() {
    await Notification.multiModal()
    await api.post(`api/profile/${AppState.account.id}/vaults`, AppState.newVault)
    Notification.toast(`Your new Vault, ${AppState.newVault.name}, was created!`, 'success')
  }

  async CreateVaultAndAdd(keep) {
    await Notification.multiModal()
    await api.post(`api/profile/${AppState.account.id}/vaults`, AppState.newVault)
    await api.post(`api/vaults/${AppState.newVault.id}/keeps`, keep)
    Notification.toast(`Added ${keep.name} to your new Vault, ${AppState.newVault.name}!`, 'success')
  }

  setActiveVault(vaultId) {
    AppState.activeVault = AppState.vaults.find(v => v.id === vaultId)
  }
}

export const vaultsService = new VaultsService()
