<template>
  <div class="row">
    <div class="col-12 d-flex flex-column">
      <h5>Player Name</h5>
      <Hand />
      <Hand />
      <Hand />
      <Hand />
      <h5>Total score</h5>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
</style>