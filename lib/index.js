const trans = require('translation.js');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { toCalmCase, toLodash } = require('./formator');
const { translate } = require('./translater');
const { splitToArray } = require('./util');
const jsyaml = require('js-yaml');

// 去除文件扩展名
function getFileName(fileName) {
    return path.basename(fileName, path.extname(fileName));
}

exports.gen = (name, inputName, outputName) => {
    const template = require('../template/' + name);
    const fileName = outputName
        ? getFileName(outputName)
        : getFileName(inputName);
    fs.readFile(inputName, 'utf8', async (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let fields = await translate(splitToArray(data));
            fields.forEach(field => (field.prop = toCalmCase(field.prop)));
            fs.writeFileSync(path.join(fileName + '.vue'), template(fields));
            console.log(chalk.green(`generate vue component ${fileName}.vue`));
        }
    });
};

exports.yml = (inputName, outputName) => {
    let fileName = outputName
        ? getFileName(outputName)
        : getFileName(inputName);
    fs.readFile(inputName, 'utf8', async (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let config = jsyaml.load(data, 'utf8');
            let content = [];
            for (let name in config) {
                let component = config[name];
                let template = require('../template/' +
                    component.template +
                    '.js');
                let data = splitToArray(component.list);
                let fields = await translate(data);
                fields.forEach(field => (field.prop = toCalmCase(field.prop)));
                content.push(template(fields));
            }
            fs.writeFileSync(path.join(fileName + '.vue'), content.join('\n'));
            console.log(chalk.green(`generate vue component ${fileName}.vue`));
        }
    });
};
