<template>
  <div class="container-fluid">
    <div class="row">
      <div class="mb-3 col-12">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          name="name"
          id="name"
          aria-describedby="helpId"
          placeholder="Name..."
          v-model="editable.name"
          required
        />
      </div>
      <div class="d-flex justify-content-between">
        <div class="">
          <button class="btn btn-success" @click="handleSubmit">Confirm</button>
        </div>
        <div class="">
          <button class="btn btn-danger" @click="deletePlayer">
            Delete Player
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { watchEffect } from "@vue/runtime-core"
import { playersService } from "../services/PlayersService"
import { Modal } from "bootstrap"
import { AppState } from "../AppState"
export default {

  setup() {
    const editable = ref({})
    watchEffect(() => {
      editable.value = AppState.activePlayer
    })
    return {
      editable,
      async handleSubmit() {
        try {
          await playersService.editPlayer(editable.value)
          Modal.getOrCreateInstance(document.getElementById("player-edit")).hide()
          editable.value = {}
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      async deletePlayer() {
        try {
          if (await Pop.confirm()) {
            await playersService.deletePlayer(AppState.activePlayer.id)
            Modal.getOrCreateInstance(document.getElementById("player-edit")).hide()
            Pop.toast("Player deleted", "success")
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