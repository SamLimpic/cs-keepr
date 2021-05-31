import { AppState } from '../AppState'
import { api } from './AxiosService'

class KeepsService {
  async getKeeps() {
    const res = await api.get('api/keeps')
    AppState.keeps = res.data
  }

  async getMyKeeps(id) {
    const res = await api.get(`api/profiles/${id}/keeps`)
    AppState.myKeeps = res.data
  }

  async getProfileKeeps(id) {
    const res = await api.get(`api/profiles/${id}/keeps`)
    AppState.keeps = res.data
  }

  async createKeep() {
    await api.post('api/keeps', AppState.newKeep)
  }

  async deleteKeep(keepId) {
    await api.delete(`api/keeps/${keepId}`)
  }

  setActiveKeep(keepId) {
    AppState.activeKeep = AppState.keeps.find(k => k.id === keepId)
  }
}

export const keepsService = new KeepsService()
