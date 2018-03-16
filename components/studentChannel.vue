
<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    height=600
    stripe
    border
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="creationDate"
      label="创建日期"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="school"
      label="学校"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="groupName"
      label="群名称"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="operations"
      label="运营"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="numberOfApplicants"
      label="报名人数"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="numberOfPeopleConnected"
      label="接通人数"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="studentScreeningByNumber"
      label="学生筛选通过人数"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="parentScreeningByNumber"
      label="家长筛选通过人数"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="payingNumber"
      label="付费人数"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="note"
      label="备注"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="operating"
      label="操作"
      sortable
      width="180">
    </el-table-column>

  </el-table>
</template>

<script>
  export default {
    name: 'studentChannel',
    props: ['tableData'],
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>
