<template>
  <div class="container-fluid">
    <form @submit.prevent="handleSubmit" class="row">
      <div class="mb-3 col-12">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          name="name"
          id="name"
          aria-describedby="helpId"
          placeholder="Name..."
          v-model="editable.name"
          required
        />
      </div>
      <div class="">
        <button class="btn btn-success">Confirm</button>
      </div>
    </form>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { watchEffect } from "@vue/runtime-core"
import { useRoute } from "vue-router"
import { playersService } from "../services/PlayersService"
import { Modal } from "bootstrap"
export default {

  setup(props) {
    const editable = ref({})
    const route = useRoute()
    return {
      editable,
      async handleSubmit() {
        try {
          editable.value.sessionId = route.params.id
          await playersService.addPlayer(editable.value)
          Modal.getOrCreateInstance(document.getElementById("player-add")).hide()
          editable.value = {}
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