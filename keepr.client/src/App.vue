<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view :key="$route.path" />
  </main>
  <footer>
    <div class="bg-secondary text-light text-center pt-4 pb-2">
      <p>Made with <span><i class="fas fa-ring mx-1"></i></span> by Samwise</p>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
footer{
  font-size: 1.5rem;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}
</style>
