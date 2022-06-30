<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h3>What game will we play?!</h3>
      </div>
    </div>
    <div class="row px-2">
      <div class="col-3 p-2" v-for="g in games" :key="g.id">
        <!-- TODO Card images for each game. On click will take to game page. Add ability to have a 'blank' game with just ability to add players and scores. -->
        <img
          @click="goTo(g.id)"
          class="img-fluid selectable"
          :src="g.image"
          :alt="g.title + ' image'"
        />
      </div>
      <!-- <div class="col-3 p-2">
        <img
          @click="goTo"
          class="img-fluid selectable"
          src="../assets/img/Rook.png"
          alt="Game of Rook image"
        />
      </div> -->
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
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
      goTo(id) {
        router.push({ name: "Game", params: { id: id } })
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
