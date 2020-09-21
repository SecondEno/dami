<template>
  <van-form @submit="onSubmit" class="fr">
    <van-field
      v-model="userinfo.username"
      name="username"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="userinfo.password"
      type="password"
      name="password"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="padding: 20px;">
      <van-button round block type="info" native-type="submit" color="#ff6701" class="but1">立即登录/注册</van-button>
      <van-button round block type="info" color="#f0f0f0" class="but2">帐号密码登录</van-button>
    </div>
    <div>
      <p>
        1014147301
      </p>
      <p>
        190899
      </p>
    </div>
  </van-form>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      userinfo: {
        username: "",
        password: "",
      },
    };
  },
  mounted() {},
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      //post请求
      this.$axios.post("http://localhost:3000/v1/api/login", values).then(
        (res) => {
          console.log(res.data.data.user);
          this.$store.dispatch("setToken", res.data.data.token);
          Dialog.alert({
            message: "登陆成功啦 ^ _ ^",
          }).then(() => {
            this.$router.push({ path: "/my" });
          });
        },
        (err) => {
          // 登录失败
          Dialog.alert({
            message: "登录失败啦，检查您的账户密码是否正确 T _ T",
          }).then(() => {});
        }
      );
    },
  },
};
</script>

<style scoped>
.but1 {
  color: #fff;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 15px;
}
.but2 {
  color: #000;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 15px;
}
</style>
