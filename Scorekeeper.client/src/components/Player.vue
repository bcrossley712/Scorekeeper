<template>
  <div class="row p-2">
    <div class="col-12 d-flex flex-column">
      <div class="d-flex align-items-center">
        <h5 class="m-0 me-3">{{ player.name }}</h5>
        <i
          class="mdi mdi-plus selectable text-dark fs-5"
          title="Add hand"
          data-bs-toggle="modal"
          :data-bs-target="'#add-hand' + player.id"
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
      <h5>Total = {{}}</h5>
    </div>
  </div>
  <Modal :id="'add-hand' + player.id">
    <template #title>Add Hand</template>
    <template #body><HandAdd :player="player" /></template>
  </Modal>
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
    return {
      editable,
      hands: computed(() => AppState.hands.filter(h => h.playerId == props.player.id))
    }
  }
}
</script>


<style lang="scss" scoped>
</style>