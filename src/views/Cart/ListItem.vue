<template>
  <div>
    <ul>
      <li v-for="(item,index) in cartData"
          :key="item.id">
        <span>{{item.name}}</span>
        <hr>
        <span>{{item.price}}</span>
        <span>
          <button @click="incr(index)">+++</button>
          <input type="text"
                 v-model="item.num">
          <button @click="decr(index,item.num)">---</button>
        </span>
        <span>小计:{{item.total}}</span>
      </li>
    </ul>
    <total></total>
  </div>

</template>

<script>
//计算属性

export default {
  //计算属性
  //子组件中得到父组件中把数据写入到vuex中的state数据
  //实现传值
  components: {
    Total
  },
  data(){
    return {
      
    }
  },

  computed: {
    //mapState本是一个函数，在里面写一个数组
    // ...mapState(['cartData'])
    ...mapGetters(['cartData'])
  },
  methods: {
    incr (index) {
      this.$store.dispatch('incr', index)
    },
    decr (index, num) {
      if (num > 1) {
        this.$store.dispatch('decr', index)
      }
    }
  }
}

</script>

<style scoped>
</style>
