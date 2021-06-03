<template>
  <div class="col-md-3 col-4">
    <button type="button" class="btn btn-outline-info m-0 w-100" disabled>
      {{ tagProp.name }}
    </button>
  </div>
</template>

<script>

export default {
  name: 'Tag',
  props: {
    tagProp: {
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

</style>
