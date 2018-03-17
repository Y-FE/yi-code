module.exports = (fields) => {
    return `
  <el-table
    :data="tableData"
    style="width: 100%"
    height=600
    stripe
    border
    :default-sort = "{prop: 'date', order: 'descending'}">
    ${fields.map(field => {
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
`;
}