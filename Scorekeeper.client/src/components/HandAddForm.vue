<template>
  <div class="container-fluid">
    <form class="row" @submit.prevent="handleSubmit">
      <div class="mb-3 col-4">
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
      <div class="mb-3 col-4">
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
      <div class="mb-3 col-4">
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
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { watchEffect } from "@vue/runtime-core"
import { useRoute } from "vue-router"
import { handsService } from "../services/HandsService"
import { Modal } from "bootstrap"
import { AppState } from "../AppState"
export default {

  setup(props) {
    const editable = ref({})
    const route = useRoute()
    return {
      editable,
      async handleSubmit() {
        try {
          editable.value.playerId = AppState.activePlayer.id
          editable.value.sessionId = route.params.id
          await handsService.addHand(editable.value)
          Modal.getOrCreateInstance(document.getElementById("add-hand")).hide()
          editable.value = {}
        } catch (error) {
          logger.error(error)
          Pop.toast("Are you logged in?", 'error', "center")
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>