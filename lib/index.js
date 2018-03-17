const trans = require('translation.js');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

function toCalmCase(str) {
    let words = str.split(' ');
    let result = [words[0].toLowerCase()].concat(words.splice(1).map(word => word.replace(/^\S/, s => s.toUpperCase())));
    return result.join('');
}
// 去除文件扩展名
function getFileName(fileName) {
    return path.basename(fileName, path.extname(fileName));
}

module.exports = (name, inputName, outputName) => {
    const template = require('../template/' + name);
    const fileName = outputName ? getFileName(outputName) : getFileName(inputName);
    fs.readFile(inputName, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let heads = data.split('\r\n');
            let fields = [];
            console.log(chalk.blue('start translate table headers'));
            trans.translate({
                text: data,
                from: 'zh-CN',
                to: 'en'
            }).then(result => {
                result.result.forEach((v, i) => {
                    fields.push({
                        prop: toCalmCase(v),
                        label: heads[i]
                    });
                });
                console.log(chalk.yellow('\ntranslate complete: \n'), fields);
                fs.writeFileSync(path.join(fileName + '.vue'), template(fields));
                console.log(chalk.green(`generate vue component ${fileName}.vue`))
            });
        }
    })
}