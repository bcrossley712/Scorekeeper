<template>
  <div class="container-fluid">
    <div class="row">
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
      <div class="mb-3 col-12">
        <label for="picture" class="form-label">Picture</label>
        <input
          type="text"
          class="form-control"
          name="picture"
          id="picture"
          aria-describedby="helpId"
          placeholder="Picture..."
          v-model="editable.picture"
          required
        />
      </div>
      <div class="d-flex justify-content-end">
        <button class="btn btn-success" @click="handleSubmit">Confirm</button>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { watchEffect } from "@vue/runtime-core"
import { AppState } from "../AppState"
import { accountService } from "../services/AccountService"
import { Modal } from "bootstrap"
export default {
  setup() {
    const editable = ref({})
    watchEffect(() => {
      editable.value = AppState.account
    }
    )
    return {
      editable,
      async handleSubmit() {
        try {
          await accountService.editAccount(editable.value)
          Modal.getOrCreateInstance(document.getElementById("edit-account")).hide()
          Pop.toast("Account updated!", 'success')
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