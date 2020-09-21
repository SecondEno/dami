<template>
  <div>
        <!-- <van-search v-model="value" placeholder="请输入搜索关键词"/> -->
        <van-search  background="#fff" shape="round" left-icon="@/asset/ia_300000000.png" right-icon="contact" placeholder="请输入搜索关键词"/>
  </div>
</template>

<script>


export default {
  data() {
    return {
 
    };
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.van-search {
  background-color: #f5f5f5;
  .van-search__content {
    background-color: #fff;
  }
  width: 100%;
}
</style>

