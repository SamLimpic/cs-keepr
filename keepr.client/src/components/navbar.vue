<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
    <router-link class="navbar-brand d-flex outline" :to="{ name: 'Home' }">
      <h1 class="pl-2">
        <i class="fab fa-facebook-f text-info"></i><span class="outline-plus">ellowship</span>
        <span><button type="button" aria-label="Add Keep" class="btn btn-outline-info bg-transparent border-0 outline-plus p-0 px-1 my-0 ml-2" @click="createKeep" v-if="user.isAuthenticated">
          <h2 class="m-0 p-0"><i class="fas fa-plus"></i></h2>
        </button></span>
      </h1>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
        </li>
      </ul>
      <span class="navbar-text text-light">
        <button
          class="btn btn-outline-light text-uppercase"
          @click="login"
          v-if="!user.isAuthenticated"
        >
          Login
        </button>

        <div class="dropdown font-nav" v-else>
          <div
            class="dropdown-toggle"
            @click="state.dropOpen = !state.dropOpen"
          >
            <img
              :src="account.picture"
              alt="user photo"
              height="40"
              class="rounded-circle"
              loading="lazy"
            />
            <span class="mx-3 outline font-nav">{{ user.name }}</span>
          </div>
          <div
            class="dropdown-menu p-0 list-group w-100"
            :class="{ show: state.dropOpen }"
            @click="state.dropOpen = false"
          >
            <router-link :to="{ name: 'Profile', params: {id: account.id} }">
              <div class="list-group-item list-group-item-action hoverable font-nav">
                Profile
              </div>
            </router-link>
            <div
              class="list-group-item list-group-item-action hoverable font-nav"
              @click="logout"
            >
              Logout
            </div>
          </div>
        </div>
      </span>
    </div>
  </nav>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
import { keepsService } from '../services/KeepsService'
import { tagsService } from '../services/TagsService'
import Notification from '../utils/Notification'

export default {
  name: 'Navbar',
  setup() {
    const state = reactive({
      dropOpen: false
    })
    return {
      state,
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        await AuthService.logout({ returnTo: window.location.origin })
      },
      async createKeep() {
        try {
          await Notification.keepModal()
          await keepsService.createKeep()
          if (AppState.rawTags[0]) {
            await tagsService.createTags()
            await tagsService.createKeepTags(AppState.newKeep)
          }
          Notification.toast(`Your new Keep, ${AppState.newKeep.name}, was created!`, 'success')
          await keepsService.getKeeps()
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      }
    }
  }
}
</script>

<style scoped>
.font-nav{
  font-size: 1.25rem;
}
.outline{
text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}
.outline-plus{
text-shadow: -1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000, 1.5px 1.5px 0 #000;

}
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
  color: #b3d1cd !important;
}
.nav-item .nav-link.router-link-exact-active{
  color: var(--light)  !important;
  /* font-weight: bold; */
}
</style>
