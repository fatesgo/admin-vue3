<template>
  <div class="content-background">
    <div class="login-box">
      <div class="title">账号登陆</div>
      <el-form :model="form" label-width="80px" style="width: 90%">
        <el-form-item label="用户名" prop="username">
          <el-input
            placeholder="请输入用户名"
            v-model="form.username"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            placeholder="请输入密码"
            v-model="form.password"
            type="password"
            show-password
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(formRef)"
            >登陆</el-button
          ></el-form-item
        >
      </el-form>
    </div>
  </div>
</template>
<script  lang="ts" setup>
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
const form = reactive({
  username: null,
  password: null,
});
const submitForm = () => {
  store.dispatch("Login", form).then(() => {
    router.replace({
      path: "/index",
    });
  });
};
</script>
<style lang="scss" scoped>
.content-background {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("@/assets/bg1@2x.png");
  width: 100vw;
  height: 100vh;
  .login-box {
    position: relative;
    left: 60%;
    top: 20%;
    width: 425px;
    height: 380px;
    background: #ffffff;
    border-radius: 3px;
  }
  .title {
    padding: 40px 0 70px 30px;
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #333333;
  }
}
</style>
