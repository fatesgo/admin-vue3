<template>
  <div class="navbar">
    <div class="left-menu">
      <!-- <hamburger
        id="hamburger-container"
        :is-active="sidebar.opened"
        class="hamburger-container"
      ></hamburger> -->
    </div>
    <div class="left-menu">
      <div class="title">后台权限管理系统</div>
    </div>
    <div class="right-menu">
      <template v-if="device !== 'mobile'">
        <div class="right-menu-item">
          <el-dropdown trigger="click" @command="handleCommand">
            <span class="hover-effect">
              超级管理员<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item icon="el-icon-circle-check" command="1"
                  >退出用户</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div class="right-menu-item">
          <div class="avatar">
            <img
              src="../../assets/avatar.jpg"
              width="40"
              height="40"
              class="block"
            />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {},
  data() {
    return {
      popoverModel: false,
    };
  },
  created() {},
  computed: {
    ...mapGetters(["sidebar", "avatar", "device", "userInfo"]),
  },
  methods: {
    //0 修改密码   1退出用户
    handleCommand(value) {
      switch (value) {
        case "1":
          this.logout();
          break;
        default:
          break;
      }
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  overflow: hidden;
  position: relative;
  background: #1685f8;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  .icontrans-copy-copy {
    font-size: 22px;
    color: white;
  }

  .title {
    font-size: 28px;
    font-weight: 500;
    color: white;
    padding-left: 18px;
  }

  .icontuichu1 {
    color: white;
    font-size: 20px;
    cursor: pointer;
  }

  .el-badge__content.is-fixed {
    background: red;
  }

  .el-badge__content {
    top: 20px;
    right: 10px;
    border: none;
  }

  .hamburger-container {
    line-height: 60px;
    height: 100%;
    float: left;
    color: white;
    cursor: pointer;
    background: #1685f8;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;
  }

  .left-menu,
  .right-menu {
    float: right;
    height: 100%;
    line-height: 60px;

    .el-dropdown {
      color: white;
    }

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: white;
      vertical-align: text-bottom;
      .avatar {
        height: 60px;
        line-height: 60px;
        cursor: pointer;
        display: table-cell;
        vertical-align: middle;
      }
      .hover-effect {
        color: white;
        cursor: pointer;
        transition: background 0.3s;
      }
    }
  }
  .left-menu {
    float: left;
  }
}
</style>