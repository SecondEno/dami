<template>
  <div>
    <vHeadNav></vHeadNav>
    <!-- <v-card></v-card> -->
    <vCard></vCard>
    <van-divider :style="{ color: '#ff6700', borderColor: '#ff6700', padding: '0 16px' }">
      猜你喜欢
    </van-divider>
    <vGrid></vGrid>
    <vSubmitBar></vSubmitBar>
  </div>
</template>

<script>
import vCard from "../../components/Cart/Card";
import vSubmitBar from "../../components/Cart/SubmitBar";
import vHeadNav from "../../components/Cart/HeaderNav";
import vGrid from "../../components/Cart/Grid";

export default {
  data() {
    return {};
  },
  components: {
    vCard,
    vSubmitBar,
    vHeadNav,
    vGrid,
  },
  mounted() {},
};
</script>

<style scoped></style>
