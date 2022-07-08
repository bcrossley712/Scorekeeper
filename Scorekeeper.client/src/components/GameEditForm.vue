<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="mb-3">
          <label for="title" class="form-label">Game Title</label>
          <input
            type="text"
            class="form-control"
            name="title"
            id="title"
            v-model="editable.title"
            placeholder="Title..."
            required
          />
        </div>
      </div>
      <div class="col-12">
        <div class="mb-3">
          <label for="Image" class="form-label">Url Image</label>
          <input
            type="text"
            class="form-control"
            name="Image"
            id="Image"
            v-model="editable.image"
            placeholder="https://thiscatdoesnotexist.com..."
          />
        </div>
      </div>
      <div class="col-12">
        <div class="mb-3">
          <label for="Scoring" class="form-label">Scoring</label>
          <input
            type="text"
            class="form-control"
            name="Scoring"
            id="Scoring"
            v-model="editable.scoring"
            placeholder="Each hand taken is worth 10..."
          />
        </div>
      </div>
      <div class="col-12">
        <div class="mb-3">
          <label for="Rules" class="form-label">How to play</label>
          <input
            type="text"
            class="form-control"
            name="Rules"
            id="Rules"
            v-model="editable.rules"
            placeholder="Dealer deals 5 cards..."
          />
        </div>
      </div>
      <div class="col-6">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="false"
            id="bidding"
            v-model="editable.bidding"
          />
          <label class="form-check-label" for="bidding"> Bidding game? </label>
        </div>
      </div>
      <div class="col-6">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="false"
            id="lowScoreWins"
            v-model="editable.lowScoreWins"
          />
          <label class="form-check-label" for="lowScoreWins">
            Low Score Wins?
          </label>
        </div>
      </div>
      <div class="d-flex justify-content-between p-2">
        <button class="btn btn-success" @click="handleSubmit">Submit</button>
        <button class="btn btn-danger" @click="deleteGame">Delete Game?</button>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { gamesService } from "../services/GamesService"
import { Modal } from "bootstrap"
import { watchEffect } from "@vue/runtime-core"
import { AppState } from "../AppState"
import { useRouter } from "vue-router"
export default {
  setup() {
    const editable = ref({})
    const router = useRouter()
    watchEffect(() =>
      editable.value = AppState.activeGame)
    return {
      editable,
      async handleSubmit() {
        try {
          await gamesService.editGame(editable.value)
          Modal.getOrCreateInstance(document.getElementById("edit-game")).hide()
          editable.value = {}
        } catch (error) {
          logger.error(error)
          Pop.toast("Are you logged in?", 'error', "center")
        }
      },
      async deleteGame() {
        try {
          if (await Pop.confirm('Are you sure?', 'All game data and history will be lost forever!', 'info', 'Yes, Delete!')) {
            if (await Pop.confirm('Okay but are you really really sure??', '', 'info', 'I said yes!')) {
              Modal.getOrCreateInstance(document.getElementById("edit-game")).hide()
              await gamesService.deleteGame(AppState.activeGame.id)
              router.push({ name: "Home" })
            }
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