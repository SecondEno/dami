<template>
  <!-- <div> -->

  <van-swipe :autoplay="3000" indicator-color="white" style="height:200px">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image" style="width:100%; height:100%;" />
    </van-swipe-item>
  </van-swipe>

  <!-- </div> -->
</template>

<script>
// 引入Swipe

export default {
  data() {
    return {
      images: [
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/51371e0f0783f07e8621eaa92681a5a9.jpg?thumb=1&w=720&h=360",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03ff022009a635262d53451d532518ed.jpg?thumb=1&w=720&h=360",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/51371e0f0783f07e8621eaa92681a5a9.jpg?thumb=1&w=720&h=360",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03ff022009a635262d53451d532518ed.jpg?thumb=1&w=720&h=360"
      ]
    };
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  width: 100%;
  height: 3.6rem;
  // color: red;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
