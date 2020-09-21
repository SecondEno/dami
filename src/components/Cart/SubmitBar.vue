<template>
  <div>
    <!-- 提交订单栏 -->
    <!-- @submit="onSubmit" /> -->
    <van-submit-bar :price="this.$store.state.price * 100"
                    button-text="提交订单">
      <van-checkbox >全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>


export default {
  data () {
    return {
      price:this.$store.state.price
    }
  },
  mounted () { },
}
</script>

<style scoped></style>
