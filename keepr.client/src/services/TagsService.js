import { AppState } from '../AppState'
import router from '../router'
import { api } from './AxiosService'

class TagsService {
  async getTags() {
    const res = await api.get('api/tags')
    AppState.tags = res.data
  }

  async createTags() {
    // NOTE Checks the server for the submitted Tag Name and only adds any that do not already exist
    let rawTags = AppState.rawTags
    AppState.rawTags.forEach(r => {
      AppState.tags.forEach(t => {
        if (t.name === r) {
          rawTags = rawTags.filter(rt => rt !== r)
        }
      })
      if (rawTags.includes(r)) {
        AppState.newTags.push({ name: r })
      }
    })
    await api.post('api/tags', AppState.newTags)
    await this.getTags()
    AppState.newTags = []
  }

  async createKeepTags(keep) {
    // NOTE Ties existing Tags from the server to the specific Keep that they are to be added to
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

  async setActiveTag(tag) {
    const res = await api.get(`api/tags/${tag.id}`)
    AppState.activeTag = res.data
    router.push({ name: 'Search', params: { id: tag.id } })
  }
}

export const tagsService = new TagsService()
