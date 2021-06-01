import { AppState } from '../AppState'
import { api } from './AxiosService'

class KeepsService {
  async getKeeps() {
    const res = await api.get('api/keeps')
    AppState.keeps = res.data
  }

  async getProfileKeeps(id) {
    const res = await api.get(`api/profiles/${id}/keeps`)
    AppState.keeps = res.data
  }

  async createKeep() {
    await api.post('api/keeps', AppState.newKeep)
  }

  async editKeep(edit) {
    const res = await api.put(`api/keeps/${edit.id}`, edit)
    AppState.activeKeep = res.data
  }

  async deleteKeep(keepId) {
    await api.delete(`api/keeps/${keepId}`)
  }

  async setActiveKeep(keepId) {
    const res = await api.get(`api/keeps/${keepId}`)
    AppState.activeKeep = res.data
  }
}

export const keepsService = new KeepsService()
