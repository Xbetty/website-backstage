<template>
  <div class="page-contact">
    <el-form
      class="page-contact-form"
      :model="formData"
      :rules="formRules"
      ref="ruleForm"
      label-width="100px"
      label-suffix="："
    >
      <div class="module">
        <div class="module-title">友情链接</div>
        <el-form-item label="友情链接">
          <el-radio-group v-model="formData.friendLink">
            <el-radio :label="true">有</el-radio>
            <el-radio :label="false">无</el-radio>
          </el-radio-group>
        </el-form-item>
        <div class="link-list" v-if="formData.friendLink">
          <div
            class="link"
            v-for="(link, linkIndex) in formData.linkList"
            :key="linkIndex"
          >
            <el-form-item :label="`链接${linkIndex + 1}`">
              <el-input
                class="link-input"
                v-model.trim="link.url"
                placeholder="请输入链接url"
              ></el-input>
              <el-input
                class="link-input"
                v-model.trim="link.name"
                placeholder="请输入链接名称"
              ></el-input>
              <el-button type="danger" plain @click="deleteLink(linkIndex)"
                >删除</el-button
              >
            </el-form-item>
          </div>
          <el-form-item>
            <el-button type="primary" plain size="medium" @click="addLink"
              >新增</el-button
            >
          </el-form-item>
        </div>
      </div>
      <div class="module">
        <div class="module-title">联系方式</div>
        <el-form-item label="联系方式">
          <el-radio-group v-model="formData.contactWay">
            <el-radio :label="true">有</el-radio>
            <el-radio :label="false">无</el-radio>
          </el-radio-group>
        </el-form-item>
        <template v-if="formData.contactWay">
          <el-form-item label="电话">
            <el-input v-model.trim="formData.mobile"></el-input>
          </el-form-item>
          <el-form-item label="手机">
            <el-input v-model.trim="formData.phone"></el-input>
          </el-form-item>
          <el-form-item label="邮编">
            <el-input v-model.trim="formData.code"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model.trim="formData.address"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model.trim="formData.email"></el-input>
          </el-form-item>
        </template>
      </div>
    </el-form>
    <div class="page-contact-btns">
      <el-button type="primary" plain @click="handleReset">重置</el-button>
      <el-button type="primary" @click="handleSubmit">提 交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  components: {},
  data() {
    return {
      formData: {
        linkList: [
          {
            url: "",
            name: "",
          },
        ],
      },
      formRules: {},
      contentList: [],
    };
  },
  methods: {
    // 添加链接
    addLink() {
      this.formData.linkList.push({ url: "", name: "" });
    },
    // 删除链接
    deleteLink(index) {
      this.formData.linkList.splice(index, 1);
    },
    // 提交
    handleSubmit() {
      console.log("this.formData", this.formData);
      this.$message.success("提交成功");
    },
    handleReset() {},
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
.page-contact {
  width: 100%;
  position: relative;
  &-form {
    max-height: calc(100vh - 150px);
    overflow: scroll;
    padding: 20px;
    .module {
      background-color: #e3eeff;
      padding: 20px;
      border-radius: 12px;
      margin-bottom: 20px;
      &-title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 12px;
        &::before {
          display: inline-block;
          content: "";
          width: 3px;
          height: 12px;
          border-radius: 10px;
          margin-right: 6px;
          background-color: #3771ec;
        }
      }
      /deep/.el-input {
        width: 350px;
      }
      .link {
        &-input {
          margin-right: 12px;
        }
      }
    }
  }
  &-btns {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #fff;
  }
}
</style>
