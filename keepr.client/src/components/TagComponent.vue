<template>
  <!-- ANCHOR Simple component to display Keep tags -->
  <div class="col-md-4 col-6">
    <button type="button" class="btn btn-outline-info m-0 w-100 m-2" @click="setActiveTag(tagProp)">
      {{ tagProp.name }}
    </button>
  </div>
</template>

<script>
import { tagsService } from '../services/TagsService'

export default {
  name: 'Tag',
  props: {
    tagProp: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      // NOTE On click, this sets the Active Tag before loading the Search Page
      async setActiveTag(tag) {
        await tagsService.setActiveTag(tag)
      }
    }
  },
  components: {}
}
</script>

<style scoped lang="scss">

</style>
