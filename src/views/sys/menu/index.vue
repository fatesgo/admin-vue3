<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-tree
          :data="menuTree"
          node-key="id"
          ref="tree"
          :highlight-current="true"
          :props="defaultProps"
        ></el-tree>
      </el-col>
      <el-col :span="16">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="id" label="id"> </el-table-column>
          <el-table-column prop="name" label="菜单名称"> </el-table-column>
          <el-table-column prop="hidden" label="是否隐藏"> </el-table-column>
          <el-table-column fixed="right" label="操作">
            <template>
              <el-button type="text" size="small">按钮管理</el-button>
              <el-button type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import service from "@/utils/request";
export default {
  data() {
    return {
      defaultProps: {
        value: "id",
        label: "menu_name",
      },
      menuTree: [],
      tableData: [],
    };
  },
  created() {
    service
      .get("sys/getAllMenu")
      .then((result) => {
        this.menuTree = this.toTree(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  mounted(){
    console.log(this.$route);
    
  },
  methods: {
    toTree(data) {
      let result = [];
      if (!Array.isArray(data)) {
        return result;
      }
      let map = {};
      data.forEach((item) => {
        map[item.id] = item;
      });
      data.forEach((item) => {
        let parent = map[item.pid];
        if (parent) {
          (parent.children || (parent.children = [])).push(item);
        } else {
          result.push(item);
        }
      });
      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
