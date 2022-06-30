<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <button class="btn btn-primary" @click="newSession">New Session</button>
      </div>
    </div>
    <div class="row">
      <div class="col-6">Game Rules</div>
      <div class="col-6 bg-dark p-3">
        <h4>Game History</h4>
        <div
          @click="goTo(s.id)"
          class="rounded bg-white text-dark p-1 m-2 selectable"
          v-for="s in sessions"
          :key="s.id"
        >
          <Session :session="s" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { onMounted } from "@vue/runtime-core"
import { useRoute, useRouter } from "vue-router"
import { gamesService } from "../services/GamesService"
import { AppState } from "../AppState"
import { sessionsService } from "../services/SessionsService";
export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    onMounted(async () => {
      try {
        // FIXME add watcheffect and conditional to change pages with navbar
        await gamesService.getGameById(route.params.id)
        await sessionsService.getGamesSessions(route.params.id)
        await gamesService.getGames()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      sessions: computed(() => AppState.sessions),
      goTo(id) {
        router.push({ name: "Session", params: { id: id } })
      },
      async newSession() {
        try {
          console.error("Not set up");
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