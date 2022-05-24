<template>
  <div class="session container-fluid">
    <div class="row">
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