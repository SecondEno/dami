<template>
  <div class="nav">
    <ul>
      <!-- 声明式导航 exact 严格 -->
      <router-link to="/home"
                   active-class="active"
                   tag="li">
        <i class="iconfont icon-shouye"></i>
        <p>首页</p>
      </router-link>
      <router-link to="/sort"
                   active-class="active"
                   tag="li">
        <i class="iconfont icon-fenlei"></i>
        <p>分类</p>
      </router-link>
      <router-link to="/cart"
                   active-class="active"
                   tag="li">
        <i class="iconfont icon-gouwuche"></i>
        <p>购物车</p>
      </router-link>
      <router-link to="/my"
                   active-class="active"
                   tag="li">
        <i class="iconfont icon-geren"></i>
        <p>我的</p>
      </router-link>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {}
  },
  mounted () { },
}
</script>

<style lang="scss" scoped>
/* 样式的导入 */
@import "~@/assets/iconfont/iconfont.css";
.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #ccc;
  height: 50px;
  text-align: center;
  background: #fff;
  color: #7a7e83;
  width: 100%;
  z-index: 1;

  ul {
    display: flex;
    align-items: center;
    li {
      margin-top: 5px;
      flex: 1;
      height: 43px;
      &.active {
        color: #fe5100;
      }
      p {
        margin-top: 2px;
      }
      i {
        font-size: 20px;
      }
    }
  }
}
</style>
