<template>
  <el-sub-menu :index="route.path" v-if="Array.isArray(route.children)&& route.children.length>0" >
    <template #title>{{ route.name }}</template>
    <SubMenu
      :routes="item"
      v-for="(item, index) in route.children"
      :key="item.path"
      v-if="Array.isArray(route.children) && route.children.length>0"
    />
  </el-sub-menu>
  <el-menu-item-group v-else>
    <el-menu-item :index="route.path" @click="routeClick" :route="route">{{ route.name }}</el-menu-item>
  </el-menu-item-group>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import SubMenu from "./subMenu.vue";
const router = useRouter();
const props = defineProps({
  route: Object,
});
const routeClick = (key: { index: String; }) => {

};
</script>