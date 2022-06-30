<template>
  <!-- NOTE must be input fields -->
  <div
    class="row selectable"
    data-bs-toggle="modal"
    :data-bs-target="'#edit-hand' + hand.id"
  >
    <div class="col-3 p-0 border-dark border">
      <span class="px-1">{{ hand.bid }}</span>
    </div>
    <div class="col-3 p-0 border-dark border">
      <span class="px-1">{{ hand.take }}</span>
    </div>
    <div class="col-6 p-0 border-dark border">
      <span class="px-1">{{ hand.score }}</span>
    </div>
  </div>
  <Modal :id="'edit-hand' + hand.id">
    <template #title>Edit Hand?</template>
    <template #body><HandEdit :hand="hand" /></template>
  </Modal>
</template>

<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
export default {
  props: {
    hand: {
      type: Object,
      required: true
    }
  },
  setup() {
    const editable = ref({})
    return {
      editable

    }
  }
}
</script>


<style lang="scss" scoped>
</style>