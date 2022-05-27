<template>
  <div class="session container-fluid">
    <div class="row">
      <div class="col-12">
        <button class="btn btn-primary">Add Player</button>
      </div>
    </div>
    <!-- NOTE will I be able to add an empty hand for all players? If so where does that button belong? Will I have to add a hand for each player/each round?  -->
    <div class="row">
      <!-- TODO for each player -->
      <div class="col-6 col-sm-4 col-md-2">
        <GamePlayer />
      </div>
      <div class="col-6 col-sm-4 col-md-2">
        <GamePlayer />
      </div>
      <div class="col-6 col-sm-4 col-md-2">
        <GamePlayer />
      </div>
      <div class="col-6 col-sm-4 col-md-2">
        <GamePlayer />
      </div>
      <div class="col-6 col-sm-4 col-md-2">
        <GamePlayer />
      </div>
      <div class="col-6 col-sm-4 col-md-2">
        <GamePlayer />
      </div>
      <div class="col-6 col-sm-4 col-md-2">
        <GamePlayer />
      </div>
      <div class="col-6 col-sm-4 col-md-2">
        <GamePlayer />
      </div>
      <div class="col-6 col-sm-4 col-md-2">
        <GamePlayer />
      </div>
      <div class="col-6 col-sm-4 col-md-2">
        <GamePlayer />
      </div>
      <div class="col-6 col-sm-4 col-md-2">
        <GamePlayer />
      </div>
      <div class="col-6 col-sm-4 col-md-2">
        <GamePlayer />
      </div>
    </div>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
export default {
  setup() {
    return {
      gameplayers: computed(() => AppState.gameplayers)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>