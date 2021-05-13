<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="id" width="180"> </el-table-column>
      <el-table-column prop="name" label="角色名称" width="180"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import service from "@/utils/request";
export default {
  data(){
      return{
          tableData:[]
      }
  },
  created(){
      service.get('sys/getAllRole').then((result) => {
          this.tableData=result.data;
      }).catch((err) => {
          console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
</style>
