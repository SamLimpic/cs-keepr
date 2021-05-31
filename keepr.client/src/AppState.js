import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  profile: {},
  vaults: [],
  myVaults: [],
  activeVault: {},
  newVault: {},
  keeps: [],
  myKeeps: [],
  activeKeep: {},
  newKeep: {},
  vaultKeeps: []
})
