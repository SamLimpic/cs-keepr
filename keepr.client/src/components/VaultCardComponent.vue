<template>
  <div class="card px-md-2 px-1 pb-md-4 pb-2 position-relative">
    <router-link :to="{name: 'Vault', params: {id: cardProp.id}}">
      <div class="position-relative">
        <img class="w-100 box-shadow" alt="Vault Image" :src="cardProp.img" loading="lazy">
        <h4 class="text-overlay text-shadow text-light font-lg">
          {{ cardProp.name }}
        </h4>
      </div>
    </router-link>
    <button type="button"
            aria-label="Remove Keep from Vault"
            class="btn btn-outline-danger bg-transparent border-0 p-0 m-0 btn-overlay"
            data-dismiss="modal"
            disabled
            v-if="cardProp.isPrivate"
    >
      <i class="fas fa-shield-alt font-lg"></i>
    </button>
    <button type="button"
            aria-label="Remove Keep from Vault"
            class="btn btn-outline-info bg-transparent border-0 p-0 m-0 btn-overlay"
            data-dismiss="modal"
            disabled
            v-else
    >
      <i class="fas fa-shield-alt font-lg"></i>
    </button>
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
    return {}
  },
  components: {}
}
</script>

<style scoped lang="scss">
img{
  border-radius: 15px;
  cursor: pointer;
}
.btn-overlay{
  position: absolute;
  right: 20px;
  top: 15px;
}
.box-shadow {
  box-shadow: 7.5px 7.5px 15px  var(--dark);
  -moz-box-shadow: 7.5px 7.5px 15px  var(--dark);
  -webkit-box-shadow: 7.5px 7.5px 15px  var(--dark);
  -o-box-shadow: 7.5px 7.5px 15px  var(--dark);
  object-fit: cover;
  min-height: 7rem;
}
.text-overlay{
  position: absolute;
  left: 13px;
  bottom: 0px;
}
</style>
