<template>
  <div class="container-fluid">
    <div class="row">
      <div class="mb-3 col-4">
        <label for="bid" class="form-label">Bid</label>
        <input
          type="number"
          class="form-control"
          name="bid"
          id="bid"
          aria-describedby="helpId"
          placeholder=""
          v-bind="editable.bid"
        />
      </div>
      <div class="mb-3 col-4">
        <label for="Take" class="form-label">Take</label>
        <input
          type="number"
          class="form-control"
          name="Take"
          id="Take"
          aria-describedby="helpId"
          placeholder=""
          v-bind="editable.take"
        />
      </div>
      <div class="mb-3 col-4">
        <label for="Score" class="form-label">Score</label>
        <input
          type="number"
          class="form-control"
          name="Score"
          id="Score"
          aria-describedby="helpId"
          placeholder=""
          v-bind="editable.score"
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
  props: {
    hand: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const editable = ref({})
    return {
      editable
    }
  }
}
</script>


<style lang="scss" scoped>
</style>