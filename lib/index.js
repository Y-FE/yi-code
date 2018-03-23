const trans = require('translation.js');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { toCalmCase, toLodash } = require('./formator');
const { translate } = require('./translater');

// 去除文件扩展名
function getFileName(fileName) {
    return path.basename(fileName, path.extname(fileName));
}

module.exports = (name, inputName, outputName) => {
    const template = require('../template/' + name);
    const fileName = outputName ? getFileName(outputName) : getFileName(inputName);
    fs.readFile(inputName, 'utf8', async (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let fields = await translate(data);
            fields.forEach(field => field.prop = toCalmCase(field.prop));
            fs.writeFileSync(path.join(fileName + '.vue'), template(fields));
            console.log(chalk.green(`generate vue component ${fileName}.vue`))
        }
    })
}