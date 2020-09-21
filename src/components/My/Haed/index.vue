<template>
  <div class="head" @click="goLogin">
    <div>
      <van-image
        v-if="this.show"
        class="img"
        round
        width="3rem"
        height="3rem"
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600623314241&di=cebb2cbf2f8ea08c0b9cda7de73aff2f&imgtype=0&src=http%3A%2F%2Fpics2.baidu.com%2Ffeed%2Fbd315c6034a85edf81702f204ba7a225dc54752a.jpeg%3Ftoken%3D40ea367f6b2ef995eaa6f5faf705a7d4"
      />
      <van-image
        v-else
        class="img"
        round
        width="3rem"
        height="3rem"
        src="https://m.mi.com/static/img/avatar.76a75b8f17.png"
      />

    </div>
    <div class="name" v-if="bool == true">{{ this.data[0].username }}</div>
    <div class="name" v-else>登录/注册</div>
  </div>
</template>

<script>
import { Dialog } from "vant";

export default {
  data() {
    return {
      data: [],
      bool: false,
      show:''
    };
  },
  mounted() {
    this.getUser();
    this.toShow()
  },
  methods: {
    goLogin() {
      if (this.bool == false) {
        Dialog.confirm({
          title: "用户登录注册",
          message: "是否同意我们的霸王条款",
        })
          .then(() => {
            this.$router.replace("/login");
          })
          .catch(() => {});
      }
    },
    getUser() {
      if (sessionStorage.getItem("token")) {
        this.$axios.get("http://localhost:3000/v1/api/user").then((res) => {
          this.data = res.data.data.user;
          let name = res.data.data.user;
          name.forEach((v, k) => {});
          this.bool = true;
        });
      } else {
        this.bool = false;
      }
    },
    toShow(){
      this.show = sessionStorage.getItem('token')
    }
  },
};
</script>

<style scoped>
.head {
  display: flex;
  background: #f37d0f;
  background-size: auto 100%;
  padding: 1rem 0;
  align-items: center;
}
.img {
  margin: 0 1rem;
}
.name {
  color: #fff;
  font-size: 0.8rem;
  text-align: left;
}
</style>
