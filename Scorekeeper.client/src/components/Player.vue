<template>
  <div class="row p-2">
    <div class="col-12 d-flex flex-column">
      <div class="d-flex align-items-center">
        <h5
          v-if="session.archived == false && user.isAuthenticated"
          @click="setActivePlayer"
          class="m-0 me-4 selectable border-bottom border-dark"
          data-bs-toggle="modal"
          data-bs-target="#player-edit"
        >
          {{ player.name }}
        </h5>
        <h5 v-else class="m-0 me-4 border-bottom border-dark">
          {{ player.name }}
        </h5>
        <i
          v-if="session.archived == false && user.isAuthenticated"
          class="mdi mdi-plus selectable text-dark fs-5"
          title="Add hand"
          @click="setActivePlayer"
          data-bs-toggle="modal"
          data-bs-target="#add-hand"
        ></i>
      </div>
      <div class="row border-bottom border-dark" v-if="game.title == 'Rook'">
        <div class="col-3 p-0" v-if="game.bidding == true">BID</div>
        <div class="col-3 p-0" v-if="game.bidding == true">TRUMP</div>
        <div class="col-6 text-center p-0">TAKE</div>
      </div>
      <div class="row border-bottom border-dark" v-else>
        <div class="col-3 p-0" v-if="game.bidding == true">BID</div>
        <div class="col-3 p-0" v-if="game.bidding == true">TAKE</div>
        <div class="col-6 text-center p-0">SCORE</div>
      </div>
      <div class="row">
        <div class="col-12" v-for="h in hands" :key="h.id">
          <Hand :hand="h" />
        </div>
      </div>
      <h5>Total = {{ totalScore }}</h5>
    </div>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import { AppState } from "../AppState"
import { useRoute } from "vue-router"
export default {
  props: {
    player: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const editable = ref({})
    const route = useRoute()
    return {
      editable,
      hands: computed(() => AppState.hands.filter(h => h.playerId == props.player.id)),
      game: computed(() => AppState.activeGame),
      user: computed(() => AppState.user),
      session: computed(() => AppState.activeSession),
      totalScore: computed(() => {
        let total = 0;
        let myHands = AppState.hands.filter(h => h.playerId == props.player.id);
        myHands.forEach(hand => total += hand.score)
        return total
      }),
      setActivePlayer() {
        AppState.activePlayer = props.player
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>