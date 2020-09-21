<template>
  <div class="body">
    <van-cell title="我的订单" is-link value="全部订单" />
    <van-grid clickable :column-num="3">
      <van-grid-item icon="cash-on-deliver" text="待付款" to="/" />
      <van-grid-item icon="logistics" text="待收货" to="/" />
      <van-grid-item icon="brush-o" text="退换修" to="/" />
    </van-grid>
    <van-cell @click="goErr" title="会员中心" icon="vip-card-o" is-link style="margin-top:15px;" />
    <van-cell @click="goErr" title="我的优惠" icon="pending-payment" is-link />
    <van-cell @click="goErr" title="服务中心" icon="smile-o" is-link style="margin-top:15px;" />
    <van-cell @click="goErr" title="大米之家" icon="shop-o" is-link />
    <van-cell @click="goErr" title="我的F码" icon="after-sale" is-link style="margin-top:15px;" />
    <van-cell @click="goErr" title="礼物码兑换" icon="point-gift-o" is-link />
    <van-cell @click="goErr" title="设置" icon="setting-o" is-link style="margin-top:15px;" />
    <van-cell @click="tcdl" v-show="this.show" title="退出登录" is-link style="margin-top:15px;color:red" />
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      show:''
    };
  },
  mounted() {
    this.toShow()
  },
  methods: {
    goErr() {
      Dialog.alert({
        title: "错误",
        message: "功能还待开发中 ^ _ ^",
        theme: "round-button",
      }).then(() => {
        // on close
      })
    },
    tcdl(){
      sessionStorage.removeItem('token')
      
      Dialog.alert({
        title: "恭喜",
        message: "退出登录成功啦 ^ _ ^",
        theme: "round-button",
      }).then(() => {
        window.location.reload()
      })
    },
    toShow(){
      this.show = sessionStorage.getItem('token')
      
    }
  },
};
</script>

<style scoped>
.body {
  background: #f5f5f5;
}
</style>
