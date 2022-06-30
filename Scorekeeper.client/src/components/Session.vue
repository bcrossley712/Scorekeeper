<template>
  <h3 class="m-0">{{ date }} || {{ session.winner }}</h3>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
export default {
  props: {
    session: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      date: computed(() => new Date(props.session.createdAt).toLocaleString())
    }
  }
}
</script>


<style lang="scss" scoped>
</style>