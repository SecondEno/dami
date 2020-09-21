<template>
  <div>
    <van-icon size="20px" name="question-o" />
    <Login></Login>
  </div>
</template>

<script>
import Login from "@/components/Login";
export default {
  components: {
    Login,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style scoped>
.van-icon{
    position: relative;
    top: 5px;
    left: 93%;
}
</style>
