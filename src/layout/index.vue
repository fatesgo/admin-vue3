<template>
  <div class="main">
    <!-- 头部 -->
    <div class="main-header">
      <div class="logo">这是logo</div>
      <Tags />
    </div>
    <!-- 容器 侧边类，内容 -->
    <div class="main-container">
      <div class="main-left">
        <Sidebar />
      </div>
      <div class="main-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tags from "./components/Tags/index.vue";
import Sidebar from "./components/Sidebar/index.vue";
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100vh;
  background: #f0f2f5;
  .main-header {
    display: flex;
  }
  .main-container {
    display: flex;
    .main-left {
      width: 240px;
      height: 100%;
    }
  }
}
</style>