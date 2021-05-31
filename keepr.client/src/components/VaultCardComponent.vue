<template>
  <div class="col-md-2 col-6 p-2">
    <router-link :to="{name: 'Vault', params: {id: cardProp.id}}">
      <div class="position-relative">
        <img class="w-100" :src="cardProp.img">
        <h2 class="text-overlay text-light">
          {{ cardProp.name }}
        </h2>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'VaultCard',
  props: {
    cardProp: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
    }
  },
  components: {}
}
</script>

<style scoped lang="scss">
h2 {
  font-size: 1.5rem;
}
img{
  border-radius: 15px;
  cursor: pointer;
}
.text-overlay{
  position: absolute;
  left: 13px;
  bottom: 0px;
  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
}
</style>
