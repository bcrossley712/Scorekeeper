<template>
  <div class="session container-fluid">
    <div class="row">
      <div class="col-12 d-flex justify-content-between p-2">
        <button
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#player-add"
        >
          Add Player
        </button>
        <div>
          <button class="btn btn-warning" @click="archiveSession">
            Complete game?
          </button>
          <i
            class="mdi mdi-delete text-danger selectable ms-2"
            title="Delete session"
            @click="deleteSession"
          ></i>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-sm-4 col-md-2" v-for="p in players" :key="p.id">
        <Player :player="p" />
      </div>
    </div>
  </div>
  <Modal id="player-add">
    <template #title>Add Player</template>
    <template #body><PlayerAddForm /></template>
  </Modal>
  <Modal id="player-edit">
    <template #title>Edit Player?</template>
    <template #body><PlayerEditForm /></template>
  </Modal>
  <Modal id="add-hand">
    <template #title>Add Hand</template>
    <template #body><HandAddForm /></template>
  </Modal>
  <Modal id="edit-hand">
    <template #title>Edit Hand?</template>
    <template #body><HandEditForm /></template>
  </Modal>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
import { onMounted } from "@vue/runtime-core"
import { sessionsService } from "../services/SessionsService"
import { useRoute, useRouter } from "vue-router"
import { playersService } from "../services/PlayersService";
import { handsService } from "../services/HandsService";
import { gamesService } from "../services/GamesService";
export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    onMounted(async () => {
      try {
        // FIXME add watcheffect and conditional to change pages with navbar
        await sessionsService.getSessionById(route.params.id)
        await playersService.getSessionsPlayers(route.params.id)
        await handsService.getSessionsHands(route.params.id)
        await gamesService.getGames()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      players: computed(() => AppState.players),
      async addPlayer() {
        try {
          playersService.addPlayer(route.params.id)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      async archiveSession() {
        try {
          if (await Pop.confirm("Archive Session and declare winner?", "", "info", "Go for it!")) {
            logger.error("Not set up")
            router.push({ name: "Game", params: { id: AppState.activeSession.gameId } })
          }
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      async deleteSession() {
        try {
          if (await Pop.confirm('Delete Session?')) {
            logger.error("Not set up")
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