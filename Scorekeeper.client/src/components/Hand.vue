<template>
  <!-- NOTE must be input fields -->
  <div class="row">
    <div class="col-3 p-0 border-dark border">
      <span class="px-1">bid</span>
    </div>
    <div class="col-3 p-0 border-dark border">
      <span class="px-1">take</span>
    </div>
    <div class="col-6 p-0 border-dark border">
      <span class="px-1">score</span>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
export default {
  props: {
    hand: {
      type: Object,
      required: true
    }
  },
  setup() {
    const editable = ref({})
    return {
      editable
    }
  }
}
</script>


<style lang="scss" scoped>
</style>