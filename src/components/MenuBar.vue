<template>
  <el-menu
    :router="true"
    default-active="/home"
    class="menu-bar"
    background-color="#3674eb"
    text-color="#fff"
    active-text-color="#ffd04b"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item
      v-for="(menu, menuIndex) in menus"
      :key="menuIndex"
      :index="menu.path"
    >
      <i :class="menu.icon"></i>
      <span slot="title">{{ menu.name }}</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
import { menus } from "./menus";
export default {
  data() {
    return {
      menus,
    };
  },
  methods: {
    handleOpen(e) {
      console.log("e", e);
    },
    handleClose(e) {
      console.log("e", e);
    },
  },
};
</script>
<style lang="less" scoped>
.menu-bar {
  width: 200px;
  min-height: calc(100vh - 50px);
}
</style>
