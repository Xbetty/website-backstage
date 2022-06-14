<template>
  <div class="layout">
    <div class="layout-header">
      <div class="icon-wrap">
        <img src="	https://kano.guahao.cn/HbN179073959" />
        <span>网站配置后台</span>
      </div>
      <el-dropdown class="user-info" size="medium">
        <span class="el-dropdown-link">
          <i class="el-icon-s-custom"></i>
          管理员
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="layout-content">
      <MenuBar />
      <router-view />
    </div>
  </div>
</template>
<script>
import MenuBar from "@/components/MenuBar.vue";

export default {
  components: {
    MenuBar,
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.layout {
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    .icon-wrap {
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      color: #3e7fee;
      img {
        width: 30px;
        margin-right: 12px;
      }
    }
    .user-info {
      cursor: pointer;
      font-size: 14px;
      &:hover {
        color: #3e7fee;
      }
      i {
        font-size: 18px;
      }
    }
  }
  &-content {
    display: flex;
    background-color: #f7f7f7;
  }
}
</style>
