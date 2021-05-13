<template>
  <div class="app-wrapper">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="[...cacheViews]">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: "RouterIndex",

  computed: {
    key() {
      return this.$route.path
    },

    cacheViews() {
      return this.$store.state.tagsViewModule.cachedViews;
    },

  }
};
</script>