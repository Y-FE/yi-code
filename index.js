const trans = require('translation.js');
const fs = require('fs');
const path = require('path');
const template = require('./template');
const chalk = require('chalk');

let dirs = fs.readdirSync('./tables', 'utf8');

dirs.forEach(tableFile => {
    fs.readFile(path.join('./tables', tableFile), 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let heads = data.split('\r\n');
            let argv = {
                name: tableFile,
                fields: [],
            }
            console.log(chalk.blue('start translate table headers'));
            trans.translate({
                text: data,
                from: 'zh-CN',
                to: 'en'
            }).then(result => {
                result.result.forEach((v, i) => {
                    argv.fields.push({
                        prop: toCalmCase(v),
                        label: heads[i]
                    });
                });
                console.log(chalk.yellow('\ntranslate complete: \n'), argv);
                fs.writeFileSync(path.join('./components', tableFile + '.vue'), template(argv));
                console.log(chalk.green(`generate vue component ${tableFile}.vue in ./components`))
            });
        }
    })
})

function toCalmCase(str) {
    let words = str.split(' ');
    let result = [words[0].toLowerCase()].concat(words.splice(1).map(word => word.replace(/^\S/, s => s.toUpperCase())));
    return result.join('');
}