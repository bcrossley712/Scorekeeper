<template>
  <div
    class="row selectable"
    @click="setActiveHand"
    data-bs-toggle="modal"
    data-bs-target="#edit-hand"
  >
    <div class="col-3 p-0 border-dark border">
      <span class="px-1">{{ hand.bid }}</span>
    </div>
    <div class="col-3 p-0 border-dark border">
      <span class="px-1">{{ hand.take }}</span>
    </div>
    <div class="col-6 p-0 border-dark border">
      <span class="px-1">{{ hand.score }}</span>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { watchEffect } from "@vue/runtime-core"
import { AppState } from "../AppState"
export default {
  props: {
    hand: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    // FIXME trying to get a total score
    // watchEffect(() => {
    // })
    return {
      setActiveHand() {
        AppState.activeHand = props.hand
      }

    }
  }
}
</script>


<style lang="scss" scoped>
</style>