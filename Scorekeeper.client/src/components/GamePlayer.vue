<template>
  <div class="row p-2">
    <div class="col-12 d-flex flex-column">
      <h5>Player Name</h5>
      <div class="row">
        <div class="col-3 p-0">BID</div>
        <div class="col-3 p-0">TAKE</div>
        <div class="col-6 p-0">SCORE</div>
      </div>
      <Hand />
      <Hand />
      <Hand />
      <Hand />
      <h5>Total</h5>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
export default {
  // props: {
  //   gamePlayer: {
  //     type: Object,
  //     required: true
  //   }
  // },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
</style>