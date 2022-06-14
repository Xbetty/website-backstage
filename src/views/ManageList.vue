<template>
  <div class="page-manage-list">
    <div class="page-manage-list--btns">
      <el-button type="primary" size="medium" @click="goDetail"
        >新 增</el-button
      >
    </div>
    <el-table :data="tableData" style="width: 100%" size="mediun">
      <el-table-column label="序号" width="100">
        <template slot-scope="scope">
          {{ (currentPage - 1) * 10 + scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="title" label="标题" min-width="150">
      </el-table-column>
      <el-table-column prop="subTitle" label="二级标题" min-width="150">
      </el-table-column>
      <el-table-column prop="img" label="图片" min-width="150">
        <template slot-scope="scope">
          <img :src="scope.row.img" height="100px" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button type="primary" size="small" plain>编辑</el-button>
          <el-button
            @click="handleDelete(scope.row.id)"
            type="danger"
            size="small"
            plain
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="page-manage-list--pagination"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="10"
      layout="total, prev, pager, next"
      :total="totalCount"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1,
      totalCount: 0,
      tableData: [],
    };
  },
  methods: {
    handleDelete(id) {
      console.log("id", id);
      this.$message.success("删除成功");
      this.getList();
    },
    handleCurrentChange(current) {
      this.currentPage = current;
      this.getList();
    },
    getList() {
      this.tableData = [
        {
          id: 1,
          title: "标题一",
          subTitle: "二级标题",
          img: "http://kano.guahao-test.com/LDy43933895",
        },
        {
          id: 2,
          title: "标题二",
          subTitle: "二级标题",
          img: "http://kano.guahao-test.com/LDy43933895",
        },
        {
          id: 3,
          title: "标题三",
          subTitle: "二级标题",
          img: "http://kano.guahao-test.com/LDy43933895",
        },
        {
          id: 4,
          title: "标题四",
          subTitle: "二级标题",
          img: "http://kano.guahao-test.com/LDy43933895",
        },
        {
          id: 5,
          title: "标题五",
          subTitle: "二级标题",
          img: "http://kano.guahao-test.com/LDy43933895",
        },
        {
          id: 6,
          title: "标题六",
          subTitle: "二级标题",
          img: "http://kano.guahao-test.com/LDy43933895",
        },
      ];
    },
    goDetail() {
      this.$router.push("/manage/detail");
    },
  },
  mounted() {
    this.getList();
  },
};
</script>
<style lang="less" scoped>
.page-manage-list {
  padding: 20px;
  width: 100%;
  &--btns {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 12px;
  }
  &--pagination {
    display: flex;
    justify-content: flex-end;
    margin-top: 12px;
  }
}
</style>
