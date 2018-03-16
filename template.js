module.exports = (argv) => {
    return `
<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    height=600
    stripe
    border
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    ${argv.fields.map(field => {
        return [
            '<el-table-column',
            '  prop="' + field.prop + '"',
            '  label="' + field.label + '"',
            '  sortable',
            '  width="180">',
            '</el-table-column>\n'
        ].join('\n    ');
    }).join('    ')}
  </el-table>
</template>

<script>
  export default {
    name: '${argv.name}',
    props: ['tableData'],
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>
`;
}