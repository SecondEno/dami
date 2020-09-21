<template>
  <van-swipe @change="onChange">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image" style="width:100%; height:100%;" />
    </van-swipe-item>
    <template #indicator>
      <div class="custom-indicator">{{ current + 1 }}/4</div>
    </template>
  </van-swipe>
</template>


<script>


export default {
  data() {
    return {
      current: 0,
      images: [
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d53a1f12cf97f3fcf40b6cdfe311eb9.jpg",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d32265f5e3eb1496adf4eb53af802906.jpg",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/51701b16df1b5f7638c33f5809f0c5ad.jpg",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b4ea51ccbdd6bdf3d23b4a8af0ed7edd.jpg"
      ],
      lazyComponent: true,
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.van-swipe {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  box-sizing: content-box;
  // transition-property: transform;

  .van-swipe-item {
    width: 375px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  // background: rgba(0, 0, 0, 0.1);
  background: #f7f7f7;
}
</style>