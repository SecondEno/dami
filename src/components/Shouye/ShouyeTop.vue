<template>
  <!-- <div> -->
    <!-- tab标签页 -->
    <div>
    <SearchTab></SearchTab>
    <van-tabs v-model="active">
      <van-tab title="推荐"></van-tab>
      <van-tab title="手机"></van-tab>
      <van-tab title="智能"></van-tab>
      <van-tab title="电视"></van-tab>
      <van-tab title="推荐"></van-tab>
      <van-tab title="手机"></van-tab>
      <van-tab title="智能"></van-tab>
      <van-tab title="电视"></van-tab>
    </van-tabs>
    </div>
    
  <!-- </div> -->
</template>


<script>
import SearchTab from "@/components/Shouye/ShouyeTab";
// 引入tab标签页

export default {
  components: {
    SearchTab
  },
  data() {
    return {
      active:0
    };
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
</style>
