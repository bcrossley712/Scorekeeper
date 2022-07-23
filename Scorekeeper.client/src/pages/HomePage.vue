<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 p-2 d-flex justify-content-between">
        <h3>What game will we play?!</h3>
        <button
          v-if="user.isAuthenticated"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#add-game"
        >
          Add Game
        </button>
      </div>
    </div>
    <div class="row px-2">
      <div class="col-12 col-md-2 p-2" v-for="g in games" :key="g.id">
        <div class="text-center h-100">
          <h5>{{ g.title }}</h5>
          <img
            @click="goTo(g)"
            class="img-cover selectable"
            :src="g.image"
            :alt="g.title + ' image'"
          />
        </div>
      </div>
    </div>
  </div>
  <Modal id="add-game">
    <template #title>Add New Game</template>
    <template #body><GameAddForm /></template>
  </Modal>
</template>

<script>
import { computed, ref } from "@vue/reactivity"
import { onMounted } from "@vue/runtime-core"
import { gamesService } from "../services/GamesService";
import { AppState } from "../AppState"
import { useRouter } from "vue-router"
export default {
  setup() {
    const router = useRouter()
    onMounted(async () => {
      await gamesService.getGames()
    })
    return {
      games: computed(() => AppState.games),
      user: computed(() => AppState.user),
      goTo(game) {
        AppState.activeGame = game
        router.push({ name: "Game", params: { id: game.id } })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.img-cover {
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
}
</style>
