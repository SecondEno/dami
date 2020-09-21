<template>
  <div>


    <div class="box">
      <!------------- 左侧导航栏---------------->

        <van-sidebar v-model="activeKey" @change="OnClick">
          <van-sidebar-item v-for="(item,k) in sortlist" :key="k" :title="item" />
        </van-sidebar>


      <!------------- 右侧内容区 --------------->
      <!-- <div class="bos">{{bout}}</div> -->
      <div class="bos">
        <div class="list1">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8d0c5edf9f5d514167fdb244a259d90.jpg?f=webp&w=750&h=300&bg=FFFFFF"/>
        </div>
        <!-- <div v-for="item in 4" :key="item"> -->

        <van-divider>小米手机系列</van-divider>
        <div class="card">
          <!-- <div class="cardcontain" v-for="item in 4" :key="item"> -->
          <div class="cardcontain">
            <div class="img">
              <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"/>
            </div>
            <div class="name">小米10 至尊版</div>
          </div>

          <div class="cardcontain">
            <div class="img">
              <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/58a4446432aba7894e957f2c18853562.png?thumb=1&w=120&h=120"/>
            </div>
            <div class="name">小米10 青春</div>
          </div>
          <div class="cardcontain">
            <div class="img">
              <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e5b8780882839adfd0949a46215cab5c.png?thumb=1&w=120&h=120"/>
            </div>
            <div class="name">小米10 Pro</div>
          </div>
          <div class="cardcontain">
            <div class="img">
              <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/acf2e521e29e5afabf6d493203b31f27.png?thumb=1&w=120&h=120"/>
            </div>
            <div class="name">小米10 </div>
          </div>
          
        </div>
        <div class="carddown">
          <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9276cddcb813125147b73b13c841e8c8.jpg?f=webp&w=750&h=120&bg=FAF4E6"/>
        </div>


        <van-divider>小米MIX系列</van-divider>
        <div class="card">
          <!-- <div class="cardcontain" v-for="item in 4" :key="item"> -->
          <div class="cardcontain">
            <div class="img">
              <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/266ad6dd5146deaf3ae3602a89e7a217.png?thumb=1&w=120&h=120"/>
            </div>
            <div class="name">小米MIX Alpha</div>
          </div>
        </div>
        <div class="carddown">
          <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9276cddcb813125147b73b13c841e8c8.jpg?f=webp&w=750&h=120&bg=FAF4E6"/>
        </div>


        
        <van-divider>小米手机系列</van-divider>
        <div class="card">
          <!-- <div class="cardcontain" v-for="item in 4" :key="item"> -->
          <div class="cardcontain">
            <div class="img">
              <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"/>
            </div>
            <div class="name">小米10 至尊版</div>
          </div>

          <div class="cardcontain">
            <div class="img">
              <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/58a4446432aba7894e957f2c18853562.png?thumb=1&w=120&h=120"/>
            </div>
            <div class="name">小米10 青春</div>
          </div>
          <div class="cardcontain">
            <div class="img">
              <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e5b8780882839adfd0949a46215cab5c.png?thumb=1&w=120&h=120"/>
            </div>
            <div class="name">小米10 Pro</div>
          </div>
          <div class="cardcontain">
            <div class="img">
              <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/acf2e521e29e5afabf6d493203b31f27.png?thumb=1&w=120&h=120"/>
            </div>
            <div class="name">小米10 </div>
          </div>
          
        </div>
        <div class="carddown">
          <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9276cddcb813125147b73b13c841e8c8.jpg?f=webp&w=750&h=120&bg=FAF4E6"/>
        </div>


      </div>

    </div>

  </div>
</template>

<script>



export default {
  components: {

  },
    data() {
    return {
      activeKey: 0,
      sortlist:[],
      // this.sortlist:newArr(jg)
      // bout:{},
      //  loading: true,
    };
  },
  created() {},
  mounted () {
    this.OnClick()
    // this.loading = false;
  },
  methods: {
    OnClick(k){
      let url = 'http://10.9.70.179:3000/v1/api/good'
      this.$axios.get( url ).then( ret => {
      // console.log( ret )// 得到数据
      // this.sortlist = ret.data.data.goods;

      // 处理数据
      let hvhv = ret.data.data.goods
      let jg  = []
      hvhv.forEach( (v , k) => {
        // console.log(v)
        jg.push(v.cat_one_id)
      })
      // console.log(jg)
      // 数组去重
      function newArr(arr){
          return Array.from(new Set(arr))
      }
      // console.log(newArr(jg))
      this.sortlist = newArr(jg);

      //默认设置展示第一个

      // this.bout = this.sortlist[0].cat_three_id;
      // console.log(this.bout)

      //获取一级下面的二级
      // this.bout = this.sortlist[k].cat_three_id;
  
      })
    },
 
    


  }

  }
</script>

<style lang="scss" scoped>
.box{
  display: flex;
}

.bos{
  width: 80%;

  .list1 img{
    display: block;
    height: 3rem;
    // width: 5rem;
    width:100%；
  }
  .card {
    // display: flex;
    width: 100%;
    overflow: hidden;

    // display: flex;
    // justify-content: space-between;

  .cardcontain {
    float: left;
    width: 33.333333333333336%;
    text-align: center;
    margin-top: .2rem;
    margin-bottom: .3rem;
    overflow: hidden;

    .img {
      // width: 1rem;
      // height: 1rem;
      margin: 0 auto;
      background: #fff;
      overflow: hidden;

      margin-left: 0.5rem;
    }
    .name {
      margin-top: .28rem;
      white-space: nowrap;
      font-size: .23rem;
      color: rgba(0,0,0,.54);
    }
  }

}
  .carddown img{
    width: 100%;
  }


}
.card img {
  display: block;
  height: 100%!important;
  width: auto!important;
}
</style>
