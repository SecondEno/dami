<template>
  <div>
    总计：{{ cartTotalPrice }}
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  computed: {
    ...mapGetters(['cartTotalPrice'])
  }
}
</script>

<style scoped>
</style>
