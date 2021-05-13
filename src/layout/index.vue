<template>
  <div class="app-wrapper">
    <!-- <div :class="classObj" class="app-wrapper"> -->
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <!-- <div :class="{ hasTagsView: needTagsView }" class="main-container"> -->
      <!-- <div :class="{ 'fixed-header': fixedHeader }"> -->
      <div>
        <navbar />
        <!-- <tags-view v-if="needTagsView" /> -->
      </div>
      <app-main />
    </div>
  </div>
</template>

<script lang="ts">
import ResizeMixin from "./mixin/ResizeHandler";
import { mapState } from "vuex";
import stores from "@/store";
import { computed, defineComponent, ref, onMounted } from "vue";
import { AppMain, Navbar, Sidebar, TagsView } from "./components";
export default defineComponent({
  name: "Layout",
  components: {
    AppMain,
    Navbar,
    Sidebar,
    TagsView,
  },
  mixins: [ResizeMixin],
  setup() {
    const store = stores;
    const sidebar = computed(() => store.state.appModule.sidebar);
    const device = computed(() => store.state.appModule.device);
    const handleClickOutside = (): void => {
      store.dispatch("closeSideBar", { withoutAnimation: false });
    };
    return {
      handleClickOutside,
      sidebar,
      device,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "../styles/mixin.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - 210px);
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
