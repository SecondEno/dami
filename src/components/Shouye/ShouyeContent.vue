<template>
  <div>
    <ShouyeTop></ShouyeTop>
    <div class="hhhh">
    <ShouyeTop></ShouyeTop>
    </div>
    <Swiper></Swiper>
    
    <!-- Grid宫格 -->
    <div class="grid1">
      <a v-for="(value,index) in tupian" :key="index" class="griditem">
        <img :src="value.img" alt />
      </a>
    </div>

    <!-- 每个卡片区域下方的间隔 -->
    <div class="jiange"></div>
    <div class="list dami1">
      <div style="width:49%; margin-right:2px">
        <img
          style="width:100%"
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d692a30ee3d586c4274575eec255d3c5.jpg?f=webp&w=537&h=762&bg=C1DDE9"
          alt
        />
      </div>
      <div style="width:50%">
        <div style="width:100%">
          <img
            style="width:100%"
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/827a686678f39b1bbdc99c6e6b6a13c8.jpg?f=webp&w=537&h=378&bg=DAECFA"
            alt
          />
        </div>
        <div style="width:100%">
          <img
            style="width:100%"
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/267e988a99b5cf4e960747e8aa5fa831.jpg?f=webp&w=537&h=378&bg=EDFBFC"
            alt
          />
        </div>
      </div>
    </div>
    <!-- 每个卡片区域下方的间隔 -->
    <div class="jiange"></div>
    <div class="dami2">
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0c08e3519b4c98ae53734a405143ffee.jpg?f=webp&w=1080&h=660&bg=FFFFFF"
        alt
      />
    </div>
    <!-- 每个卡片区域下方的间隔 -->
    <div class="jiange"></div>




    <div class="dami3">
      <!-- 上 -->
      <div class="item" v-for="item in this.goods" :key="item.goods_id" @click="detailId(item.goods_id)" @list="getList">
        <div class="tupian">
          <!-- <img
            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7ed6090953a4edca0ee6bc4b36cb4a9e.jpg?thumb=1&w=344&h=280"
            alt
          /> -->
          <img v-lazy="item.goods_big_logo" />
        </div>
        <!-- 下 -->
        <div class="wenzi">
          <div class="name">{{item.goods_name}}</div>
          <div class="brief">{{item.cat_id}}</div>
          <div class="price">
            ￥{{item.goods_price}}
            <span>起</span>
          </div>
          <div class="buybtn mauto">立即购买</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// 导入轮播图组件
import Swiper from "@/components/Shouye/Swiper";
import ShouyeTop from "@/components/Shouye/ShouyeTop";

// 引入Grid宫格



export default {
  components: {
    Swiper,
    ShouyeTop,
  },
  data() {
    return {

      tupian: [
        { img: [require("../../../public/images/ia_300000005.png")] },
        { img: [require("../../../public/images/ia_300000006.webp")] },
        { img: [require("../../../public/images/ia_300000007.webp")] },
        { img: [require("../../../public/images/ia_300000008.webp")] },
        { img: [require("../../../public/images/ia_300000009.webp")] },
        { img: [require("../../../public/images/ia_300000010.webp")] },
        { img: [require("../../../public/images/ia_300000011.png")] },
        { img: [require("../../../public/images/ia_300000012.png")] },
        { img: [require("../../../public/images/ia_300000013.webp")] },
        { img: [require("../../../public/images/ia_300000014.png")] }
      ],
      goods: []
    };
  },

  mounted() {
    this.getList()

  },
  methods: {
    getList (){
      let url = 'http://10.9.70.179:3000/v1/api/goods'
      this.$axios.get( url ).then( ret => {
      // console.log( ret )
      this.goods = ret.data.data.goods;

      // 给 vuex 发送一个异步请求，更新数据 vuex action
      this.$store.dispatch( 'listData' , ret.data )
    })
    },
    detailId(id){
      this.$router.push({ name: "detail", params: { id } });
    }
  }
};
</script>

<style lang="scss" scoped>
.hhhh{
  position: fixed;
  top: 0;
}
// Grid宫格
.grid1 {
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .griditem {
    display: block;
    // position: absolute;
    width: 20%;
    img {
      display: block;
      width: 100%;
    }
  }
}

// #content {
//   width: 100%;
//   flex: 1;
//   overflow: auto;
// }
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  img {
    display: block;
  }
}

.jiange {
  margin: 0 auto;
  border-top: none;
  border-left: none;
  border-right: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;

  height: 0.16rem;
  border-bottom: 0.16rem solid rgb(245, 245, 245);
  background-color: rgb(245, 245, 245);
}
.dami2 img {
  display: block;
  height: 4.4rem;
  // width: 7.2rem;
  width: 100%;
}

// 每日精选下方的商品列表
.dami3 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100%;
  // padding: 0 0.12rem;
  overflow: hidden;
  text-align: center;
  background: #fff;

  .item {
    width: 49%;
    // border: 1px solid #e1e6e2;
    margin-bottom: 0.06rem;
  }

  .tupian {
    img {
      display: block;
      width: 100%;
    }
  }
  .wenzi {
    padding: 0.2rem 0.27rem;
    // width: 178px;
    // height: 107px;
    // background: green;
    .name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 0.28rem;
      color: rgba(0,0,0,.87);
    }
    .brief {
      margin-top: 0.06rem;
      font-size: 0.4rem;
      line-height: 0.4rem;
      color: rgba(0,0,0,.87);

      // white-space: nowrap;
      // overflow: hidden;
      // text-overflow: ellipsis;
    }
    .price {
      font-size: 0.32rem;
      color: #ea625b;
      height: 1.5em;
      line-height: 1.5em;
      display: inline-block;
      span {
        display: inline-block;
        margin-left: 0.04rem;
        font-size: 0.3rem;
      }
    }
    .mauto {
      margin: 0 auto;
    }
    .buybtn {
      // width: 2rem;
        background: #ea625b;
        border-radius: 0.05rem;
        text-align: center;
        color: #fff;
        font-size: 0.24rem;
        padding: 0.16rem 0;
        font-weight: 700;
    }
  }
}
</style>
