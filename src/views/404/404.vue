<template>
  <div>
    <div class="aa">
        <img class="aaa" src="../../assets/error404.png"/>
        <h2>您将在<span style="color:red">{{time}}</span>秒后跳转首页</h2>
    </div>

  </div>
</template>

<script>
export default {
//   name: 'HelloWorld',
  data () {
    return {
      time:0,
    }
  },
  methods:{
    countDown(){
      let THIS=this;
      THIS.time--;
    }

  },
  mounted(){
    let THIS=this;
    THIS.time=5;
    setInterval(THIS.countDown,1000);
  },
  watch:{
    'time':function(newVal,oldVal){
          if(newVal==0){
            this.$router.push('/');
          }
    }
  }

}
</script>

<style lang="scss" scoped>
.aa{
  width: 100%;
}
.aaa{
  width: 100%;
  height: 100%;
  display: inline-block;
}

</style>
