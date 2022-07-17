<template>
  <div
    v-if="session.archived == false && user.isAuthenticated"
    class="row selectable"
    @click="setActiveHand"
    data-bs-toggle="modal"
    data-bs-target="#edit-hand"
  >
    <div v-if="game.bidding == true" class="d-flex p-0">
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
    <div class="col-12 p-0 border-dark border" v-else>
      <span class="px-1">{{ hand.score }}</span>
    </div>
  </div>
  <div v-else class="row">
    <div v-if="game.bidding == true" class="d-flex p-0">
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
    <div class="col-12 p-0 border-dark border" v-else>
      <span class="px-1">{{ hand.score }}</span>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity"
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

    return {
      game: computed(() => AppState.activeGame),
      user: computed(() => AppState.user),
      session: computed(() => AppState.activeSession),
      setActiveHand() {
        AppState.activeHand = props.hand
      }

    }
  }
}
</script>


<style lang="scss" scoped>
</style>