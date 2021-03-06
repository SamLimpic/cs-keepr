import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  profile: {},
  vaults: [],
  allVaults: [],
  activeVault: {},
  newVault: {},
  keeps: [],
  activeKeep: {},
  newKeep: {},
  tags: [],
  rawTags: [],
  newTags: [],
  vaultKeeps: [],
  keepTags: [],
  activeTag: {},
  loading: true
})
