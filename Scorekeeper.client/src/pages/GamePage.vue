<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <button class="btn btn-primary">New Game</button>
      </div>
    </div>
    <div class="row">
      <div class="col-6">Game Rules</div>
      <div class="col-6">Game History</div>
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