<template>
  <div class="container-fluid">
    <form class="row" @submit.prevent="handleSubmit">
      <div class="mb-3 col-4" v-if="game.bidding == true">
        <label for="bid" class="form-label">Bid</label>
        <input
          type="number"
          class="form-control"
          name="bid"
          id="bid"
          aria-describedby="helpId"
          placeholder="0"
          v-model="editable.bid"
        />
      </div>
      <div class="mb-3 col-4" v-if="game.bidding == true">
        <label for="trump" class="form-label">trump</label>
        <input
          type="text"
          class="form-control"
          name="trump"
          id="trump"
          aria-describedby="helpId"
          placeholder="trump..."
          v-model="editable.trump"
        />
      </div>
      <div class="mb-3 col-4" v-if="game.bidding == true">
        <label for="Take" class="form-label">Take</label>
        <input
          type="number"
          class="form-control"
          name="Take"
          id="Take"
          aria-describedby="helpId"
          placeholder="0"
          v-model="editable.take"
        />
      </div>
      <div class="mb-3 col-4" v-if="game.bidding == true">
        <label for="Score" class="form-label">Score</label>
        <input
          type="number"
          class="form-control"
          name="Score"
          id="Score"
          aria-describedby="helpId"
          placeholder="0"
          v-model="editable.score"
        />
      </div>
      <div class="mb-3" v-else>
        <label for="Score" class="form-label">Score</label>
        <input
          type="number"
          class="form-control"
          name="Score"
          id="Score"
          aria-describedby="helpId"
          placeholder="0"
          v-model="editable.score"
        />
      </div>
      <div class="">
        <button class="btn btn-success">Confirm</button>
      </div>
    </form>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { watchEffect } from "@vue/runtime-core"
import { useRoute } from "vue-router"
import { handsService } from "../services/HandsService"
import { Modal } from "bootstrap"
import { AppState } from "../AppState"
export default {

  setup() {
    const editable = ref({})
    const route = useRoute()
    return {
      editable,
      game: computed(() => AppState.activeGame),
      async handleSubmit() {
        try {
          editable.value.playerId = AppState.activePlayer.id
          editable.value.sessionId = route.params.id
          await handsService.addHand(editable.value)
          Modal.getOrCreateInstance(document.getElementById("add-hand")).hide()
          editable.value = {}
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>