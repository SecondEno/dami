<template>
  <div>
    <!-- 整体框架 -->
    <div id="container">
      <!-- 固定头部 -->
      <!-- 中间滑动 -->
      <section id="sectionbox" class="setContain">
        <!-- <div class="itembox"> -->
                <ShouyeContent></ShouyeContent>
        <!-- </div> -->
      </section>

    </div>
  </div>
</template>

<script>


import ShouyeContent from "@/components/Shouye/ShouyeContent";


export default {
  components: {
    // ShouyeTab,
    

    ShouyeContent,

  },
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
html,
body {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
}
#container {
  display: flex;
  flex-direction: column;
  // background: #f0debf;
}

#container .setheader {
  // position: fixed;
  position: sticky;
  background: #f2f2f2;
  width: 100%;
  height: 2.6rem;
  line-height: 2.6rem;
  flex-shrink: 0;
  z-index: 99;
}
#container .setFoorter {
  position: fixed;
  background: #f2f2f2;
  width: 100%;
  height: 1.3rem;
  line-height: 1.3rem;
}
#container .headernav,
#container .footernav {
  text-align: center;
  font-size: 1.5rem;
  display: block;
  color: #fff;
}
#container .setheader {
  top: 0;
}
#container .setContain {
  flex: 1;
  overflow: scroll;
}
#container .itembox {
  // font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  background: #f0debf;
}
#container .setFoorter {
  bottom: 0;
}
</style>
