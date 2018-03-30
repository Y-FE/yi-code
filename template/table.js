module.exports = fields => {
  return `
	<table class="table table-bordered table-hover table-striped">
		<thead>
			<tr>
				${fields
          .map((field, index) => {
            if (index !== fields.length - 1) {
              return `<th class="center">${field.label}</th>\n\t\t\t`;
            } else {
              return `<th class="center">${field.label}</th>`;
            }
          })
          .join("    ")}
			</tr>
		</thead>
		<tbody class="center"> 
			<tr v-for="(item, index) in tableList" :key="index">
				<template>
					${fields
            .map((field, index) => {
              if (index !== fields.length - 1) {
                return `<td>{{item.${field.prop}}}</td>\n\t\t\t\t`;
              } else {
                return `<td>{{item.${field.prop}}}</td>`;
              }
            })
            .join("    ")}
				</template>
			</tr>
		</tbody>
	</table>
`;
};
