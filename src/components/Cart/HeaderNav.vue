<template>
  <div>
    <van-nav-bar
      title="购物车"
      left-text="返回"
      right-text="搜索"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>

export default {
  data() {
    return {}
  },
  mounted() {},

  methods: {
    onClickLeft() {
      this.$router.push({ path: "/home" });
    },
    onClickRight() {
      Toast('搜索')
    },
  },
}
</script>

<style scoped></style>
