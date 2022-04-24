<template>
  <el-menu
   :default-active="$route.path"
    class="el-menu-vertical-demo"
    router
  >
    <el-sub-menu :index="route.path" v-for="(route, index) in userRoutes"   :key="route.path" >
      <template #title>
        <span>{{ route.name }}</span>
      </template>
      <SubMenu
        :route="item"
        v-if="Array.isArray(route.children) && route.children.length>0"
        v-for="(item, i) in route.children"
        :key="item.path"
      />
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import SubMenu from "./subMenu.vue";
import { useStore } from "vuex";
const store = useStore();
const userRoutes = store.getters.userRoutes;


</script>