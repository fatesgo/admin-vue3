<template>
  <div class="has-logo">
    <logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper" class="leftMenuList">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        background-color="#FFFFFF"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "./Logo.vue";
import SidebarItem from "./SidebarItem.vue";
export default {
  components: { SidebarItem, Logo },
  mounted() {
    console.log(this.routes);
  },
  computed: {
    ...mapGetters(["routes", "sidebar"]),

    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },

    isCollapse() {
      return !this.sidebar.opened;
    },
  },
};
</script>
<style scoped>
.leftMenuList {
  padding: 50px 0 25px;
}
</style>