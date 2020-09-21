<template>
  <div>

  <van-nav-bar title="分类" left-text="返回" left-arrow style="background:#f2f2f2;">
        <template #right>
            <van-icon name="search" style="font-size: 0.5rem;" />
        </template>
    </van-nav-bar>



  </div>
</template>

<script>
// 引入顶部导航TanBar


export default {
  components: {

  },
  data() {
    return {
        active:'sort'
    };
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.van-nav-bar {
  // position:fixed;
  // top:0;
  position:fixed;
  top:0;
  width:100%;
}
</style>
