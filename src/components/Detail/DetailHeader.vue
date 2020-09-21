<template>
  <div>
    <!-- <van-tabs v-model="active" scrollspy sticky> -->
    <van-tabs v-model="active">
      <van-tab title="商品"></van-tab>
      <van-tab title="评价"></van-tab>
      <van-tab title="详情"></van-tab>
    </van-tabs>
  </div>
</template>


<script>

export default {
  components: {},
  methods: {},
  data() {
    return {
      active: 2
    };
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
    // .van-tabs .van-tabs__wrap {
    //   height: 0.9rem!important;
    // }
</style>