<template>
  <div class="layout">
    <MenuBar />
    <router-view />
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
  display: flex;
  background-color: #f7f7f7;
}
</style>
