<template>
  <div class="card px-md-2 px-1 pb-md-4 pb-2" v-if="cardProp.creatorId === profileProp">
    <router-link :to="{name: 'Vault', params: {id: cardProp.id}}">
      <div class="position-relative">
        <img class="w-100 box-shadow" alt="Vault Image" :src="cardProp.img">
        <h4 class="text-overlay text-shadow text-light font-lg">
          {{ cardProp.name }}
        </h4>
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
    },
    profileProp: {
      type: String,
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
img{
  border-radius: 15px;
  cursor: pointer;
}
.box-shadow {
  box-shadow: 7.5px 7.5px 15px  var(--dark);
  -moz-box-shadow: 7.5px 7.5px 15px  var(--dark);
  -webkit-box-shadow: 7.5px 7.5px 15px  var(--dark);
  -o-box-shadow: 7.5px 7.5px 15px  var(--dark);
}
.text-overlay{
  position: absolute;
  left: 13px;
  bottom: 0px;
}
</style>
