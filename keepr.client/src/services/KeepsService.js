import { AppState } from '../AppState'
import { api } from './AxiosService'

class KeepsService {
  async getKeeps() {
    const res = await api.get('api/keeps')
    AppState.keeps = res.data
  }

  shuffleKeeps() {
    const array = AppState.keeps
    let currentIndex = array.length; let randomIndex

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]]
    }

    AppState.keeps = array
  }

  async getProfileKeeps(id) {
    const res = await api.get(`api/profiles/${id}/keeps`)
    AppState.keeps = res.data
  }

  async getKeepTags(id) {
    const res = await api.get(`api/keeps/${id}/tags`)
    AppState.keepTags = res.data
  }

  async createKeep() {
    const res = await api.post('api/keeps', AppState.newKeep)
    AppState.newKeep = res.data
  }

  async editKeep(edit) {
    const res = await api.put(`api/keeps/${edit.id}`, edit)
    AppState.activeKeep = res.data
  }

  async deleteKeep(keepId) {
    await api.delete(`api/keeps/${keepId}`)
  }

  setActiveKeep(keepId) {
    AppState.activeKeep = AppState.keeps.find(k => k.id === keepId)
  }
}

export const keepsService = new KeepsService()
