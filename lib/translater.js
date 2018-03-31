const trans = require('translation.js');
const chalk = require('chalk');

async function translate(data) {
    let text = data.join('\n');
    let fields = [];
    let result = await trans.translate({
        text,
        from: 'zh-CN',
        to: 'en'
    });
    result.result.forEach((v, i) => {
        fields.push({
            prop: v,
            label: data[i]
        });
    });
    console.log(chalk.yellow('\ntranslate complete: \n'), fields);
    return fields;
}

exports.translate = translate;
