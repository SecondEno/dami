
<template>
  <div>
    <!-- 详情-- -->
    <!-- {{ $route.params.id }} -->

    <div class="detailswiper">
      <DetailSwiper></DetailSwiper>
    </div>

    <div class="middle detailprice">￥3799</div>
    <div class="middle detailtitle">小米</div>
    <div class="middle detailtext">
      <div class="text1">「可使用北京消费券；分期最高享24期免息；购机享特惠加价购」</div>
      <div class="text2">① 【旗舰屏幕】90Hz刷新率&180Hz采样率，高端双曲面屏</div>
      <div class="text2">② 【旗舰影像】一亿像素 8K电影相机，超高像素超清晰</div>
      <div class="text2">③ 【旗舰音频】真均衡立体声，有声有势，一听即知</div>
    </div>
    <div class="middle">
      <p>小米10 Pro，领用北京消费券4600元起</p>
    </div>
  </div>
</template>


<script>
import DetailSwiper from "@/components/Detail/DetailSwiper";

export default {
  components: {
    DetailSwiper
  },
  methods: {},
  data() {
    return {
      id: 0
    };
  },
  // async mounted() {
  //   this.id = this.$router.params.id
  //   let ret = await listData(this.id)
  //   console.log( ret )
  // }
  mounted() {
    // this.id = this.$router.params.id
  }
};
</script>

<style lang="scss" scoped>
.detailswiper {
  width: 100%;
  // height: 7.92rem;
  // background: #ccc;

  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.middle {
  background: #fff;
  text-align: left;
  margin: 0 0.32rem;
}

.detailprice {
  color: #ff6700;
  // font-size: 0.48rem;
  font-family: Avenir, Arial, sans-serif;
  font-weight: 700;

  padding-top: 0.22rem;
  padding-left: 0.2rem;
}
.detailtitle {
  line-height: 1.5em;
  color: #000;
  font-weight: 700;
  // font-size: 0.45rem;
  margin-top: 0.16rem;
  margin-bottom: 0.12rem;
  font-family: Avenir;
}
.detailtext {
  .text1 {
    margin-top: 0.12rem;
    margin-bottom: 0.12rem;
    line-height: 1.5em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: box;
    color: #000;
    // font-size: 0.34rem !important;
  }
  .text2 {
    text-align: left;
    color: #000;
    margin-bottom: 0.16rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: box;
    font-size: 0.32rem !important;
  }
}
</style>