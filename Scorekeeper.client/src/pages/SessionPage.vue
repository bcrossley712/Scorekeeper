<template>
  <div class="session container-fluid">
    <div class="row">
      <div class="col-12">
        <button class="btn btn-primary">Add Player</button>
      </div>
    </div>
    <!-- NOTE will I be able to add an empty hand for all players? If so where does that button belong? Will I have to add a hand for each player/each round?  -->
    <div class="row">
      <div class="col-6 col-sm-4 col-md-2" v-for="p in players" :key="p.id">
        <Player :player="p" />
      </div>
    </div>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
import { onMounted } from "@vue/runtime-core"
import { sessionsService } from "../services/SessionsService"
import { useRoute } from "vue-router"
import { playersService } from "../services/PlayersService";
import { handsService } from "../services/HandsService";
export default {
  setup() {
    const route = useRoute()
    onMounted(async () => {
      try {
        await sessionsService.getSessionById(route.params.id)
        await playersService.getSessionsPlayers(route.params.id)
        await handsService.getSessionsHands(route.params.id)
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      players: computed(() => AppState.players)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>