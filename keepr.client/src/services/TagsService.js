import { AppState } from '../AppState'
import { api } from './AxiosService'

class TagsService {
  async getTags() {
    const res = await api.get('api/tags')
    AppState.tags = res.data
  }

  async getKeepsByTag(tag) {
    const res = await api.get(`api/tags/${tag.id}/keeps`)
    AppState.keeps = res.data
  }

  async createTags() {
    let rawTags = AppState.rawTags
    AppState.rawTags.forEach((r, index) => {
      AppState.tags.forEach(t => {
        if (t.name === r) {
          rawTags = rawTags.filter(!r)
        }
      })
      if (rawTags[index] === r) {
        AppState.newTags.push({ name: r })
      }
    })
    await api.post('api/tags', AppState.newTags)
    await this.getTags()
    AppState.newTags = []
  }

  async createKeepTags(keep) {
    AppState.rawTags.forEach(r => {
      AppState.newTags.push(AppState.tags.find(t => t.name === r))
    })
    const keepTags = []
    AppState.newTags.forEach(nt => {
      keepTags.push({
        keepId: keep.id,
        tagId: nt.id
      })
    })
    await api.post('api/keepTags', keepTags)
    AppState.newTags = []
  }
}

export const tagsService = new TagsService()
