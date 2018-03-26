const trans = require('translation.js');
const chalk = require('chalk');

async function translate(data) {
    let text;
    let fields = [];
    let dataType = typeof data;

    if (dataType === 'string') {
        text = data;
        data = data.split('\r\n').reduce((p, c) => p.concat(c.split('\n')), []);
    } else if (data instanceof Array){
        text = data.join('\n');
    }
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