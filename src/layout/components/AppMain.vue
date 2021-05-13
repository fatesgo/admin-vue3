<template>
  <section class="app-main">
   <router-index></router-index>
  </section>
</template>

<script>
import RouterIndex from "../routerIndex.vue";
export default {
  name: 'AppMain',
  components: { RouterIndex },
}
</script>

<style lang="scss" scoped>
.app-main {
  padding: 10px;
  background: #efefef;
  /* 50= navbar  50  */
  min-height: calc(100vh - 100px);
  width: 100%;
  position: relative;
  overflow: hidden;
  .app-main{padding: 0;}
}

.fixed-header+.app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh);
  }

  .fixed-header+.app-main {
    padding-top: 120px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
