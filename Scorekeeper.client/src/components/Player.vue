<template>
  <div class="row p-2">
    <div class="col-12 d-flex flex-column">
      <div class="d-flex align-items-center">
        <h5 class="m-0 me-4">{{ player.name }}</h5>
        <i
          class="mdi mdi-plus selectable text-dark fs-5"
          title="Add hand"
          @click="setActivePlayer"
          data-bs-toggle="modal"
          data-bs-target="#add-hand"
        ></i>
      </div>
      <div class="row border-bottom border-dark">
        <div class="col-3 p-0">BID</div>
        <div class="col-3 p-0">TAKE</div>
        <div class="col-6 p-0">SCORE</div>
      </div>
      <div class="row">
        <div class="col-12" v-for="h in hands" :key="h.id">
          <Hand :hand="h" />
        </div>
      </div>
      <h5>Total = {{ total }}</h5>
    </div>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
import { handsService } from "../services/HandsService"
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
    let total = ref(0)
    return {
      editable,
      total,
      hands: computed(() => AppState.hands.filter(h => h.playerId == props.player.id)),
      // FIXME close but not reactive and only recognizes score after selecting vue tools
      totalScore: computed(() => AppState.hands.filter(h => h.playerId == props.player.id).forEach(hand => total.value += hand.score)),
      setActivePlayer() {
        AppState.activePlayer = props.player
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>