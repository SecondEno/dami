<template>
  <div>
    <!-- 详情头部导航 -->
    <!-- <div id="detailnavbar" :class="fixed ? 'fixed' : ''" ref="topnav"> -->
    <div id="detailnavbar" class="fixed" ref="topnav">
      <div class="nbleft">
        <van-icon name="arrow-left" size="2rem" @click="onClickLeft()" />
      </div>
      <div class="middle">
        <DetailHeader></DetailHeader>
      </div>
      <div class="nbright">
        <van-icon name="back-top" size="2rem" />
      </div>
    </div>
    <!-- 中间内容区 -->
    <div class="contain">
      <DetailContain></DetailContain>
    </div>

    <!-- 底部导航 -->
    <div class="footer">
      <DetailFooter></DetailFooter>
    </div>
  </div>
</template>

<script>
import DetailHeader from "@/components/Detail/DetailHeader";
import DetailContain from "@/components/Detail/DetailContain";
// 引入详情底部导航
import DetailFooter from "@/components/Detail/DetailFooter";

// 引入图标
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);

export default {
  components: {
    DetailHeader,
    DetailContain,
    DetailFooter
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/home" });
    },
    onClickRight() {
      Toast("按钮");
    }
  },
  data() {
    return {
      active:1,
      // 默认不吸顶 触发数据
      // fixed: false,
    };
  },
  mounted() {
    window.addEventListener(
      "scroll",
      (e) => {
        let top = document.documentElement.scrollTop;

        // console.log( top )
        // if (top > this.$refs.topnav.$el.offsetHeight) {
        //   // 吸顶
        //   this.fixed = true;
        // } else {
        //   // 还原
        //   this.fixed = false;
        // }
      },
      true
    );
  }
};
</script>

<style lang="scss" scoped>
.fixed {
  flex-shrink: 0;
  position: sticky;
  // position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
    // background: yellow;
}
#detailnavbar {
  width: 100%;
  // height: 0.9rem;
  height: 1.17rem;
  // line-height: 0.9rem;


  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .nbleft,
  .nbright {
    width: 15%;
    // background: #f5f5f5;
    text-align: center;
    color: black;
    // line-height: 0.9rem;
    padding-top: 0.2rem;
  }
  .middle {
    width: 70%;
    background: #f2f8f8;
    height: 0.9rem;
  }
}
.footer {
  width: 100%;
  height: 0.96rem;
  background: yellow;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
.contain {
  flex: 1;
  overflow: auto;
  // background: #f5f5f5;
}
</style>




































