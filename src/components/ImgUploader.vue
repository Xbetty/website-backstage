<template>
  <div class="image-uploader">
    <el-upload
      v-bind="$attrs"
      list-type="picture-card"
      :accept="accept"
      :limit="limit"
      :action="actionUrl"
      :file-list="fileList"
      :data="uploadData"
      :headers="uploadHeader"
      :before-upload="beforeUpload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-exceed="handleExceed"
      :on-success="uploadSuccess"
      :on-error="uploadError"
    >
      <!-- 按钮 -->
      <i class="el-icon-plus"></i>
      <!-- 提示 -->
      <div slot="tip" class="el-upload-tip el-upload-tip--small">
        {{ imgTip }}
      </div>
    </el-upload>
    <!-- 图片预览 -->
    <el-dialog :visible.sync="previewDialogVisible" append-to-body>
      <img width="100%" :src="previewImgUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  model: {
    prop: "imageList",
    event: "change",
  },
  props: {
    limit: Number,
    limitSize: {
      type: Number,
      default: 2, // MB
    },
    accept: {
      type: String,
      default: ".jpg,.jpeg,.png",
    },
    imgTip: {
      type: String,
      default: "(只能上传jpeg/jpg/png文件，且不超过500kb)",
    },
    imageList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      // kano 接口地址
      actionUrl: `${process.env.VUE_APP_GATEWAY_SERVER}/kanoupload/imagefileuploadbydecoder`,
      // 额外参数
      uploadData: {},
      // 额外的请求头
      uploadHeader: {
        "weiyi-appid": "d_web_dhmphcare",
      },
      // 预览弹窗显示
      previewDialogVisible: false,
      // 预览图片地址
      previewImgUrl: "",
      // 已上传文件
      fileList: [],
    };
  },
  mounted() {
    this.initFileList();
  },
  methods: {
    // 初始化已上传图片
    initFileList() {
      this.fileList = this.imageList.map((url) => ({ url }));
    },
    // 上传前
    beforeUpload(file) {
      const size = file.size;
      if (size > 1024 * 1024 * this.limitSize) {
        this.$message.error(`图片大小不能超过${this.limitSize}M`);
        return false;
      }
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          if (e) {
            this.uploadData = {
              // TODO 需要修改业务类型
              bizcode: "20",
              uploadOriginalImage: "0",
              needToken: "0",
              upload: e.target.result,
            };
            resolve();
          }
        };
      });
    },
    // 上传成功
    uploadSuccess(e, file, fileList) {
      if (e && e.flag === "0") {
        let url = e.data.preUrl + e.data.relativeAddress;
        this.imageList.push(url);
        this.fileList = fileList;
        this.$emit("change", this.imageList);
      } else {
        this.$message.error(e.message);
      }
    },
    // 上传失败
    uploadError(err) {
      console.log("err", err);
      this.$message.error("图片上传失败");
    },
    // 预览
    handlePreview(file) {
      console.log("file", file);
      if (file.url) {
        this.previewDialogVisible = true;
        this.previewImgUrl = file.url;
      } else {
        this.$message.error("预览失败");
      }
    },
    // 移除
    handleRemove(file, fileList) {
      this.fileList = fileList;
      let url = file.url;
      if (file.response) {
        url = file.response.data.preUrl + file.response.data.relativeAddress;
      }
      let index = this.imageList.findIndex((img) => img === url);
      if (index > -1) {
        this.imageList.splice(index, 1);
      }
      this.$emit("change", this.imageList);
      console.log("this.imageList", this.imageList);
    },
    // 超出数量
    handleExceed(files, fileList) {
      console.log("files", files, fileList);
      this.$message.error(`图片数量不能超过${this.limit}张`);
    },
  },
};
</script>
<style scoped lang="less">
.image-uploader {
  /deep/ .el-upload-list__item {
    padding: 0;
    width: 120px;
  }
}
</style>
