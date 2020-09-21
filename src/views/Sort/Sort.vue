<template>
  <div>
    <SortHeader></SortHeader>
    <div class="SortContain">
      <SortContain></SortContain>
      <!-- <ContainRight></ContainRight> -->
    </div>

  </div>
</template>

<script>
import SortHeader from "@/components/Sort/SortHeader";
import SortContain from "@/components/Sort/SortContain";
// import ContainRight from "@/components/Sort/ContainRight";



export default {
  components: {

    SortHeader,
    SortContain,
  },
    data() {
    return {};
  },
  created() {},
  mounted () {},
}

</script>

<style lang="scss" scoped>
.SortContain {
  width:100%;
  height:100%;
  // background:#f5f5f5;

  flex:1;
  flex-shrink: 0;

  display:flex;
  justify-content: space-around;

  .containleft {
    width:100%;
    height:100%;
    background:green;
  }
  .containright {
    width:100%;
    height:100%;
    background:red;
  }
}
</style>
