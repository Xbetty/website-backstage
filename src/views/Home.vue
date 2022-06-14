<template>
  <div class="page-home">
    <el-form
      class="page-home-form"
      :model="formData"
      :rules="formRules"
      ref="ruleForm"
      label-width="100px"
      label-suffix="："
    >
      <div
        class="module"
        v-for="(module, moduleIndex) in moduleList"
        :key="moduleIndex"
      >
        <div class="module-title">模块{{ moduleIndex + 1 }}</div>
        <div class="module-content">
          <el-form-item label="模块标题">
            <el-input v-model.trim="module.title" width="200px"></el-input>
          </el-form-item>
          <el-form-item label="二级标题">
            <el-input v-model.trim="module.subTitle"></el-input>
          </el-form-item>
          <el-form-item label="展示类型">
            <el-radio-group v-model="module.listType">
              <el-radio label="1">轮播图</el-radio>
              <el-radio label="2">图片列表</el-radio>
            </el-radio-group>
          </el-form-item>
          <!-- <el-form-item label="上传图片">
            <img-uploader v-model="module.imgList" />
          </el-form-item> -->
          <el-form-item label="选择内容">
            <el-select
              v-model="module.contentList"
              multiple
              placeholder="请选择"
            >
              <el-option
                v-for="item in contentList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-button
              v-if="moduleList.length > 1"
              type="danger"
              size="medium"
              plain
              @click="deleteModule(moduleIndex)"
            >
              删 除
            </el-button>
          </el-form-item>
        </div>
      </div>
    </el-form>
    <div class="page-home-btns">
      <el-button type="primary" plain @click="addModule">新增模块</el-button>
      <el-button type="primary" @click="handleSubmit">提 交</el-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import ImgUploader from "@/components/ImgUploader.vue";
const initModuleItem = {
  title: "",
  subTitle: "",
  listType: "",
  imgList: [],
};
export default {
  name: "Home",
  components: {
    // ImgUploader,
  },
  data() {
    return {
      formData: {},
      formRules: {},
      moduleList: [{ ...initModuleItem }],
      contentList: [],
    };
  },
  methods: {
    // 获取内容选项列表
    getContentList() {
      this.contentList = [
        {
          label: "内容1内容1内容1内容1内容1内容1内容1",
          value: "1",
        },
        {
          label: "内容2内容2内容2内容2内容2内容2",
          value: "2",
        },
        {
          label: "内容3",
          value: "3",
        },
      ];
    },
    // 添加模块
    addModule() {
      this.moduleList.push({ ...initModuleItem });
    },
    // 删除模块
    deleteModule(index) {
      this.moduleList.splice(index, 1);
    },
    // 提交
    handleSubmit() {
      console.log("this.moduleList", this.moduleList);
      this.$message.success("提交成功");
    },
  },
  mounted() {
    this.getContentList();
  },
};
</script>
<style lang="less" scoped>
.page-home {
  width: 100%;
  position: relative;
  padding-bottom: 100px;
  &-form {
    display: flex;
    flex-wrap: wrap;
    max-height: calc(100vh - 100px);
    overflow: scroll;
    margin-left: 20px;
    .module {
      flex: 1;
      min-width: 500px;
      background-color: #e3eeff;
      padding: 20px;
      border-radius: 12px;
      margin: 20px 20px 0 0;
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
