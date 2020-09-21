<template>
  <!-- 商品列表展示 -->
  <!-- 单选 -->
  <van-card
    :price="this.price"
    desc="描述信息"
    title="商品标题"
    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
  >
    <template #tags>
      <van-checkbox v-model="checked"></van-checkbox>
    </template>
    <template #footer>
      <van-stepper v-model="value" />
    </template>
  </van-card>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      checked: true,
      price: 20,
      goods:[]
    };
  },

  mounted() {
    this.getLick() 
  },
  methods: {
    getLick() {
        this.$axios.get("http://localhost:3000/v1/api/goods").then((res) => {
          this.goods = res.data.data.goods;
          console.log(res)
        })
    },
  },
  computed: {},
  watch: {
    value: function (val) {
      this.$store.commit("setPrice", this.value * this.price);
      console.log(this.$store.state.price);
    },
    
  },
};
</script>

<style lang="scss" scoped></style>
