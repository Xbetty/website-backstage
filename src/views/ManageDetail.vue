<template>
  <div class="page-content-detail">
    <el-form
      class="page-content-detail--form"
      :model="formData"
      :rules="formRules"
      ref="ruleForm"
      label-width="100px"
      label-suffix="："
    >
      <el-form-item label="标题">
        <el-input v-model.trim="formData.title" width="200px"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input
          v-model.trim="formData.desc"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4 }"
        ></el-input>
      </el-form-item>
      <el-form-item label="上传图片">
        <img-uploader v-model="formData.imgList" />
      </el-form-item>
      <el-form-item label="详情内容">
        <RichEditor />
      </el-form-item>
    </el-form>
    <div class="page-content-detail--btns">
      <el-button @click="goBack">返 回</el-button>
      <el-button type="primary" @click="handleSubmit">提 交</el-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ImgUploader from "@/components/ImgUploader.vue";
import RichEditor from "@/components/RichEditor.vue";
export default {
  name: "Home",
  components: {
    ImgUploader,
    RichEditor,
  },
  data() {
    return {
      formData: {},
      formRules: {},
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    handleSubmit() {
      console.log("submit");
    },
  },
};
</script>
<style lang="less" scoped>
.page-content-detail {
  width: 100%;
  position: relative;
  padding: 20px 30px 0 20px;
  &--form {
    max-height: calc(100vh - 150px);
    overflow: scroll;
  }
  &--btns {
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
