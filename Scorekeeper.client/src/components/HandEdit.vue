<template>
  <div class="container-fluid">
    <div class="row">
      <div class="mb-3 col-4">
        <label for="bid" class="form-label">Bid</label>
        <input
          type="number"
          class="form-control"
          name="bid"
          id="bid"
          aria-describedby="helpId"
          placeholder=""
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
          placeholder=""
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
          placeholder=""
          v-model="editable.score"
        />
      </div>
      <div class="d-flex justify-content-between">
        <button class="btn btn-success" @click="handleSubmit">Confirm</button>
        <button class="btn btn-danger" @click="deleteHand">Delete?</button>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { watchEffect } from "@vue/runtime-core"
import { Modal } from "bootstrap"
import { AppState } from "../AppState"
import { handsService } from "../services/HandsService"
export default {

  setup() {
    const editable = ref({})
    watchEffect(() => {
      editable.value = AppState.activeHand
    })
    return {
      editable,
      async handleSubmit() {
        try {
          await handsService.editHand(editable.value)
          Modal.getOrCreateInstance(document.getElementById("edit-hand")).hide()
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      async deleteHand() {
        try {
          // NOTE don't for get to pop confirm
          if (await Pop.confirm()) {
            await handsService.deleteHand(AppState.activeHand.id)
            Modal.getOrCreateInstance(document.getElementById("edit-hand")).hide()
          }
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