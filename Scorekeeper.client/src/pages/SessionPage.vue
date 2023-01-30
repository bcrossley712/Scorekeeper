<template>
  <div class="session container-fluid">
    <div class="row">
      <div class="col-12 d-flex justify-content-between p-2">
        <button
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#player-add"
          v-if="session.archived == false && user.isAuthenticated"
        >
          Add Player
        </button>
        <div v-else-if="user.isAuthenticated"></div>
        <div class="text-center">
          <h2>{{ game.title }}</h2>
        </div>
        <div v-if="session.archived == false && user.isAuthenticated">
          <button
            v-if="players.length > 0"
            class="btn btn-warning"
            @click="archiveSession"
          >
            Complete session?!
          </button>
          <i
            class="mdi mdi-delete text-danger selectable ms-2"
            title="Delete session"
            @click="deleteSession"
          ></i>
        </div>
        <i
          v-else-if="user.isAuthenticated"
          class="mdi mdi-pencil text-warning selectable"
          title="Edit Session"
          @click="archiveSession"
        ></i>
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-sm-4 col-lg-2" v-for="p in players" :key="p.id">
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
import { computed, ref } from "@vue/reactivity";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { AppState } from "../AppState";
import { onMounted, watchEffect } from "@vue/runtime-core";
import { sessionsService } from "../services/SessionsService";
import { useRoute, useRouter } from "vue-router";
import { playersService } from "../services/PlayersService";
import { handsService } from "../services/HandsService";
import { gamesService } from "../services/GamesService";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const editable = ref({});
    watchEffect(() => {
      editable.value = AppState.activeSession;
    });
    onMounted(async () => {
      try {
        AppState.activeSession = await sessionsService.getSessionById(
          route.params.id
        );
        await playersService.getSessionsPlayers(route.params.id);
        await handsService.getSessionsHands(route.params.id);
        await gamesService.getGames();
      } catch (error) {
        logger.error(error);
        Pop.toast(error.message, "error");
      }
      AppState.activeGame = AppState.games.find(
        (g) => g.id == AppState.activeSession.gameId
      );
    });
    return {
      players: computed(() => AppState.players),
      game: computed(() => AppState.activeGame),
      user: computed(() => AppState.user),
      session: computed(() => AppState.activeSession),
      async addPlayer() {
        try {
          playersService.addPlayer(route.params.id);
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },
      async archiveSession() {
        try {
          if (AppState.activeSession?.archived == false) {
            if (
              await Pop.confirm(
                "Archive Session and declare winner?",
                "",
                "info",
                "Go for it!"
              )
            ) {
              editable.value.archived = !AppState.activeSession.archived;
              sessionsService.archiveSession(editable.value);
              router.push({
                name: "Game",
                params: { id: AppState.activeSession.gameId },
              });
            }
          } else {
            if (
              await Pop.confirm(
                "Remove from archive and allow editing?",
                "",
                "info",
                "Yes, please."
              )
            ) {
              editable.value.archived = !AppState.activeSession.archived;
              sessionsService.archiveSession(editable.value);
            }
          }
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },
      async deleteSession() {
        try {
          if (await Pop.confirm("Delete Session?")) {
            router.push({
              name: "Game",
              params: { id: AppState.activeSession.gameId },
            });
            await sessionsService.deleteSession(AppState.activeSession.id);
            Pop.toast("Session deleted", "success");
          }
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>