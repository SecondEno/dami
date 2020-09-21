<template>
  <div>
    <!-- 商品展示组件（上面图片下面文字价钱） -->
    <van-grid :column-num="2">
      <van-grid-item v-for="(value) in goods"
                     :key="value.goods_id"
                     :icon=value.goods_big_logo
                     :text=value.goods_name
                     @click="goShop(value.goods_id)"
                      />
    </van-grid>
  </div>
</template>

<script>

export default {
  data () {
    return {
      goods:[],
      lis:[]
    }
  },
  mounted () { 
    this.getLick()
  },
  methods:{
    getLick() {
        this.$axios.get("http://localhost:3000/v1/api/goods").then((res) => {
          this.goods = res.data.data.goods;
          console.log(res)
        })
    },
    goShop(t){
      console.log(t)
      this.goods.forEach((v,k)=>{
        if(t == v.goods_id){
          this.lis.push(v)
        }
      })
      console.log(this.lis)
    }
  }
}
</script>

<style scoped></style>
