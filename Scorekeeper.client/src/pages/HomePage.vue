<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h3>What game will we play?!</h3>
      </div>
    </div>
    <div class="row px-2">
      <div class="col-3 p-2">
        <!-- NOTE Card images for each game. On click will take to game page. Add ability to have a 'blank' game with just ability to add players and scores. -->
        <img
          class="img-fluid"
          src="../assets/img/All.jpg"
          alt="Game of All image"
        />
      </div>
      <div class="col-3 p-2">
        <img
          class="img-fluid"
          src="../assets/img/Rook.png"
          alt="Game of Rook image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
</style>
