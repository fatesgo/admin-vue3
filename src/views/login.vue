<template>
  <div
    :style="{ backgroundImage: 'url(' + bgImage + ')' }"
    class="content-background"
  >
    <div class="login-box">
      <div class="title">账号登陆</div>
      <el-form :model="form" label-width="80px">
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
const bgImage = new URL(`../assets/bg1@2x.png`, import.meta.url).href;
const form = reactive({
  username: null,
  password: null,
});
const submitForm = () => {
  console.log("submit!");
};
</script>
<style lang="sass" scoped>
.content-background
  background-repeat: no-repeat
  background-size: cover
  width: 100vw
  height: 100vh
  .login-box
    position: relative
    left: 60%
    top: 15%
    width: 425px
    height: 500px
    background: #FFFFFF
    border-radius: 3px
    .title
      padding: 40px 0 70px 30px
      font-size: 18px
      font-family: Microsoft YaHei
      font-weight: 400
      color: #333333
</style>
