
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
      prop="scheduleTime"
      label="排班时间"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="operatingHours"
      label="工作时间"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="numberOfShifts"
      label="排班人数"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="theActualNumberOfShifts"
      label="实际排班人数"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="numberOfStudentsEntered"
      label="录入学生数"
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
    name: 'salesWorkTable',
    props: ['tableData'],
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>
